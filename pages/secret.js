import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';
import withAuth from '../components/hoc/withAuth';

class Secret extends Component {

    static getInitialProps(){
        const protectedSecret = 'Protected Secret';

        return {protectedSecret}
    }

    render() {

        const { protectedSecret } = this.props;

        return (
            <Layout {...this.props.auth}>
                <BasePage>
                    <h1>Protected</h1>
                    <p>Protected Content Here</p>
                    <h2>{protectedSecret}</h2>
                </BasePage>
            </Layout>
        )
    }
}

export default withAuth (Secret);