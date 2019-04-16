import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import { withRouter } from 'next/router';
const axios = require('axios');
import BasePage from '../components/basePage';

class Details extends Component {

    static async getInitialProps({query}) {
        const portfolioId = query.id;
        let portfolio = {};

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
            portfolio = response.data;
        } catch(err) {
            console.error(err)
        }

        return {portfolio};
    }

    render() {

        const {portfolio} = this.props;

        return (
            <Layout {...this.props.auth}>
                <BasePage title='Details'>
                    <h1>TITLE: {portfolio.title}</h1>
                    <p>BODY: {portfolio.body}</p>
                    <p>ID: {portfolio.id}</p>
                </BasePage>
            </Layout>
        );
    }
}

export default withRouter (Details);