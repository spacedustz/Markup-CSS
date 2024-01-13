import React from "react";
import styled from "styled-components";

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

/* --- */
const LeftLogo = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 4px;
    height: 20%;
`;

const LeftSpotifyLogo = styled.img`
    background-color: white;
    height: 24px;
    width: 24px;
    margin-right: 2px;
`;

const LeftImage = styled.img`
    height: 24px;
    width: 24px;
`;

const LeftImageContainer = styled.div`
    display: flex;
    color: white;
    margin: 20px;
`;

const LeftLibrary = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 80%;
    margin: 4px;
    color: white;
`;


const Day6: React.FC = () => {

    return (
        <MainContainer>
            <LeftContainer>
                <LeftLogo>
                    <LeftImageContainer>
                        <LeftSpotifyLogo src="../../../public/assets/Spotify/logo.svg" alt="logo"/>
                        <div>Spotify</div>
                    </LeftImageContainer>

                    <LeftImageContainer>
                        <a href="#">홈</a>
                    </LeftImageContainer>

                    <LeftImageContainer>
                        <LeftImage src="../../../public/assets/Spotify/search.svg" alt="search"/>
                        <a href="#">검색하기</a>
                    </LeftImageContainer>
                </LeftLogo>

                <LeftLibrary>
                    <div>내 라이브러리</div>
                    <div>플레이리스트 만들기</div>
                    <div>팟캐스트 둘러보기</div>
                    <div>쿠키 align-self 적용1</div>
                    <div>한국어 align-self 적용2</div>
                </LeftLibrary>
            </LeftContainer>

            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;