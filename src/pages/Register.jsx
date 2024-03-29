import styled from "styled-components";


const Container = styled.div`
width: 100vw;
height: 100vh;

background: 
linear-gradient(rgba(255,255,255,0.3),rgba(255,255,255,0.3))   ,
url("https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1000") center;
background-size: cover;

display: flex;
align-items: center;
justify-content: center;

`;
const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white  ;

`;
const Title = styled.h1`
font-size:20px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;
const Input = styled.input`
flex:1;
min-width: 40%;
border: none;
border-bottom:1px solid gray ;
padding: 10px;
margin: 20px 10px 0px 0px ;
color: gray;
letter-spacing: 1px;

&:focus{
   
    outline: none;
}
`;
const Agreement = styled.span`
font-size: 12px;
color: gray;
margin: 20px 0px;
`;
const Button = styled.button`
width: 40%;
padding: 15px 20px;
border: none;
background-color: teal;
color:white;
cursor: pointer;
`;

export const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="name" />
                    <Input placeholder="lastname" />
                    <Input placeholder="username" />
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Input placeholder="confirm password" />
                    <Agreement>
                        By creating an account, I consent to the  processing of my  personal data in  accordence whit the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}
