import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import { Announcement } from '../components/Announcement'
import { Slider } from '../components/Slider'
import { Categories } from '../components/Categories'
import { ProductList } from '../components/ProductList'
import { NewsLetter } from '../components/NewsLetter'

const Container = styled.div`
scroll-behavior: smooth;`
const Home = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <ProductList />
            <NewsLetter />
        </Container>
    )
}

export default Home