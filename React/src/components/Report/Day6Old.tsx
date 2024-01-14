import React from "react";
import styled from "styled-components";

const RootContainer = styled.div`
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    color: white;
    width: 100%;
    height: 100%;
`;

const Navigation = styled.div`
    height: 80px;
    width: 1651px;
    background-color: black;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Main = styled.div`
    height: 968px;
    width: 1651px;
    background-color: rgb(41, 65, 171);
    background-image: url("https://www-growth.scdn.co/static/home/bursts.svg");
    background-size: 175%;
    background-position: 46% 4%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = styled.div`
    height: 530px;
    width: 1651px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Link = styled.a`
    color: white;
    text-decoration: none;
    padding: 28px 17px 28px 17px;
    font-weight: 700;

    &:hover {
        color: #1ed760;
    }
`;

const MainContainer = styled.div`
`;

const MainHeader = styled.div`
    position: relative;
    left: -0.7em;
    font-size: 100px;
    color: #1ed760;
    font-weight: 900;
    padding-bottom: 30px;
`;

const MainHeader2 = styled.div`
    width: 800px;
    font-size: 100px;
    line-height: 166px;
    color: #1ed760;
    font-weight: 900;
    position: relative;
    right: -1.7em;
`;

const MainHeader3 = styled.div`
    color: #1ed760;
    text-align: center;
    font-size: 18px;
    padding-bottom: 40px;
`;

const MainButton = styled.div`
    text-align: center;

    button {
        padding: 14px 32px;
        background-color: #1ed760;
        border-radius: 500px;
        font-size: inherit;
        color: #2941ab;
        font-weight: 700;
        border: none;

        &:hover {
            transform: scale(1.12);
            background-color: #2de26d;
        }
    }
`;

const FooterContainer = styled.div`
    max-width: 1170px;
    width: 100%;
    padding-top: 80px;
    padding-bottom: 50px;
`;

const FooterOne = styled.div`
    display: flex;
    justify-content: space-between;
    height: 346px;
`;

const FooterOne1 = styled.div`
    
`;

const Day6Old: React.FC = () => {
    return (
        <RootContainer>
            <Navigation>
                <div>
                    <img src="../../../public/assets/Spotify/old/logo.png" alt="logo" width="132"/>
                </div>

                <div>
                    <Link href="#">Premium</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Download</Link>
                    <span>|</span>
                    <Link href="#">Sign Up</Link>
                    <Link href="#">Login</Link>
                </div>
            </Navigation>

            <Main>
                <MainContainer>
                    <div>
                        <MainHeader>
                            Listening is
                        </MainHeader>

                        <MainHeader2>
                            everything
                        </MainHeader2>
                    </div>

                    <MainHeader3>
                        Millions of songs and podcasts. No credit card needed.
                    </MainHeader3>

                    <MainButton>
                        <button>Get Spotify free</button>
                    </MainButton>
                </MainContainer>
            </Main>

            <Footer>
                <FooterContainer>
                    <FooterOne>
                        <FooterOne1>
                            <img src="../../../public/assets/Spotify/old/logo.png" alt="logo" width="132"/>
                        </FooterOne1>

                        <div>
                            Company
                        </div>

                        <div>
                            Communities
                        </div>

                        <div>
                            Useful Links
                        </div>

                        <div>
                            Instagram
                        </div>
                    </FooterOne>

                    <div></div>

                    <div></div>
                </FooterContainer>
            </Footer>
        </RootContainer>
    );
};

export default Day6Old;