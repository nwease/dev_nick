import React from 'react';
import Layout from '../layout/Layout';
import BasePage from '../basePage';

export default function(Component) {
    return class withAuth extends React.Component {

        static async getInitialProps(args){
            const pageProps = await Component.getInitialProps && await Component.getInitialProps(args)

            return {...pageProps}
        }

        renderProtectedPage() {

            const { isAuthenticated } = this.props.auth;

            if (isAuthenticated) {
                return (
                    <Component {...this.props} />
                )
            } else {
                return (
                    <Layout {...this.props.auth}>
                        <BasePage>
                            <h1>Not Authenticated. Please Login.</h1>
                        </BasePage>
                    </Layout>
                )
            }
        };

        render(){
            return this.renderProtectedPage()
        }
    }
};

