import React, { Component } from 'react';
import Layout from '../components/layout/Layout';
import { Button, Container } from 'reactstrap';

class Index extends Component {
    render() {
        return (
            <Layout>
                <Container>
                    <Button color='danger'>danger</Button>
                </Container>
            </Layout>
        );
    }
}

export default Index;
