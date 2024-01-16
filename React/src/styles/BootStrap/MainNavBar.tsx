import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Memo from "../../components/Memo.tsx";

const MainFont = styled(Navbar)`
    font-weight: bold;
    font-size: 15px;
    background-color: #bbd9bb;
`;

const MainNav: React.FC = () => {
    return (
        <MainFont expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="https://github.com/spacedustz">신건우</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="https://github.com/spacedustz" target="_blank">Github</Nav.Link>
                        <Nav.Link href="https://iizz.tistory.com">Blog</Nav.Link>
                        <NavDropdown title="과제 제출" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={NavLink} to="/Day-01-Assignment">1. 자기소개 페이지</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Day-02-Assignment">2. CSS 연습</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Day-03-04-Assignment">3. Google 클론 코딩</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Day-05-Assignment">4. Position & Flex Box</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Day-06-Assignment">5-1. Spotify 최신 페이지</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/Day-06-02-Assignment">5-2. Spotify 이전 페이지</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="메모장" id="navbarScrollingDropdown">
                            <Memo />
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </MainFont>
    );
};

export default MainNav;