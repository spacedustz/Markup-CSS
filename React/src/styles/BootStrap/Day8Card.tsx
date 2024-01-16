import React from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface CardProps {
    src: string
}

const Day8Card :React.FC<CardProps> = ({ src }) => {
    return (
        <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>Card</Card.Title>
                <Card.Text>
                    이건 그냥 카드가 아님
                </Card.Text>
                <Button variant="primary">버튼버튼</Button>
            </Card.Body>
        </Card>
    );
}

export default Day8Card;