import React from 'react'
import styled from "styled-components";
import TodayReport from "./components/TodayReport.tsx";

const AppBlock = styled.div`
    width: 900px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const RootStyle = styled.div`
    background-image: url("./asset/space_small.png");
`;

const App: React.FC = () => {

    return (
        <RootStyle>
            <div>
                <AppBlock>
                    <TodayReport />
                </AppBlock>
            </div>
        </RootStyle>
    )
}

export default App;
