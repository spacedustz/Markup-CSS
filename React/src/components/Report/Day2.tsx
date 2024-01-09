import React from 'react';
import styled from 'styled-components';

// Define styled components
const Day2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  border: 50px solid red;
  padding: 50px;
  width: 200px;
  margin-bottom: 20px;
`;

const GreenBox = styled(Box)`
  border-color: green;
`;

const BlueBox = styled(Box)`
  border-color: blue;
`;

// Create the React component
const Day2: React.FC = () => {
    return (
        <Day2Container>
            <Box>Box 1</Box>
            <GreenBox>Box 2</GreenBox>
            <BlueBox>Box 3</BlueBox>
        </Day2Container>
    );
};

export default Day2;