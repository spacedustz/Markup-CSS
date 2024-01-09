import React from "react";
import styled from "styled-components";
import {Day1Props} from "../../model/Report.ts";

const Day1Style = styled.div`
    text-align: center;
    width: auto;
    
    table {
        border-collapse: collapse;
        width: 100%;
        margin-top: 20px;

        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
    }
`;

const MainDiv = styled.div`
    margin-top: 20px;
    text-align: center;
    width: 80%;
    margin: auto;
`;

const TitleBorder = styled.h3`
    border: 2px solid cadetblue;
`;

const dayInfo: Day1Props = {
    title: "자기소개서",
    subTitle: ["좋아하는 음식", "좋아하는 사이트", "좋아하는 노래", "인적사항", "연락 & 문의"],
    favoriteFood: ["한식", "건강한 음식"],
    questions: ["사는곳", "나이"],
    info: ["서울", "29"]
}

const PreStyle = styled.pre`
    font-style: inherit;
`;

const Day1: React.FC = () => {
    return (
        <Day1Style>
            <div className="header">
                <h2>{dayInfo.title}</h2>
            </div>

            <p>안녕하세요, HTML & CSS 기초를 배우고 있는 <strong>신건우입니다.</strong></p>

            <MainDiv>
                <TitleBorder>{dayInfo.subTitle[0]}</TitleBorder>
                <ul>
                    {dayInfo.favoriteFood.map((food: string, index:number) => (
                            <li key={index}>{food}</li>
                        )
                    )}
                </ul>
            </MainDiv>

            <MainDiv>
                <TitleBorder>{dayInfo.subTitle[1]} : <strong>Github</strong></TitleBorder>
                <img
                    src="data:image/png;base64,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"
                    alt="로딩중"/>
            </MainDiv>

            <MainDiv>
                <TitleBorder>{dayInfo.subTitle[2]}</TitleBorder>
                <audio controls></audio>

                <video src="https://youtu.be/XPuaODkkhnk" width="200" height="100" controls autoPlay></video>
            </MainDiv>

            <MainDiv>
                <TitleBorder>{dayInfo.subTitle[3]}</TitleBorder>
                <table>
                    <caption><strong>내 정보</strong></caption>
                    <thead>
                    <tr>
                        <th>질문</th>
                        <th>답변</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{dayInfo.questions[0]}</td>
                        <td>{dayInfo.info[0]}</td>
                    </tr>
                    <tr>
                        <td>{dayInfo.questions[1]}</td>
                        <td>{dayInfo.info[1]}</td>
                    </tr>
                    </tbody>
                </table>
            </MainDiv>

            <MainDiv>
                <TitleBorder>{dayInfo.subTitle[4]}</TitleBorder>

                <PreStyle><strong>Email</strong> : spacedustw@gmail.com</PreStyle>
                <PreStyle><strong>Github</strong> : <a href="https://github.com/spacedustz">방문하기</a></PreStyle>
                <PreStyle><strong>Tistory Blog</strong> : <a href="https://iizz.tistory.com">방문하기</a></PreStyle>

                <p>하고싶은 말을 적어주세요!</p>
                <input type="text"/>
                <button>전송</button>
            </MainDiv>
        </Day1Style>
    )
}

export default Day1;

