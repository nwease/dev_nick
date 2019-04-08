import React from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import Super from '../components/Super';

class Index extends Super {

    static async getInitialProps() {
        let userData = {};
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
            userData = response.data;
        } catch(err) {
            console.error(err)
        }

        return{initialData: [1,2,3,4], userData};
    }

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
        const {userData, initialData} = this.props;

        return (
            <Layout>
                <h1 className='home'>HOME</h1>
                <h2>
                    { title }
                </h2>

                <h2>
                    { userData.title }
                </h2>
                <button onClick={ this.updateTitle }>
                    Change Title
                </button>
            </Layout>
        );
    }
}

export default Index;
