import React, {Component} from 'react';
import Link from 'next/link';

class Header extends Component {
    render() {

        const title = this.props.title;

        return (
            <React.Fragment>
                <p> { title } </p>
                {this.props.children}
                <Link href='/'>
                    <a> Home </a>
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
            </React.Fragment>
        );
    }
}

export default Header;