import React, { Component } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';

const BootNavLink = (props) => {

    const { route, title } = props;

    return (
        <Link href={route}>
            <a className='port-navbar-link'> {title} </a>
        </Link>
    )
};

class Example extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className='port-navbar port-default absolute' color='transparent' light expand='md'>
                    <NavbarBrand className='port-navbar-brand' href='/static/images/developernick.png'>Developer Nick</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem className='port-navbar-item'>
                                <BootNavLink route='/' title='Home' />
                            </NavItem>

                            <NavItem className='port-navbar-item'>
                                <BootNavLink route='/about' title='About' />
                            </NavItem>

                            <NavItem className='port-navbar-item'>
                                <BootNavLink route='/blog' title='Blog' />
                            </NavItem>

                            <NavItem className='port-navbar-item'>
                                <BootNavLink route='/cv' title='CV' />
                            </NavItem>

                            <NavItem className='port-navbar-item'>
                                <BootNavLink route='/portfolio' title='Portfolio' />
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Example;