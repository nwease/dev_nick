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
            <a className='nav-link'> {title} </a>
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
                <Navbar color='light' light expand='md'>
                    <NavbarBrand href='/static/images/developernick.png'>Developer Nick</NavbarBrand>

                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <BootNavLink route='/' title='Home' />
                            </NavItem>

                            <NavItem>
                                <BootNavLink route='/about' title='About' />
                            </NavItem>

                            <NavItem>
                                <BootNavLink route='/blog' title='Blog' />
                            </NavItem>

                            <NavItem>
                                <BootNavLink route='/cv' title='CV' />
                            </NavItem>

                            <NavItem>
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