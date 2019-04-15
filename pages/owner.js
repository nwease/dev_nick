import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';
import withAuth from '../components/hoc/withAuth';

class Owner extends Component {
    render() {
        return (
            <Layout {...this.props.auth}>
                <BasePage>
                    <h1>Owner</h1>
                </BasePage>
            </Layout>
        );
    }
}

export default withAuth (Owner);