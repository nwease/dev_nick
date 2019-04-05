import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import Super from '../components/Super';

class Index extends Super {

    constructor(props) {
        super(props);

        this.state = {
            title: 'Home'
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    updateTitle =() => {
        {this.setState({title: 'updated'})}
    };

    render() {

        const { title } = this.state;

        return (
            <Layout>
                <h1 className='home'>HOME</h1>
                <h2>
                    { title }
                </h2>
                <button onClick={ this.updateTitle }>
                    Change Title
                </button>
            </Layout>
        );
    }
}

export default Index;
