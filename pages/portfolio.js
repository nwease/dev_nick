import React, {Component} from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import {Link} from '../routes';
import BasePage from '../components/basePage';
import { Card, Col, Row, CardText, CardBody,
    CardTitle, CardHeader } from 'reactstrap';

class Portfolio extends Component {

    static async getInitialProps() {
        let posts = [];

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            posts = response.data;
        } catch(err) {
            console.error(err)
        }

        return{posts: posts.splice(0, 10)};
    }

    renderPosts = (posts) => {
        return posts.map((post, index) => {
            return (
                <Col md='4'>
                    <React.Fragment key={index}>
                        <span>
                            <Card className='portfolio-card'>
                                <CardHeader className='portfolio-card-header'>Some Position {index}</CardHeader>
                                <CardBody>
                                    <p className='portfolio-card-city'> Some Location {index} </p>
                                    <CardTitle className='portfolio-card-title'>Some Company {index}</CardTitle>
                                    <CardText className='portfolio-card-text'>Some Description {index}</CardText>
                                    <div className='readMore'> </div>
                                </CardBody>
                            </Card>
                        </span>
                    </React.Fragment>
                </Col>
            )
        })
    };

    render() {

        const {posts} = this.props;

        return (
           <Layout {...this.props.auth}>
               <BasePage className='portfolio-page' title='Portfolio'>
                   <Row>
                       {this.renderPosts(posts)}
                   </Row>
               </BasePage>
           </Layout>
        );
    }
}

export default Portfolio;