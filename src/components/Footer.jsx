
import { Facebook, Instagram, MailOutlined, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;
const Desc = styled.p`
font-size: 12px;
letter-spacing: 1px;
color:grey;
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props => props.bg};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`;


const Center = styled.div`
flex:1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;
const List = styled.ul`
margin: 0px;
padding: 0px;
display: flex;  
flex-wrap: wrap;
`;
const ListItem = styled.li`
font-size: 12px;
color: grey;
letter-spacing:1px;
list-style: none;
width: 50%;
margin-bottom: 10px;

`;
const Right = styled.div`
flex:1;
padding: 20px;
`;
const ContactItem = styled.p`
display: flex;
align-items: center;
margin-bottom: 10px;
font-size: 12px;
color: gray;
letter-spacing: 1px;
`;
export const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>R.M.K.</Logo>
                <Desc>There are many variations of passages  of Lorem  Ipsum  available.
                    but the majority have suffer alternation  in some form , by  injected humour ,
                    or  randomised words which don't look even slightly believable </Desc>
                <SocialContainer>
                    <SocialIcon bg="#3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon bg="#E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon bg="#55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon bg="#E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>
                    Usefull Links
                </Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion </ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                    <ListItem>Managing</ListItem>

                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{ marginRight: "10px" }} />4/245,Thirumuruganagar,Thoppur,Dharmapuri(636352)</ContactItem>
                <ContactItem> <Phone style={{ marginRight: "10px" }} />+91 - 7708708978</ContactItem>
                <ContactItem><MailOutlined style={{ marginRight: "10px" }} />ritimahesh29@gmail.com</ContactItem>
            </Right>
        </Container>
    )
}
