import styled from "styled-components"


const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;

`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;
const Title = styled.h1`
color:white;
text-shadow: 2px -2px 2px black;
`;
const Button = styled.button`
padding: 20px;
border:none;
color: grey;
font-weight: bolder;
cursor: pointer;
box-shadow: 0.5px 0.5px 10px black;
`;


export const CategoryItem = ({ index }) => {
    return (
        <Container>
            <Image src={index.img} />
            <Info>
                <Title>{index.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>

        </Container>
    )
}
