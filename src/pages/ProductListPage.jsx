import styled from "styled-components"
import { Announcement } from "../components/Announcement";
import { NewsLetter } from '../components/NewsLetter'
import { Navbar } from "../components/Navbar";
import { ProductList } from "../components/ProductList";
import { Footer } from "../components/Footer";

const Container = styled.div`

`;

const Title = styled.h1`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`;

const Filter = styled.div`
 margin: 20px;
`;

const FilterText = styled.span`
font-size:20px;
font-weight: 600;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option` 

`;
export const ProductListPage = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Producr:</FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option >Red</Option>
                        <Option>Green</Option>
                        <Option>Yellow</Option>
                        <Option>Pink</Option>
                        <Option>White</Option>
                        <Option>BLue</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                        <Option>XXL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Product:</FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price(asc)</Option>
                        <Option>Price(desc)</Option>

                    </Select>
                </Filter>
            </FilterContainer>
            <ProductList />
            <NewsLetter />
            <Footer />

        </Container>
    )
}
