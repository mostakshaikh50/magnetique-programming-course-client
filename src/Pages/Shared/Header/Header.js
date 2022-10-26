import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Image from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const navigate = useNavigate();

    function setTheme(themeName) {
        localStorage.setItem('theme', themeName);
        document.documentElement.className = themeName;
    }

    // function to toggle between light and dark theme
    const toggleTheme = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
        } else {
            setTheme('theme-dark');
        }
    }


    return (
        <Navbar collapseOnSelect className='mb-5' expand="lg" bg="dark" variant="primary">
            <Container>
                <Navbar.Brand><img alt="" src={Image} width="30" height="30"
              className="d-inline-block align-top "/><Link to='/' style={{textDecoration: 'none'}}> Magnetique Programming Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' style={{textDecoration: 'none'}}>Courses</Link></Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>                       
                    </Nav>
                    <Nav>{
                           user?.uid ?
                           <Button style={{marginRight:"10px"}} onClick={logOut}>Log Out</Button>
                           

                            :
                            <Link style={{textDecoration: 'none',marginRight:"10px", fontWeight:"600"}} to="/login">Login</Link>

                        }
                        
                        <label id="switch" class="switch">
                                <input type="checkbox" onChange={toggleTheme} id="slider"/>
                                    <span class="slider round"></span>
                            </label>                     
                    </Nav>
                    <span>{user?.email}</span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;