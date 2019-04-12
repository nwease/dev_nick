import React, {Component} from 'react';
import axios from 'axios';
import Layout from '../components/layout/Layout';
import {Link} from '../routes';
import BasePage from "../components/basePage";

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
                <li key={index}>
                    <Link route={`/details/${post.id}`}>
                        <a> {post.title} </a>
                    </Link>
                </li>
            )
        })
    };

    render() {

        const {posts} = this.props;

        return (
           <Layout {...this.props.auth}>
               <BasePage>
                   <h1>
                       PORTFOLIO
                   </h1>

                   <ul>
                       {this.renderPosts(posts)}
                   </ul>
               </BasePage>
           </Layout>
        );
    }
}

export default Portfolio;