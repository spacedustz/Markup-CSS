import React from "react";
import styled from "styled-components";
import {Nav} from "../../styles/Nav.ts";

const Day34Container = styled.div`
    display: contents;
    font-family: Apple SD Gothic Neo,arial,sans-serif;
    position: relative;
`;

const Navigation = styled.div`
    float: right; // 요소들을 오른쪽으로 배치
    margin: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
`;

const Header = styled.div`
    margin-top: 300px;
    text-align: center;
    
    @media (max-width: 768px) {
        margin-top: 100px;
    }
`;

const Input = styled.input`
    margin-top: 20px;
    width: 561px;
    height: 44px;
    border-radius: 24px;
    border: 1px solid #dfe1e5;
    padding-left: 60px;
    padding-right: 60px;
    
    @media (max-width: 768px) {
        width: 70%;
        padding-left: 20px;
        padding-right: 20px;
    }
`;
const SearchIcon = styled.img`
    position: relative;
    left: 40px;
    color: #9aa0a6;
    
    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;

const Microphone = styled.img`
    position: relative;
    right: 40px;
    color: #9aa0a6;

    @media (max-width: 768px) {
        margin-right: 10px;
    }
`;

const Middle = styled.div`
    padding-top: 18px;
`;

const MiddleButton1 = styled.button`
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Apple SD Gothic Neo,arial,sans-serif;
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
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        background-color: #f8f9fa;
        border: 1px solid #dadce0;
        color: #202124;
    }
`;

const MiddleButton2 = styled.button`
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    font-family: Apple SD Gothic Neo,arial,sans-serif;
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
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        background-color: #f8f9fa;
        border: 1px solid #dadce0;
        color: #202124;
    }
`;

const FooterMain = styled.div`
    position: absolute; // 절대값 기준으로 바닥에 붙인다 -> bottom 0px
    bottom: 0px;
    background-color: #f2f2f2;
    width: 100%;
`;

const Country = styled.div`
    padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: #202124;
    display: flex;
`;

const SecondFooterBar = styled.div`
    padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: #202124;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;


const Day34: React.FC = () => {

    return (
        <Day34Container>
            <Navigation>
                <Nav href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank">Gmail</Nav>
                <Nav href="https://www.google.com/imghp?hl=ko&tab=ri&ogbl" target="_blank">Images</Nav>
                <img src="../../../public/assets/Google/menu.svg" alt="menu"/>
            </Navigation>

            <Header>
                <img src="../../../public/assets/Google/google.png" alt="google" width="272" height="92"/>
                <div>
                    <SearchIcon src="../../../public/assets/Google/search.svg" alt="search"/>
                    <Input type="text"/>
                    <Microphone src="../../../public/assets/Google/microphone.svg" alt="microphone"/>
                </div>

                <Middle>
                    <MiddleButton1>Google Search</MiddleButton1>
                    <MiddleButton2>I'm feeling Lucky</MiddleButton2>
                </Middle>
            </Header>

            <FooterMain>
                <Country>
                    Republic of Korea
                </Country>

                <SecondFooterBar>
                    <span>
                        <Nav href="#" target="_blank">About</Nav>
                        <Nav href="https://www.google.com/intl/ko_kr/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1" target="_blank">Advertising</Nav>
                        <Nav href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1" target="_blank">Business</Nav>
                        <Nav href="https://google.com/search/howsearchworks/?fg=1" target="_blank">How Search Works</Nav>
                    </span>

                    <span>
                        <Nav href="https://policies.google.com/privacy?hl=ko&fg=1" target="_blank">Privacy</Nav>
                        <Nav href="https://policies.google.com/terms?hl=ko&fg=1" target="_blank">Term</Nav>
                        <Nav href="#" target="_blank">Settings</Nav>
                    </span>
                </SecondFooterBar>
            </FooterMain>
        </Day34Container>
    )
}

export default Day34;