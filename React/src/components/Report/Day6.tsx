import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    display: flex;
    background-color: #2a2a2a;
    border: 1px solid red;
    height: 100vh;
    width: 100%;
`;

const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

/* --- */
const LeftLogo = styled.div`
    display: flex;
    flex-direction: column;
    
    img {
        height: 24px;
        width: 24px;
    }
`;

const Day6: React.FC = () => {

    return (
        <MainContainer>
            <LeftContainer>
                <LeftLogo>
                    <a href="#">홈</a>
                    <a href="#">검색하기</a>
                    <img src="../../../public/assets/Spotify/search.svg"/>
                </LeftLogo>
                <div></div>
                <div></div>
            </LeftContainer>

            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;