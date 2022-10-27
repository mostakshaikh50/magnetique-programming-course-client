import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import Imgs from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import { Button, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';


const Header = () => {
    const {user, logOut} = useContext(AuthContext);
   

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
                <Navbar.Brand><img alt="" src={Imgs} width="30" height="30"
              className="d-inline-block align-top "/><Link to='/' style={{textDecoration: 'none'}}> Magnetique Programming Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/' style={{textDecoration: 'none'}}>Courses</Link></Nav.Link>
                        
                        <Nav.Link><Link style={{textDecoration: 'none'}} to='/blog'>Blog</Link></Nav.Link>
                                      
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
                    <Nav>
                        <Nav.Link style={{color:'green'}}>{user?.displayName}</Nav.Link>
                        
                    <Nav.Link>
                        {user?.photoURL ? 
                        <Image style={{height:'40px'}} roundedCircle 
                        src={user?.photoURL}></Image>
                        : <FaUser></FaUser>
                        }
                    </Nav.Link>
                    </Nav>
                    
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;