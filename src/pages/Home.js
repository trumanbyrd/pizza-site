import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from '../components/Link';
import { colors } from '../util/constants'
import styled from 'styled-components';
import Background_Image from '../media/background.jpg';

const Background = styled(Box)`
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    background-image: url(${Background_Image});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center; 
    background-size: cover;
`;

const WelcomeWrapper = styled(Box)`
    font-size: 128px;
    font-family: "Arial Black", Gadget, sans-serif;
    background-color: ${colors.background};
    border-radius: 25px;
    padding: 14px 25px;
`;

const StyledLink = styled(Link)`
    font-size: 48px;
`;

const Home = () => {
    return (
      <Background>
        <Box display="flex" justifyContent="space-between" width="100%">
            <Box width="50%" display="flex" justifyContent="center" alignItems="center">
                <WelcomeWrapper>
                    Welcome!
                </WelcomeWrapper>
            </Box>
            <Box display="flex" flexDirection="column" width="25%" justifyContent="center" mr="96px">
                <Box display="flex" my="48px">
                    <StyledLink href="/order" fontSize="64px">Place an order</StyledLink>
                </Box>
                <Box display="flex" my="48px">
                    <StyledLink href="/past-orders" fontSize="64px">View previous orders</StyledLink>
                </Box>
            </Box>
        </Box>
      </Background>
    );
  };
  
  export default Home;