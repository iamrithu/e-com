import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { popularProduct } from "../data";

const Container = styled.div``;


const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 400;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 30px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 400;
cursor: pointer;
border: ${(props) => props.type === "filed" && "none"};
color: ${props => props.type === "filed" && "white"};
background-color: ${props => props.type === "filed" && "gray"};

`


const TopTexts = styled.div`

`;
const TopText = styled.span` 
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Bottom = styled.div`
display: flex;

justify-content: space-between;
`;

const Info = styled.div`

flex:3;
`;

const Product = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 0px;
`;
const ProductDetail = styled.div`
display: flex;

    flex: 2;
`;
const Imgae = styled.img`
flex: 1;

width: 350px;

`;

const Deatials = styled.div`
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

const ProductName = styled.span`
font-size: 15px;
color: gray;
letter-spacing: 1px;
margin-bottom: 20px;
`;

const ProductId = styled.span`
margin-bottom: 20px;
`;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};margin-bottom: 20px;
`;

const ProductSize = styled.span`
margin-bottom: 20px;
`;

const PriceDetail = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;
`;
const ProductPrice = styled.div`
font-size:30px;
font-weight: 400;
`;
const Summary = styled.div`
flex:1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px; 
height: 60vh;

`;

const SummaryTitle = styled.h1`
font-weight: 300;
letter-spacing: 1px;
`;
const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-size: ${props => props.type === "total" && "24px"};
font-weight: ${props => props.type === "total" && "500"};
`;
const SummaryItemText = styled.div``;
const SummaryItemPrice = styled.div``;
const SummaryButton = styled.button`
width: 100%;
padding: 15px;
border: none;
border-radius: 2px;
background-color: gray;
color: white;
font-weight: 400;
cursor: pointer;
`;

const Hr = styled.hr`
border: none;
background-color: #eee;
height: 1px;
`

export const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Your Whislist(0)</TopText>
                    </TopTexts>
                    <TopButton type="filed">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Imgae src="https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <Deatials>
                                    <ProductName><b>Product:</b>Nike Shoes </ProductName>
                                    <ProductId><b>Id:</b> 352875031</ProductId>
                                    <ProductColor color="grey" />
                                    <ProductSize><b>Size:</b>38</ProductSize>
                                </Deatials>
                            </ProductDetail>
                            <PriceDetail>
                                < ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>
                                <Imgae src="https://images.pexels.com/photos/65676/nanjing-studio-jeans-65676.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <Deatials>
                                    <ProductName><b>Product:</b>Blue and white sleeveless top </ProductName>
                                    <ProductId><b>Id:</b> 3528248031</ProductId>
                                    <ProductColor color="grey" />
                                    <ProductSize><b>Size:</b>L</ProductSize>
                                </Deatials>
                            </ProductDetail>
                            <PriceDetail>
                                < ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>1</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>SubTotal</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>$ 60</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT NOW    </SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />
        </Container>
    )
}
