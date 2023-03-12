import React from 'react';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col className="d-none d-lg-block" lg="2">
                    <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                    <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                       <RightSideNav></RightSideNav>
                    </Col>
                </Row>
                
            </Container>
            <Footer></Footer>

          
        </div>
    );
};

export default Main;