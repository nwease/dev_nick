import React, {Component} from 'react';
import Layout from '../components/layout/Layout';
import BasePage from '../components/basePage';
import withAuth from '../components/hoc/withAuth';
import { getSecretInfo } from '../actions';

class Secret extends Component {

    static getInitialProps(){
        const protectedSecret = 'Protected Secret';

        return {protectedSecret}
    }

    // constructor(props){
    //     super(props);
    //
    //     this.state = {
    //         secretData: []
    //     }
    // }

    state = {
        secretData: []
    };

    async componentDidMount() {
        const secretData = await getSecretInfo();

        this.setState({
            secretData
        });
    }

    displaySecretData(){
        const {secretData} = this.state;

        if (secretData && secretData.login > 0) {
            return secretData.map((data, index) => {
                return (
                    <div key={index}>
                        <p>{data.title}</p>
                        <p>{data.description}</p>
                    </div>
                )
            })
        }

        return null;
    }

    render() {

        const { protectedSecret } = this.props;

        return (
            <Layout {...this.props.auth}>
                <BasePage>
                    <h1>Protected</h1>
                    <p>Protected Content Here</p>
                    <h2>{protectedSecret}</h2>
                    {this.displaySecretData()}
                </BasePage>
            </Layout>
        )
    }
}

export default withAuth (Secret);