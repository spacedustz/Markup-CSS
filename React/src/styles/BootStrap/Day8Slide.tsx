import React from "react";

import Carousel from 'react-bootstrap/Carousel';

const Day8Slide :React.FC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="https://www.louisvuitton.com/images/%EB%A3%A8%EC%9D%B4-%EB%B9%84%ED%86%B5--20201208_KR_PUSH1_DI1.jpg?wid=1240" text="First slide" />
                <Carousel.Caption>
                    <h3>첫번쨰 사진</h3>
                    <p>CSS 너무 어려운것</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://www.louisvuitton.com/images/%EB%A3%A8%EC%9D%B4-%EB%B9%84%ED%86%B5--20201208__14_KR_PUSH1_DI1.jpg?wid=1240" text="Second slide" />
                <Carousel.Caption>
                    <h3>두번쨰 사진</h3>
                    <p>CSS 너무 어려운것</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Day8Slide;