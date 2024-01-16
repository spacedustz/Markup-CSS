import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Day1 from "./Report/Day1.tsx";
import Day2 from "./Report/Day2.tsx";
import CommentApp from "./Comment/CommentApp.tsx";
import Day34 from "./Report/Day34.tsx";
import Day5 from "./Report/Day5.tsx";
import Day6 from "./Report/Day6.tsx";
import Day6Old from "./Report/Day6Old.tsx";
import {CommentDiv, CommentTitle, MainContainer, ResponsiveContainer, StyledContainer} from "../styles/TodayRepost.ts";
import MainNav from "../styles/BootStrap/MainNavBar.tsx";

const Home = () => (
    <MainContainer className="container">
        <MainNav/>

        <ResponsiveContainer>
            <div>
                <StyledContainer>
                    <CommentDiv>
                        <CommentTitle>
                            <CommentApp/>
                        </CommentTitle>
                    </CommentDiv>
                </StyledContainer>
            </div>
        </ResponsiveContainer>
    </MainContainer>
);

const TodayReport: React.FC = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Day-01-Assignment" element={<Day1/>}/>
                <Route path="/Day-02-Assignment" element={<Day2/>}/>
                <Route path="/Day-03-04-Assignment" element={<Day34/>}/>
                <Route path="/Day-05-Assignment" element={<Day5/>}/>
                <Route path="/Day-06-Assignment" element={<Day6/>}/>
                <Route path="/Day-06-02-Assignment" element={<Day6Old/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default TodayReport;