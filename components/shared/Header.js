// import React, {Component} from 'react';
// import Link from 'next/link';
//
// class Header extends Component {
//     render() {
//         return (
//             <React.Fragment>
//                 <Link href='/'>
//                     <a> Home </a>
//                 </Link>
//
//                 <Link href='/about'>
//                     <a> About </a>
//                 </Link>
//
//                 <Link href='/blog'>
//                     <a> Blog </a>
//                 </Link>
//
//                 <Link href='/cv'>
//                     <a> CV </a>
//                 </Link>
//
//                 <Link href='/portfolio'>
//                     <a>Portfolio</a>
//                 </Link>
//             </React.Fragment>
//         );
//     }
// }
//
// export default Header;

import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
                                <NavLink href='/components/'>Components</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>

                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>

                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>

                                    <DropdownItem divider />

                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Example;