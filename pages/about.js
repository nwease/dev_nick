import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';

class About extends Component {
    render() {
        return (
            <Layout {...this.props.auth}>
                <BasePage className='about-page' title='About'>

                </BasePage>
            </Layout>
        );
    }
}

export default About;