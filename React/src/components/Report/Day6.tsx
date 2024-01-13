import React from "react";
import styled from "styled-components";
import {Nav} from "../../styles/Nav.ts";

const MainContainer = styled.div`
    display: flex;
    border: 1px solid red;
    height: 100vh;
    width: 100%;
`;

const LeftContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const RightContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 70%;
`;

/* Left Logo */
const LeftLogo = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 4px;
    height: 17%;
`;

const LeftSpotifyLogo = styled.img`
    background-color: white;
    height: 30px;
    width: 30px;
    margin-right: 15px;
`;

const LeftSpotifyLogoText = styled.div`
    font-size: 20px;
    font-weight: 3px;
`;

const LeftImage = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 20px;
    color: white;
`;

const LeftLink = styled(Nav)`
    color: #a0a0a0;
`;

const LeftImageContainer = styled.div`
    display: flex;
    color: white;
    margin: 20px;
`;

/* Left Library */

const LeftLibrary = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 80%;
    margin: 4px;
    color: white;
`;

const LeftLibraryContainer = styled.div`
    display: flex;
    color: white;
    margin: 20px;
    position: relative;
`;

const LeftLibraryButton = styled.button`
    background-color: #2a2a2a;
    position: absolute;
    left: 90%;
    color: gray;
    font-size: 32px;
    display: block;
    border: 0;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
`;

const LeftLibraryText = styled.div`
    color: #a0a0a0;
`;


const Day6: React.FC = () => {

    return (
        <MainContainer>
            <LeftContainer>
                <LeftLogo>
                    <LeftImageContainer>
                        <LeftSpotifyLogo src="../../../public/assets/Spotify/logo.svg" alt="logo"/>
                        <LeftSpotifyLogoText>Spotify</LeftSpotifyLogoText>
                    </LeftImageContainer>

                    <LeftImageContainer>
                        <LeftImage src="../../../public/assets/Spotify/home.svg" alt="search"/>
                        <LeftLink href="#">홈</LeftLink>
                    </LeftImageContainer>

                    <LeftImageContainer>
                        <LeftImage src="../../../public/assets/Spotify/search.svg" alt="search"/>
                        <LeftLink href="#">검색하기</LeftLink>
                    </LeftImageContainer>
                </LeftLogo>

                <LeftLibrary>
                    <LeftLibraryContainer>
                        <LeftImage src="../../../public/assets/Spotify/library.svg" alt="search"/>
                        <LeftLibraryText>내 라이브러리</LeftLibraryText>
                        <LeftLibraryButton>+</LeftLibraryButton>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <div>첫 번째 플레이리스트를 만드세요.</div>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <div>팟캐스트 둘러보기</div>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <div>쿠키 align-self 적용1</div>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <div>한국어 align-self 적용2</div>
                    </LeftLibraryContainer>
                </LeftLibrary>
            </LeftContainer>

            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;