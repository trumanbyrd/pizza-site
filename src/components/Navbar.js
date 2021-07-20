import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from './Link';
import { colors } from '../util/constants';
import Logo from '../media/logo.png';
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: ${colors.navbar};
    height: 100%;
`;

const Image = styled.img`
    max-height: 64px;
    max-width: 64px;
`;

export const Navbar = () => {
    return (
    <Box height="5em">
        <Nav>
            <Box ml="4em" display="flex" maxHeight="100%">
                <Image src={Logo} alt="Logo" />
            </Box>
            <Box ml="1.5em">
                <Link href="/">HOME</Link>
            </Box>
            <Box ml="1.5em">
                <Link href="/order">NEW ORDER</Link>
            </Box>
            <Box ml="1.5em">
                <Link href="/past-orders">PAST ORDERS</Link>
            </Box>
        </Nav>
    </Box>
    );
};

export default Navbar;