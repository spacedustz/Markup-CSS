import React from 'react'
import styled from "styled-components";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Day1 from "./components/Report/Day1.tsx";
import Day2 from "./components/Report/Day2.tsx";

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
                    <BrowserRouter>
                        <Routes>
                            <Route path="/Day-01-Assignment" element={<Day1 />}/>
                            <Route path="/Day-02-Assignment" element={<Day2 />}/>
                        </Routes>
                    </BrowserRouter>
                </AppBlock>
            </div>

            <div>
                <AppBlock>

                </AppBlock>
            </div>
        </div>
    )
}

export default App;
