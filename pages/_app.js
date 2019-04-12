import React from 'react'
import App, { Container } from 'next/app'

import auth0 from '../services/auth0';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        const user = process.browser ? auth0.clientAuth() : auth0.serverAuth(ctx.req);

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        const auth = {
            user,
            isAuthenticated: !!user
        };

        return { pageProps, auth }
    }

    render() {
        const { Component, pageProps, auth } = this.props;

        return (
            <Container>
                <Component {...pageProps} auth={auth} />
            </Container>
        )
    }
}

export default MyApp