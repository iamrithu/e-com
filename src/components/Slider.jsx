import { ArrowLeftOutlined, ArrowRightOutlined, Description } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { SliderItem } from "../data";


const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
overflow: hidden;
position: relative;

`
const Arrow = styled.div`
width: 50px;
height: 50px;
border-radius:50%;
background-color:#fff7f7;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left:${props => props.direction === "left" && "10px"};
right:${props => props.direction === "right" && "10px"};
cursor: pointer;
z-index: 2;
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: 1.5s ease;
transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slide = styled.div`
display:flex;
align-items:center;
 width: 100vw;
  height: 100vh;
  `
const ImgContainer = styled.div` 
flex:1;

height: 100%;

 `
const Image = styled.img`
height: 80%;
 width: 100%;
 object-fit: cover;
 `
const InfoContainer = styled.div`
flex:1;
padding: 50px;

`
const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
border:0.5px solid grey;
`;
export const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex + 2 : 2)
        }
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
    }
    return (

        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined onClick={() => handleClick('left')} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {SliderItem.map((info) => {

                    return (<Slide bg={info.bg} key={info.id}>
                        <ImgContainer>
                            <Image src={info.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{info.title}</Title>
                            <Desc>{info.desc}</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>)
                })

                }

            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined onClick={() => handleClick('right')} />
            </Arrow>
        </Container>
    )
}
