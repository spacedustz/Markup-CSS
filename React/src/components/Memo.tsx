import React from "react";
import {Nav} from "../styles/Nav.ts";
import {AssignmentTitle, MemoDiv, PFont, StyledContainer, TitleDiv} from "../styles/TodayRepost.ts";

const Memo: React.FC = () => {
    return (
        <StyledContainer>
            <TitleDiv>
                <h3><strong>📚 메모장 📚</strong></h3>
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

            <MemoDiv>
                <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/4.md"
                                      target="_blank">📄 4. Flex Box & 단위 & 다양한 팁</Nav></AssignmentTitle>
            </MemoDiv>

            <MemoDiv>
                <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/5.md"
                                      target="_blank">📄 5. ARGB란? </Nav></AssignmentTitle>
            </MemoDiv>

            <MemoDiv>
                <AssignmentTitle><Nav href="https://github.com/spacedustz/Markup-CSS/blob/main/Description/6.md"
                                      target="_blank">📄 6. BootStrap 사용법 </Nav></AssignmentTitle>
            </MemoDiv>
        </StyledContainer>
    )
}

export default Memo;