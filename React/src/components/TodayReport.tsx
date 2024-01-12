import React from "react";
import styled from "styled-components";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Day1 from "./Report/Day1.tsx";
import Day2 from "./Report/Day2.tsx";
import CommentApp from "./Comment/CommentApp.tsx";
import Day34 from "./Report/Day34.tsx";
import Day5 from "./Report/Day5.tsx";
import {Nav} from "../styles/Nav.ts";

const TodayReportContainer = styled.div`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
    width: 100%;
`;

const MemoContainer = styled.div`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
    width: 100%;
`;

const CommentContainer = styled.div`
    text-align: center;
    font-family: Arial, sans-serif;
    color: #333;
    background-color: #f9f9f9;
    padding: 20px;
    width: 100%;
    height: 100%;
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

const MemoDiv = styled.div`
    background-color: darkseagreen;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

const CommentDiv = styled.div`
    padding: 2px;
    margin-top: 60px;
    margin-bottom: 20px;
    border-radius: 5px;
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

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

const Home = () => (
        <FlexContainer>
            <div>
                <TodayReportContainer>
                    <TitleDiv>
                        <h2><strong>📚 과제 완료 목록📚 </strong></h2>
                        <PFont><strong>이름</strong> : 신건우</PFont>
                        <PFont><strong>이메일</strong> : spacedustw@gmail.com</PFont>
                    </TitleDiv>

                    <DayDiv>
                        <AssignmentTitle>🚩 1일차 과제</AssignmentTitle>
                        <Link to="/Day-01-Assignment"><PFont>웹사이트 뼈대 만들기</PFont></Link>
                    </DayDiv>

                    <DayDiv>
                        <AssignmentTitle>🚩 2일차 과제</AssignmentTitle>
                        <Link to="/Day-02-Assignment"><PFont>CSS를 연습하자</PFont></Link>
                    </DayDiv>

                    <DayDiv>
                        <AssignmentTitle>🚩 3,4일차 과제</AssignmentTitle>
                        <Link to="/Day-03-04-Assignment"><PFont>Google 클론 코딩</PFont></Link>
                    </DayDiv>

                    <DayDiv>
                        <AssignmentTitle>🚩 5일차 과제</AssignmentTitle>
                        <Link to="/Day-05-Assignment"><PFont>CSS Position & Flexbox</PFont></Link>
                    </DayDiv>
                </TodayReportContainer>
            </div>

            <div>
                <MemoContainer>
                    <TitleDiv>
                        <h2><strong>📚 메모장 📚</strong></h2>
                        <PFont><strong>이름</strong> : 신건우</PFont>
                        <PFont><strong>이메일</strong> : spacedustw@gmail.com</PFont>
                    </TitleDiv>

                    <MemoDiv>
                        <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/1.md"
                                              target="_blank">📄 1. HTML & CSS 기초</Nav></AssignmentTitle>
                    </MemoDiv>

                    <MemoDiv>
                        <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/2.md"
                                              target="_blank">📄 2. Wire Frame 구조 잡기</Nav></AssignmentTitle>
                    </MemoDiv>

                    <MemoDiv>
                        <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/3.md"
                                              target="_blank">📄 3. Flex Box란?</Nav></AssignmentTitle>
                    </MemoDiv>
                </MemoContainer>
            </div>


            <div>
                <CommentContainer>
                    <CommentDiv>
                        <CommentTitle>
                            <CommentApp/>
                        </CommentTitle>
                    </CommentDiv>
                </CommentContainer>
            </div>
        </FlexContainer>
);

const TodayReport: React.FC = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Day-01-Assignment" element={<Day1/>}/>
                <Route path="/Day-02-Assignment" element={<Day2/>}/>
                <Route path="/Day-03-04-Assignment" element={<Day34/>}/>
                <Route path="/Day-05-Assignment" element={<Day5/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default TodayReport;