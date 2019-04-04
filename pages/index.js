import React, {Component} from 'react';
import Link from 'next/link';

class Index extends Component {
    render() {
        return (
            <div>
                <h1>INDEX</h1>
                <Link href='/'>
                    <a> Index </a>
                </Link>

                <Link href='/about'>
                    <a> About </a>
                </Link>

                <Link href='/blog'>
                    <a> Blog </a>
                </Link>

                <Link href='/cv'>
                    <a> CV </a>
                </Link>

                <Link href='/portfolio'>
                    <a>Portfolio</a>
                </Link>
            </div>
        );
    }
}

export default Index;
