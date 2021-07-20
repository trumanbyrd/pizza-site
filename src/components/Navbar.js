import React from 'react';
import { Box, Link } from '@material-ui/core';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f44336;
    height: 100%;
`;

const StyledLink = styled(Link)`
    text-color: white;
    font-family: "Arial Black", Gadget, sans-serif;
    &:link, &:visited {
        background-color: rgb(220, 41, 30);
        color: #404040;
        padding: 14px 25px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        border-radius: 3px;
      }
      
      &:hover, &:active {
        background-color: #a62d24;
        border-radius: 10px;
        color: #c9c9c9;
      }
`;

export const Navbar = () => {
    return (
    <Box height="5em">
        <Nav>
            <Box ml="8em">
                <StyledLink href="/">HOME</StyledLink>
            </Box>
            <Box ml="4em">
                <StyledLink href="/order">NEW ORDER</StyledLink>
            </Box>
            <Box ml="4em">
                <StyledLink href="/past-orders">PAST ORDERS</StyledLink>
            </Box>
        </Nav>
    </Box>
    );
};

export default Navbar;