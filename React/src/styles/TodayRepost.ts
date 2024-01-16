import styled from "styled-components";
import {Link} from "react-router-dom";

export const ResponsiveContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    flex-wrap: wrap;
`;

export const StyledContainer = styled.div`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: rgba(249, 249, 249, 0.5);
    padding: 20px;
    max-width: 600px; /* 필요에 따라 조절 */
    border: 1px solid black;
    margin: 20px;
    border-radius: 10px;
`;

export const TitleDiv = styled.div`
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 20px;
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    text-decoration: none;
`;

export const DayDiv = styled.div`
    background-color: rgba(171, 206, 212, 0.5);
    padding: 3px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

export const MemoDiv = styled.div`
    background-color: rgba(143, 188, 143, 0.5);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

export const CommentDiv = styled.div`
    padding: 2px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
`;

export const AssignmentTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: 15px;
`;

export const PFont = styled.p`
    font-size: 15px;
`;

export const CommentTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: 1.2em;
`;

export const MainContainer = styled.div`
    display: flex;
    //align-items: flex-start;
    flex-direction: column;
    background-image: url("../../public/assets/Background/Earth.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 1000px;
    width: 100%;
`;

export const AssignmentFont = styled(Link)`
    font-size: 15px;
    font-family: spotify-circular, Helvetica, Arial, sans-serif;
    text-decoration: none;
    color: black;
    font-weight: 700;
    
    &:hover {
        text-decoration: underline;
        transition: color 0.5s; // Hover 시 부드러운 연출
        color: cornflowerblue;
    }
`;