import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';

class Cv extends Component {
    render() {
        return (
            <Layout {...this.props.auth}>
                <BasePage>
                    <h1>CV</h1>
                </BasePage>
            </Layout>
        );
    }
}

export default Cv;