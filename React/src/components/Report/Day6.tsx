import React from "react";
import {
    BottomLanguageIcon, BottomLanguageText,
    BottomLink,
    BottomSection, LanguageButton,
    LeftContainer, LeftImage,
    LeftImageContainer, LeftLibraryButton, LeftLibraryText, LeftLink,
    LeftSpotifyLogo,
    LeftSpotifyLogoText, LeftSubButton, Library, LibrarySub, LibrarySubContainer,
    Logo,
    MainContainer, RightContainer
} from "../../styles/Day6.ts";

const Day6: React.FC = () => {

    return (
        <MainContainer>
            <LeftContainer>
                <Logo>
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
                </Logo>

                <Library>
                    <LibrarySub>
                        <LeftImage src="../../../public/assets/Spotify/library.svg" alt="search"/>
                        <LeftLibraryText>내 라이브러리</LeftLibraryText>
                        <LeftLibraryButton>+</LeftLibraryButton>
                    </LibrarySub>

                    <LibrarySub>
                        <LibrarySubContainer>
                            <div><strong>첫 번째 플레이리스트를 만드세요.</strong></div>
                            <div>어렵지 않아요. 저희가 도와드릴게요.</div>
                            <LeftSubButton>플레이리스트 만들기</LeftSubButton>
                        </LibrarySubContainer>
                    </LibrarySub>

                    <LibrarySub>
                        <LibrarySubContainer>
                            <div><strong>팔로우할 팟캐스트를 찾아보세요</strong></div>
                            <div>새로운 에피소드에 대한 소식을 알려드릴게요.</div>
                            <LeftSubButton>팟캐스트 둘러보기</LeftSubButton>
                        </LibrarySubContainer>
                    </LibrarySub>

                    <BottomSection>
                            <BottomLink>쿠키</BottomLink>
                        <LanguageButton>
                            <BottomLanguageIcon src="../../../public/assets/Spotify/globe.svg" alt="globe"/>
                            <BottomLanguageText>한국어</BottomLanguageText>
                        </LanguageButton>
                    </BottomSection>
                </Library>
            </LeftContainer>



            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;