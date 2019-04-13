import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';

class Secret extends Component {

    renderSecretPage = () => {
        const { isAuthenticated } = this.props.auth;

        if (isAuthenticated) {
            return (
                <Layout {...this.props.auth}>
                    <BasePage>
                        <h1>Secret</h1>
                        <p>Secret Content Here</p>
                    </BasePage>
                </Layout>
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

    render() {
        return this.renderSecretPage();
    }
}

export default Secret;