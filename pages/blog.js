import React, {Component} from 'react';
import Link from 'next/link';
import Header from '../components/shared/Header';

class Blog extends Component {
    render() {
        return (
            <div>
                <h1>BLOG</h1>
                <Header />
            </div>
        );
    }
}

export default Blog;