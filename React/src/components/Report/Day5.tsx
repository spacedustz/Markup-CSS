import React from "react";
import styled from "styled-components";

const Box = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.color || 'lightblue'};
`;

const Locate = styled.div`
    position: absolute;
    top: 30px;
    left: 30px;
`;

const FlexboxContainer = styled.div`
    border: 1px solid red;
    display: flex;
    //justify-content: inherit;
    align-items: end;
    height: 100vh;
`;

const FlexboxChild = styled.div`
    background-color: ${props => props.color};
    width: 100px;
    height: 100px;
`;

const Day5: React.FC = () => {

    return (
        <FlexboxContainer>
            <FlexboxChild color="lightblue">
                Relative Box
            </FlexboxChild>

            <FlexboxChild color="gray">
                Absolute Box
            </FlexboxChild>

            <FlexboxChild color="lightgreen">
                Sticky Box
            </FlexboxChild>
        </FlexboxContainer>
    )
}

export default Day5;