import React, {Component} from 'react';
import Layout from '../components/layout/Layout';

class Super extends Component {

    constructor(props){
        super(props);

        this.aVariable = 'A Variable'
    }

    alertName(title) {
        alert(title)
    };

    render() {
        return (
            <Layout>
                <h1>Super</h1>
            </Layout>
        );
    }
}

export default Super;