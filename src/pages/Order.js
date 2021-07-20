import React from 'react';
import { Box } from '@material-ui/core';
import { postOrder } from '../util/requests';


const defaultOrder = {
    Crust: "pan",
    Flavor: "pepperoni",
    Size: "m",
    Table_No: 109
}


const Order = () => {
    return (
      <Box display="flex" justifyContent="space-around">
        <button onClick={() => {postOrder(defaultOrder)}}>Dummy order</button>
      </Box>
    );
  };

  export default Order;