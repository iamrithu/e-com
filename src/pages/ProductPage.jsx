import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Announcement } from "../components/Announcement";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { NewsLetter } from "../components/NewsLetter";


const Container = styled.div``;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImageContainer = styled.div`
flex:1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit:cover;
`;

const InfoContainer = styled.div`
flex:1;
padding: 50px;
`;

const Title = styled.h1`
font-weight: 300;
margin: 20px 0px;
`;


const Desc = styled.p`
font-size: 18px;
color: gray;
letter-spacing: 2;
margin-bottom: 20px;

`;

const Price = styled.span`
font-size: 40px;
font-weight: 300;
color: black;
`;

const FillterContainer = styled.div`
width: 50%;
margin: 30px 0px   ;
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
display: flex;
align-items: center;
`;
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props => props.color};
margin: 0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
outline: none;
border: none;
margin-left: 20px;
padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700; 
`;
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
color: gray;
border: 2px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;
const Button = styled.button`
padding: 15px;
border: 2px solid teal;
color:gray;
letter-spacing: 1px;
font-weight: 400;
cursor: pointer;
background-color: white;
&:hover{
    background-color: #f8f8f4 ;
}
`;


export const ProductPage = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Long Jacket</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos quae provident rem ipsum architecto nihil nulla ab! Quas, facere?</Desc>
                    <Price>$20</Price>
                    < FillterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>

                    </FillterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container>
    )
}
