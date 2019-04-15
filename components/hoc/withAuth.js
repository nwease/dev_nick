import React from 'react';
import Layout from '../layout/Layout';
import BasePage from '../basePage';

const namespace = 'http://localhost:3000/';

export default function(Component, role) {
    return class withAuth extends React.Component {

        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args)

            return {...pageProps}
        }

        renderProtectedPage() {

            const { isAuthenticated, user } = this.props.auth;
            const userRole = user && user[`${namespace}role`];
            let isAuthorized = false;

            if (role) {
                if (userRole && userRole === role) {
                    isAuthorized = true;
                }
            } else {
                isAuthorized = true;
            }

            if (!isAuthenticated) {
                return (
                    <Layout {...this.props.auth}>
                        <BasePage>
                            <h1>Not Authenticated. Please Login.</h1>
                        </BasePage>
                    </Layout>
                )
            } else if (!isAuthorized) {
                return (
                    <Layout {...this.props.auth}>
                        <BasePage>
                            <h1>Not Authorized. Permission Denied.</h1>
                        </BasePage>
                    </Layout>
                )
            } else {
                return (
                    <Component {...this.props} />
                )
            }
        };

        render(){
            return this.renderProtectedPage()
        }
    }
};

