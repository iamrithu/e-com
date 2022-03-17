import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`font-size: 70px;margin-bottom: 20px;`;
const Desc = styled.p`
font-size:24px;
font-weight:300;
margin-bottom: 20px;
letter-spacing: 3px;
`;
const InputContainer = styled.div`
width: 40%;
height: 30px;
display: flex;
justify-content: space-between;
border :1px solid gray 
;
`;

const Input = styled.input`
border:none;
outline:none;
color: gray;
letter-spacing: 1px;
flex:6;
`;
const Button = styled.button`
border:none;
background-color: teal;
color: white;
cursor: pointer;
flex:1;`;
export const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Desc>Get timely updates from your favoite products</Desc>
            <InputContainer>
                <Input />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}
