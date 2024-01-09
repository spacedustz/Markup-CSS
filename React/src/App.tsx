import React from 'react'
import styled from "styled-components";
import TodayReport from "./components/TodayReport.tsx";

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

const App: React.FC = () => {

    return (
        <div>
            <div>
                <AppBlock>
                    <TodayReport />
                </AppBlock>
            </div>
        </div>
    )
}

export default App;
