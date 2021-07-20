import React from 'react';
import { Box } from '@material-ui/core';

const Home = () => {
    return (
      <Box display="flex" justifyContent="space-around">
        <div>Home</div>
        <a href="/order">Order</a>
        <a href="/confirm">Confirm</a>
      </Box>
    );
  };
  
  export default Home;