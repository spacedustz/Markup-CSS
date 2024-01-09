import React from 'react'
import styled from "styled-components";
import TodayReport from "./components/TodayReport.tsx";

const AppBlock = styled.div`
    width: 900px;
    margin: 0 auto;
    margin-top: 3rem;
    border: 1px solid black;
    padding: 1rem;
`;

const App: React.FC = () => {

    return (
        <AppBlock>
            <TodayReport/>
        </AppBlock>
    )
}

export default App;
