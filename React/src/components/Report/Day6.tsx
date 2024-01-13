import React from "react";
import styled from "styled-components";
import {Nav} from "../../styles/Nav.ts";

const MainContainer = styled.div`
    display: flex;
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

const LeftSubButton = styled.button`
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 15px;
    color: #3c4043;
    font-family: Apple SD Gothic Neo, arial, sans-serif;
    font-size: 14px;
    margin: 11px 4px;
    padding: 0 16px;
    line-height: 27px;
    height: 36px;
    min-width: 54px;
    text-align: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
        background-color: #f8f9fa;
        border: 1px solid #dadce0;
        color: #202124;
    }
`;

const LeftGlobeButton = styled(LeftSubButton)`
    background-color: #303030;
    display: flex;
    color: white;
    
    p {
        padding-bottom: 10px;
    }
`;

const LibrarySubContainer = styled.div`
    padding: 3px;
    background-color: #303030;
    height: 100%;
    width: 100%;
    border-radius: 10px;

    div {
        padding-top: 7px;
        padding-left: 7px;
    }
`;

const LeftLibraryGlobe = styled(LeftLibrary)`
    align-self: flex-end;
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

                <LeftLibraryGlobe>
                    <LeftLibraryContainer>
                        <LeftImage src="../../../public/assets/Spotify/library.svg" alt="search"/>
                        <LeftLibraryText>내 라이브러리</LeftLibraryText>
                        <LeftLibraryButton>+</LeftLibraryButton>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <LibrarySubContainer>
                            <div><strong>첫 번째 플레이리스트를 만드세요.</strong></div>
                            <div>어렵지 않아요. 저희가 도와드릴게요.</div>
                            <LeftSubButton>플레이리스트 만들기</LeftSubButton>
                        </LibrarySubContainer>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <LibrarySubContainer>
                            <div><strong>팔로우할 팟캐스트를 찾아보세요</strong></div>
                            <div>새로운 에피소드에 대한 소식을 알려드릴게요.</div>
                            <LeftSubButton>팟캐스트 둘러보기</LeftSubButton>
                        </LibrarySubContainer>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <LeftLink>쿠키</LeftLink>
                    </LeftLibraryContainer>

                    <LeftLibraryContainer>
                        <LeftGlobeButton>
                            <LeftImage src="../../../public/assets/Spotify/globe.svg" alt="globe"/>
                            <p>한국어</p>
                        </LeftGlobeButton>
                    </LeftLibraryContainer>
                </LeftLibraryGlobe>
            </LeftContainer>

            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;