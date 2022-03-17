import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";

import styled from "styled-components";


const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
display:flex;
padding:10px 10px;
justify-content:space-between;
`

const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`

const Language = styled.span`
font-size:14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border:0.5px solid lightgrey;
display:flex;
margin-left: 25px;
align-items:center;
padding: 5px;

`
const Input = styled.input`
border:none;
outline: none;
`

const Center = styled.div`
flex:1;
text-align: center;
`
const Logo = styled.h1`
font-weight: bold;
`
const Right = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
flex:1;

`
const MenuItem = styled.div` 
 font-size: 14px;
 cursor: pointer;
 margin-left: 25px;
`

export const Navbar = () => {
    return <Container className="div" >
        <Wrapper>
            <Left>
                <Language > EN </Language>
                <SearchContainer >
                    <Input />
                    <Search style={
                        { color: "grey", fontSize: 16 }
                    }
                    />
                </SearchContainer >
            </Left>
            <Center > < Logo > R.M.K. </Logo></Center >
            <Right >
                <MenuItem > Register </MenuItem>
                <MenuItem > Sign In </MenuItem>
                <MenuItem >
                    <Badge color="secondary"
                        badgeContent={4}
                        color="primary" >
                        <ShoppingCartOutlined />
                    </Badge> </MenuItem >
            </Right> </Wrapper > </Container>;
};