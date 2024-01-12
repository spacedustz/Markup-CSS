import React from "react";
import styled from "styled-components";

/* --- Main Container --- */

const Day5Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
`;

/* --- Title & Paragrph --- */

const DescriptionContainer = styled.div`
    border-top: 2px solid lightseagreen;
    border-left: 2px solid lightseagreen;
    border-right: 2px solid lightseagreen;
`;

const Title = styled.h2`
    font-size: 20px;
    text-align: center;
`;

const Paragraph = styled.p`
    text-align: center;
`;

/* --- First Container --- */

const FirstFlexboxContainer = styled.div`
    display: flex;
    justify-content: end;
    align-items: flex-start;
    border: 1px solid black;
    margin-bottom: 30px;
`;

const FirstFlexboxChild = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FirstFlexboxSelfChild = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    margin-right: auto;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* --- Second Container --- */
const SecondFlexboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30px;
    border: 1px solid black;
`;

const SecondFlexboxChild1 = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SecondFlexboxChild2 = styled.div`
    background-color: ${props => props.color};
    align-self: center;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SecondFlexboxChild3 = styled.div`
    background-color: ${props => props.color};
    align-self: flex-end;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Day5: React.FC = () => {

    return (
        <Day5Container>
            <DescriptionContainer>
            <Title>😯 1번 문제 풀이 방법</Title>
            <Paragraph>Children 1 부분의 Style만 따로 빼서 margin-right: auto; 를 주었습니다.</Paragraph>
            <Paragraph><strong>이유 : </strong>FlexBox의 특성 중 하나는 margin 값을 auto로 주었을떄 주축(main axis) 방향으로 margin을 최대한 확장합니다.</Paragraph>
            <Paragraph>주축(main axis)는 flex-direction에 따라 다르게 설정됩니다.</Paragraph>
            <Paragraph>이 문제에선 flex-direction을 명시적으로 지정을 안했고, 그럼 flex-direction의 Default 값은 row가 됩니다.</Paragraph>
            </DescriptionContainer>

            <FirstFlexboxContainer>
                <FirstFlexboxSelfChild color="lightblue">
                    🚩
                </FirstFlexboxSelfChild>

                <FirstFlexboxChild color="gray">
                    🚩
                </FirstFlexboxChild>

                <FirstFlexboxChild color="lightgreen">
                    🚩
                </FirstFlexboxChild>
            </FirstFlexboxContainer>

            <DescriptionContainer>
                <Title>😯 2번 문제 풀이 방법</Title>
                <Paragraph>flex-direction을 column으로 줘서 일단 세로로 정렬하고, 밑에 2개의 align 위치만 중간, 맨끝으로 변경</Paragraph>
            </DescriptionContainer>

            <SecondFlexboxContainer>
                <SecondFlexboxChild1 color="lightblue">
                    🚩
                </SecondFlexboxChild1>

                <SecondFlexboxChild2 color="gray">
                    🚩
                </SecondFlexboxChild2>

                <SecondFlexboxChild3 color="lightgreen">
                    🚩
                </SecondFlexboxChild3>
            </SecondFlexboxContainer>
        </Day5Container>
    )
}

export default Day5;