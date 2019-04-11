import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';

import auth0Client from '../services/auth0';
import { withRouter } from 'next/router';

class Callback extends Component {

    async componentDidMount(props) {
        await auth0Client.handleAuthentication();
        this.props.router.push('/');
    }

    render() {
        return (
            <Layout>
                <BasePage>
                    <h1>
                        Verifying Login ...
                    </h1>
                </BasePage>
            </Layout>
        );
    }
}

export default withRouter (Callback);