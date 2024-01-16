import React from "react";
import Day8NavBar from "../../styles/BootStrap/Day8NavBar.tsx";
import Day8Slide from "../../styles/BootStrap/Day8Slide.tsx";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import Day8Card from "../../styles/BootStrap/Day8Card.tsx";

const Center = styled.div`
    text-align: center;
`;

const Center2 = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
`;

const Footer = styled.div`
    background-color: black;
        color: white;
        text-decoration: none;
    
    a {
        color: white;
        text-decoration: none;
    }
`;

const FooterTitle = styled.div`
    border-bottom: 1px solid #392d23;

    @media screen and (max-width: 48rem) {
        text-align: center;
    }
`;

const FooterLinks = styled.div`
    @media screen and (max-width: 48rem) {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;
        border-bottom: 1px solid #392d23;
    }
`;

const Final = styled.div`
    display: none;

    @media screen and (max-width: 48rem) {
        display: block;
        text-align: center;
    }
`;

const Day8: React.FC = () => {
    return(
        <div className="container">
            <Day8NavBar />
            <Day8Slide />
            <Center className="mt-5 mb-5">
                <h2>JOURNY HOME FOR THE HOLIDAYS</h2>
                <p>Starring Alicia Vikander</p>
                <Button variant="dark">이 버튼은 그냥 버튼이 아니야</Button>
            </Center>

            <Center2 className="row">
                <Day8Card className="col-md-4 com-sm-12" src="https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push5_V2_DI1.jpg?wid=656" />
                <Day8Card className="col-md-4 com-sm-12" src="https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push6_V2_DI1.jpg?wid=656" />
                <Day8Card className="col-md-4 com-sm-12" src="https://www.louisvuitton.com/images/louis-vuitton--U_Holidays_2020_Push7_V2_DI1.jpg?wid=656" />
            </Center2>

            <Footer>
                <div className="container">
                    <FooterTitle className="pb-5 pt-5">
                        LOUIS VUITTON
                    </FooterTitle>

                    <FooterLinks className="row pb-5 pt-5">
                        <div className="col"> United States</div>
                        <div className="col"><a href="#">Email Sign-Up</a></div>
                        <div className="col"><a href="#">Contact Us</a></div>
                        <div className="col"><a href="#">Apps</a></div>
                        <div className="col"><a href="#">Follow Us</a></div>
                        <div className="col"><a href="#">California Transparency</a></div>
                        <div className="col"><a href="#">Legal Notice</a></div>
                        <div className="col"><a href="#">Careers</a></div>
                        <div className="col"><a href="#">SiteMap</a></div>
                    </FooterLinks>

                    <Final className="pt-5 pb-5">
                        Ship to :United States
                    </Final>
                </div>
            </Footer>
        </div>
    );
};

export default Day8;