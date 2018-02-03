import React, {Component} from 'react';
import { NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';


class HeaderLinks extends Component{
    render(){
        const notification = (
            <div>
                <p className="hidden-lg hidden-md">Notification</p>
            </div>
        );
        return (
            <div>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        <p className="hidden-lg hidden-md">Dashboard</p>
                    </NavItem>
                    <NavItem eventKey={3} href="#">
                    </NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Switch Account</NavItem>
                    <NavItem eventKey={3} href="#">Log out</NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
