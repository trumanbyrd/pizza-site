import React from 'react';
import { Box } from '@material-ui/core';

const Confirm = () => {
    return (
      <Box display="flex" justifyContent="space-around">
        <a href="/">Home</a>
        <a href="/order">Order</a>
        <div>Confirm</div>
      </Box>
    );
  };
  
  export default Confirm;