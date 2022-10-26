import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
            <Row>
                <Col lg="4">
                   <h3 className='mt-3'><SideNav></SideNav></h3>
                </Col>
                <Col lg="8">
                    <Outlet></Outlet>  
                </Col>
            </Row>
        </Container>
        <Footer></Footer>
        </div>
    );
};

export default Main;