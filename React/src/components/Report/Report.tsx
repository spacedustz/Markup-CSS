import React from "react";
import {AssignmentFont, AssignmentTitle, DayDiv, PFont, StyledContainer, TitleDiv} from "../../styles/TodayRepost.ts";

const Report: React.FC = () => {
    return (
        <StyledContainer>
            <TitleDiv>
                <h3><strong>📚 과제 완료 목록📚 </strong></h3>
                <PFont><strong>이름</strong> : 신건우</PFont>
                <PFont><strong>이메일</strong> : spacedustw@gmail.com</PFont>
            </TitleDiv>

            <DayDiv>
                <AssignmentTitle>🚩 1번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-01-Assignment"><PFont>웹사이트 뼈대 만들기</PFont></AssignmentFont>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 2번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-02-Assignment"><PFont>CSS를 연습하자</PFont></AssignmentFont>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 3,4번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-03-04-Assignment"><PFont>Google 클론 코딩</PFont></AssignmentFont>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 5번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-05-Assignment"><PFont>CSS Position & Flexbox</PFont></AssignmentFont>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 6번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-06-Assignment"><PFont>Spotify 최신 페이지 (왼쪽부분 미완성)</PFont></AssignmentFont>
                <AssignmentFont to="/Day-06-02-Assignment"><PFont>Spotify 예전 페이지 (진행중)</PFont></AssignmentFont>
            </DayDiv>

            <DayDiv>
                <AssignmentTitle>🚩 7번째 과제</AssignmentTitle>
                <AssignmentFont to="/Day-08-Assignment"><PFont>BootStrap - 웹사이트 만들기</PFont></AssignmentFont>
            </DayDiv>
        </StyledContainer>
    )
}

export default Report;