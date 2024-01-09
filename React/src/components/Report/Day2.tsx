import React from 'react';
import styled, {css} from 'styled-components';

// 2-1
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Box = styled.div`
    border: 50px solid lightgoldenrodyellow;
    padding: 50px;
    width: 200px;
    margin-bottom: 20px;
`;

const GreenBox = styled(Box)`
    border-color: lightblue;
`;

const BlueBox = styled(Box)`
    border-color: lightgreen;
`;

// 2-2
const Container2 = styled.div`
    background-color: #fff;
    background-image: linear-gradient(90deg, transparent 79px, #abced4 79px, #abced4 81px, transparent 81px),
    linear-gradient(#eee .1em, transparent .1em);
    background-size: 100% 1.2em;
    padding-left: 10%;
`;

const Paragraph = styled.p`
    font-style: italic;
    font-size: 16px;
    font-family: Verdana;

    &::first-letter {
        font-size: 200%;
        color: #2980b9;
    }
`;

const SubHeader = styled.p`
    color: #2980b9;
`;

const Title = styled.h1<{ firstChild?: boolean }>`
    color: #9b59b6;

    &::before {
        content: "Topic: ";
    }

    ${props => props.firstChild && css`
        text-align: center;
    `}
`;

const HtmlStudy = [
    "div : 영역을 나누는데 쓰임",
    "p : 문단을 나누는데 쓰임 (div태그와 거의 비슷한 용도이나 단지 밑에 공간이 좀더 생김)",
    "img : 이미지 넣는데 쓰임. 단일태그임",
    "input : 검색창처럼 사용자에게 입력을 받는 태그 단일태그임",
    "button : 버튼을 만듬",
    "a : 링크를 연결해서 여러페이지로 이동할수있음"]

const CssStudy = [
    "color : 텍스트의 색을 바꿈",
    "background-color : 배경색을 바꿈",
    "border : 테두리를 그려줌, 3개의 인자를 받음 (두께, 스타일, 색깔)",
    "width / height : 넓이와 높이를 지정하는데 쓰임",
    "text-align : 정렬 (left, center, right)",
    "margin : 내 영역 밖에 공간을 줌 (top, left, right, bottom)",
    "padding : 내 영역 안에서 공간을 줌 (top, left, right, bottom)"]

// Create the React component
const Day2: React.FC = () => {
    return (
        <div>
            <div>
                <Container1>
                    <Box>1번 박스</Box>
                    <GreenBox>2번 박스</GreenBox>
                    <BlueBox>3번 박스</BlueBox>
                </Container1>
            </div>

            <div>
                <Container2>
                    <Title firstChild={true}>많이쓰는 HTML태그 정리! 📚</Title>
                    <SubHeader>HTML은 웹 사이트의 뼈대를 그리는 마크업 언어 입니다.</SubHeader>
                    <Paragraph>
                        <ul>
                            {HtmlStudy.map((item:string, index:number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Paragraph>
                    <Title firstChild={true}>기본적인 CSS 정리! 📚</Title>
                    <SubHeader>CSS는 뼈대를 갗춘 HTML에 디자인을 넣어줍니다.</SubHeader>
                    <Paragraph>
                        <ul>
                            {CssStudy.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </Paragraph>
                </Container2>
            </div>
        </div>
    );
};

export default Day2;