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
width: 25%;
padding: 20px;
background-color: white  ;

`;
const Title = styled.h1`
font-size:20px;
font-weight: 300;
`;
const Form = styled.form`
display: flex;
flex-direction: column ;
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

const Button = styled.button`
margin: 10px 0px;
width: 40%;
padding: 15px 20px;
border: none;
background-color: teal;
color:white;
cursor: pointer;
`;
const Link = styled.a`
font-size: 12px;
color: gray;
letter-spacing: 1px;
text-decoration: underline;
margin: 10px 0px;
cursor: pointer;

`

export const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>

                    <Input placeholder="username" />

                    <Input placeholder="password" />

                    <Button>LOGIN</Button>
                    <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                    <Link>CREATE AN ACCOUNT?</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}
