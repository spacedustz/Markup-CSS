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
    
    img {
        height: 24px;
        width: 24px;
    }
`;

const LeftLibrary = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    height: 20%;
    margin: 4px;
`;

const LeftFooter = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    height: 60%;
    margin: 4px;
`

const Day6: React.FC = () => {

    return (
        <MainContainer>
            <LeftContainer>
                <LeftLogo>
                    <a href="#">홈</a>
                    <a href="#">검색하기</a>
                    <img src="../../../public/assets/Spotify/search.svg"/>
                </LeftLogo>

                <LeftLibrary>
                    Left Middle
                </LeftLibrary>

                <LeftFooter>
                    Left Footer
                </LeftFooter>
            </LeftContainer>

            <RightContainer>
                <div>dd</div>
            </RightContainer>
        </MainContainer>
    )
}

export default Day6;