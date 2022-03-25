import styled from "styled-components"
import { CategoryItem } from "./CategoryItem"
import { categories } from "../data"

const Container = styled.div`
display: flex;
flex-wrap: wrap;
padding: 20px;
justify-content: space-evenly;
`
export const Categories = () => {

    return (
        <Container>
            {
                categories.map((info) => {
                    return (
                        <CategoryItem index={info} key={info.id} />
                    )
                })
            }
        </Container>
    )
}
