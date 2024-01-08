import React from 'react'
import TodayReport from "./components/TodayReport.tsx";
import styled from "styled-components";

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const App: React.FC = () => {

    return (
        <AppBlock>
            <TodayReport />
        </AppBlock>



    )
}

export default App;
