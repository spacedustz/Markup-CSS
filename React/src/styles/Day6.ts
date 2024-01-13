import styled from "styled-components";
import {Nav} from "./Nav.ts";

export const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`;

export const LeftContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const RightContainer = styled.div`
    background-color: black;
    display: flex;
    flex-direction: column;
    width: 70%;
`;

/* Left Logo */
export const Logo = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin: 4px;
    height: 17%;
`;

export const LeftSpotifyLogo = styled.img`
    background-color: white;
    height: 30px;
    width: 30px;
    margin-right: 15px;
`;

export const LeftSpotifyLogoText = styled.div`
    font-size: 20px;
    font-weight: 3px;
`;

export const LeftImage = styled.img`
    height: 24px;
    width: 24px;
    margin-right: 20px;
    color: white;
`;

export const LeftLink = styled(Nav)`
    color: #a0a0a0;
`;

export const LeftImageContainer = styled.div`
    display: flex;
    color: white;
    margin: 20px;
`;

/* Left Library */

export const Library = styled.div`
    background-color: #2a2a2a;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    height: 80%;
    margin: 4px;
    color: white;
`;

export const LibrarySub = styled.div`
    display: flex;
    color: white;
    margin: 20px;
    position: relative;
`;

export const LeftLibraryButton = styled.button`
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

export const LeftLibraryText = styled.div`
    color: #a0a0a0;
`;

export const LeftSubButton = styled.button`
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

export const LeftGlobeButton = styled(LeftSubButton)`
    background-color: #303030;
    display: flex;
    color: white;
    
    p {
        padding-bottom: 10px;
    }
`;

export const LibrarySubContainer = styled.div`
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

export const BottomSection = styled.div`
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

export const BottomLink = styled.a`
    color: #b3b3b3;
    margin-bottom: 20px;
    text-decoration: none;
`;

export const LanguageButton = styled(LeftGlobeButton)`
    margin-top: auto;
`;

export const BottomLanguageIcon = styled.img`
    height: 24px;
    width: 24px;
    padding-top: 5px;
    color: white;
`;

export const BottomLanguageText = styled.p`
    position: relative;
    bottom: 8px;
    padding-left: 5px;
    padding-bottom: 5px;
`;