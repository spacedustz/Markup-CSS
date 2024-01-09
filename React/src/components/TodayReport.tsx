import React from "react";
import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Day1 from "./Report/Day1.tsx";
import Day2 from "./Report/Day2.tsx";
import CommentApp from "./Comment/CommentApp.tsx";

const TodayReportContainer = styled.div`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
`;

const TitleDiv = styled.div`
    text-align: center;
    font-style: inherit;
    font-size: 1.5em;
    margin-bottom: 20px;
`;

const DayDiv = styled.div`
    background-color: #abced4;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

const CommentDiv = styled.div`
    padding: 2px;
    margin-top: 60px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid black;
    padding-bottom: 50px;
`;

const AssignmentTitle = styled.h2`
    margin: 0 0 10px 0;
    font-size: 1.2em;
`;

const PFont = styled.p`
    font-size: 19px;
`;

const CommentTitle = styled.h2`
    margin: 0 0 10px 0;
    margin-top: 30px;
    font-size: 1.2em;
`;

const Home = () => (
    <TodayReportContainer>
        <div>
            <TitleDiv>
                <h2><strong>📚 과제 완료 목록📚 </strong></h2>
                <PFont><strong>이름</strong> : 신건우</PFont>
                <PFont><strong>이메일</strong> : spacedustw@gmail.com</PFont>
            </TitleDiv>

            <DayDiv>
                <AssignmentTitle>🚩 1일차 과제</AssignmentTitle>
                <Link to="/day-01-Assignment"><PFont>웹사이트 뼈대 만들기</PFont></Link>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 2일차 과제</AssignmentTitle>
                <Link to="/day-02-Assignment"><PFont>CSS를 연습하자</PFont></Link>
            </DayDiv>
        </div>

        <div>
            <CommentDiv>
                <CommentTitle>
                    <CommentApp/>
                </CommentTitle>
            </CommentDiv>
        </div>
    </TodayReportContainer>
);

const TodayReport: React.FC = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Day-01-Assignment" element={<Day1/>}/>
                <Route path="/Day-02-Assignment" element={<Day2/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default TodayReport;