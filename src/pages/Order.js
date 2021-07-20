import React from 'react';
import { Box } from '@material-ui/core';
import { postOrder } from '../util/requests';


const defaultOrder = {
    Crust: "PlaceholderCrust",
    Flavor: "PlaceholderFlavor",
    Size: "PlaceholderSize",
    Table_No: 100 + Math.floor(Math.random() * 20)
}


const Order = () => {
    return (
      <Box display="flex" justifyContent="space-around">
        <button onClick={() => {postOrder(defaultOrder)}}>Dummy order</button>
      </Box>
    );
  };

  export default Order;