const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const namespace = 'http://localhost/3000/';

// MIDDLEWARE
exports.checkJWT = jwt({
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 10,
        jwksUri: 'https://nwease.auth0.com/.well-known/jwks.json'
    }),

    audience: 'tjamzxX55eSXdMqo03tpoe7yFjBUWzQN',
    issuer: 'https://nwease.auth0.com/',
    algorithums: ['RS256']
});

exports.checkRole = role => (req, res, next) => {
    const user = req.user;

    if (user && (user[namespace + '/role'] === role)) {
        next();
    } else {
        return res.status(401).send({
            title: 'Not Authorized',
            detail: 'Access Denied'
        })
    }
};