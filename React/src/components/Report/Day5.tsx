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

/* --- Third Container --- */

const ThirdFlexboxContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    border: 1px solid black;
`;

const ThirdFlexboxChild1 = styled.div`
    background-color: ${props => props.color};
    width: 150px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ThirdFlexboxChild2 = styled.div`
    background-color: ${props => props.color};
    position: absolute;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* --- Fourth Container --- */

const FourthFlexboxContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    border: 1px solid black;
`;

const FourthFlexboxChild1 = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FourthFlexboxChild2 = styled.div`
    background-color: ${props => props.color};
    position: relative;
    bottom: 50px;
    left: 50px;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

/* --- Fifth Container --- */

const FifthFlexboxContainer = styled.div`
    display: flex;
    margin-bottom: 30px;
    border: 1px solid black;
`;

const FifthFlexboxChild1 = styled.div`
    background-color: ${props => props.color};
    width: 400px;
    height: 200px;
    display: flex;
    flex-direction: column;
`;

const FifthFlexboxChild2 = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const FifthFlexboxChild3 = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
`;

const Wrong = styled.strong`
    color: red;
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

            <DescriptionContainer>
                <Title>😯 3번 문제 풀이 방법</Title>
                <Paragraph><Wrong>답안지 본 문제</Wrong></Paragraph>
                <Paragraph>박스를 가운데 겹치게는 했는데 작은 상자를 밑으로 내리는 방법 찾다가 그냥 답 봄</Paragraph>
                <Paragraph>큰 박스의 하위요소로 작은 박스를 두면 되는 거였음ㅜ</Paragraph>
            </DescriptionContainer>

            <ThirdFlexboxContainer>
                <ThirdFlexboxChild1 color="lightblue">
                    🚩
                    <ThirdFlexboxChild2 color="gray">
                        🚩
                    </ThirdFlexboxChild2>
                </ThirdFlexboxChild1>

            </ThirdFlexboxContainer>

            <DescriptionContainer>
                <Title>😯 4번 문제 풀이 방법</Title>
                <Paragraph>flex-direction : column 적용해서 박스 2개 세로로로 배치</Paragraph>
                <Paragraph>2번쨰 박스(검은색)에만 position: relative 주고 left, bottom 픽셀 50씩 증가</Paragraph>
            </DescriptionContainer>

            <FourthFlexboxContainer>
                <FourthFlexboxChild1 color="lightblue">
                    🚩
                </FourthFlexboxChild1>

                <FourthFlexboxChild2 color="gray">
                    🚩
                </FourthFlexboxChild2>
            </FourthFlexboxContainer>

            <DescriptionContainer>
                <Title>😯 5번 문제 풀이 방법</Title>
                <Paragraph>최상위 컨테이너의 flex-direction, align-items 설정안하고 display: flex만 설정</Paragraph>
                <Paragraph>파란 박스가 작은 2개의 박스를 하위 요소로 가짐</Paragraph>
                <Paragraph>2개의 자식을 가진 파란 박스에서 flex-direction을 column으로 줘서 작은 박스를 세로로 정렬</Paragraph>
                <Paragraph>3번쨰 박스(초록색)만 align-self: flex-end 적용하면 초록색만 오른쪽으로 가짐</Paragraph>
            </DescriptionContainer>

            <FifthFlexboxContainer>
                <FifthFlexboxChild1 color="lightblue">

                    <FifthFlexboxChild2 color="gray">
                        🚩
                    </FifthFlexboxChild2>

                    <FifthFlexboxChild3 color="lightgreen">
                        🚩
                    </FifthFlexboxChild3>
                </FifthFlexboxChild1>
            </FifthFlexboxContainer>
        </Day5Container>
    )
}

export default Day5;