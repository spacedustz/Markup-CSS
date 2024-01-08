import React from "react";
import styled from "styled-components";
import {Report} from "../model/Report.ts";
import Day1 from "./Report/Day1.tsx";

const TodayReportContainer = styled.div`
`;

const reportArr: Report[] = [
    {
        day: 1,
        name: "신건우",
        desc: "과제완료"
    },
];

const TodayReport: React.FC = () => {
    return(
        <TodayReportContainer>
            <ul>
                {reportArr.map((report: Report) => (
                    <li key={report.day}>
                        <h2>{report.day} 일차 과제 : 웹사이트 뼈대 만들기!</h2>

                        <h3><strong>이름</strong> : {report.name}</h3>

                        <h3><strong>이메일</strong> : spacedustw@gmail.com</h3>

                        <Day1 />
                    </li>
                ))}
            </ul>
        </TodayReportContainer>
    )
}

export default TodayReport;