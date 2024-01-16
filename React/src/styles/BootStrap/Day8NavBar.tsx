import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import styled from "styled-components";

const BlackButton = styled(Button)`
    color: black;
    border-color: black;
    
    &:hover {
        background-color: black;
    }
`;

const Day8NavBar: React.FC = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">LOUIS VUITTON</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">NEW</Nav.Link>
                        <Nav.Link href="#action2">WOMEN</Nav.Link>
                        <Nav.Link href="#action2">MEN</Nav.Link>
                        <Nav.Link href="#action2">ART OF LIVING</Nav.Link>
                        <Nav.Link href="#action2">MAGAGINE</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <BlackButton variant="outline-success">Search</BlackButton>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Day8NavBar;