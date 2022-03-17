import styled from 'styled-components'
import { popularProduct } from '../data'
import { Product } from './Product'


const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`

export const ProductList = () => {
    return (
        <Container>
            {
                popularProduct.map((info) => {
                    return (
                        <Product index={info} key={info.id} />
                    )
                })
            }
        </Container>
    )
}
