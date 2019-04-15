import auth0 from 'auth0-js';
import Cookies from 'js-cookie';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { getCookieFromReq } from '../helpers/utils';

class Auth0 {

    constructor(){
        this.auth0 = new auth0.WebAuth({
            domain: 'nwease.auth0.com',
            clientID: 'tjamzxX55eSXdMqo03tpoe7yFjBUWzQN',
            redirectUri: 'http://localhost:3000/callback',
            responseType: 'token id_token',
            scope: 'openid profile'
        });

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
    }

    handleAuthentication() {

        return new Promise((resolve, reject) => {
            this.auth0.parseHash((err, authResult) => {
                if (authResult && authResult.accessToken && authResult.idToken) {
                    this.setSession(authResult);
                    resolve();
                } else if (err) {
                    reject(err);
                    console.log(err);
                }
            });
        });
    }

    setSession(authResult) {
        // Set isLoggedIn flag in localStorage
        localStorage.setItem('isLoggedIn', 'true');

        // Set the time that the access token will expire at
        const expiresAt = (authResult.expiresIn * 1000) + new Date().getTime();

        // this.accessToken = authResult.accessToken;

        Cookies.set('user', authResult.idTokenPayload);
        Cookies.set('jwt', authResult.idToken);
        Cookies.set('expiresAt', expiresAt);
    }

    logout() {
        Cookies.remove('user');
        Cookies.remove('jwt');
        Cookies.remove('expiresAt');

        this.auth0.logout({
            returnTo: '',
            clientId: 'tjamzxX55eSXdMqo03tpoe7yFjBUWzQN'
        })
    }

    login() {
        this.auth0.authorize();
    }

    async getJWKS() {
        const res = await axios.get('https://nwease.auth0.com/.well-known/jwks.json');
        const jwks = res.data;

        return jwks;
    }

    async verifyToken(token) {
        if (token) {
            const decodedToken = jwt.decode(token, {complete: true});

            if (!decodedToken) {
                return null;
            }

            const jwks = await this.getJWKS();
            const jwk = jwks.keys[0];

            // BUILD CERTIFICATE
            let cert = jwk.x5c[0];
            cert = cert.match(/.{1,64}/g).join('\n');
            cert = `-----BEGIN CERTIFICATE-----\n${cert}\n-----END CERTIFICATE-----\n`;

            if (jwk.kid === decodedToken.header.kid) {
                try {
                    const verifiedToken = jwt.verify(token, cert);
                    const expiresAt = verifiedToken.exp * 1000;

                    return (verifiedToken && new Date().getTime() < expiresAt) ? verifiedToken : null;
                } catch(err) {
                    return null;
                }
            }
        }

        return null;
    }

    async clientAuth() {
        const token = Cookies.getJSON('jwt');
        const verifiedToken = await this.verifyToken(token);

        return verifiedToken;
    }

    async serverAuth(req) {
        if (req.headers.cookie) {

            const token = getCookieFromReq(req, 'jwt');
            const verifiedToken = await this.verifyToken(token);

            return verifiedToken;
        }

        return null
    }
}

const auth0Client = new Auth0();

export default auth0Client;