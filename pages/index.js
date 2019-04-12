import React, { Component } from 'react';
import Typed from 'react-typed';
import Layout from '../components/layout/Layout';
import { Container, Row, Col } from 'reactstrap';

class Index extends Component {

    constructor(props) {
        super(props);

        this.roles = ['Front End Developer', 'Passionate Learner', 'ReactJS', 'JavaScript']
    }

    render() {

        const { isAuthenticated, user } = this.props;

        return (
            <Layout className='cover' {...this.props.auth}>
                <div className='main-section'>
                    <div className='background-image'>
                        <img src='/static/images/background-index.jpg' alt='mountains' />
                    </div>

                    <Container>
                        <Row>
                            <Col md='6'>
                                <div className='hero-section'>
                                    <div className={`flipper`}>
                                        <div className='back'>
                                            <div className='hero-section-content'>
                                                <h2> Front End Web Developer </h2>
                                                <div className='hero-section-content-intro'>
                                                    Have a look at my portfolio.
                                                </div>
                                            </div>

                                            <img className='image' src='/static/images/section-1.png' alt='code'/>

                                            <div className='shadow-custom'>
                                                <div className='shadow-inner'> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                            <Col md='6' className='hero-welcome-wrapper'>
                                <div className='hero-welcome-text'>
                                    <h1>
                                        { isAuthenticated && <span><b> {user.name} </b></span> }
                                        Hello. My name is <span style={{color:'#99f2c8'}}>Nicholas Wease</span>. Welcome to my portfolio website. You can learn more about me and discover what I can do for you!
                                    </h1>
                                </div>

                                <Typed
                                    loop
                                    typeSpeed={70}
                                    backSpeed={70}
                                    strings={this.roles}
                                    backDelay={1000}
                                    loopCount={0}
                                    showCursor
                                    className='self-typed'
                                    cursorChar='|'
                                />

                                <div className='hero-welcome-bio'>
                                    <h1>
                                        Let's take a look at some of my work.
                                    </h1>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        );
    }
}

export default Index;
