import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Dialog, Box, TextField, Button, Typography } from '@material-ui/core';
import Select from '../components/Select';
import { postOrder } from '../util/requests';
import { Flavors, Crusts, Sizes } from '../util/constants';

const Order = () => {
    const [flavor, setFlavor] = useState(null);
    const [crust, setCrust] = useState(null);
    const [size, setSize] = useState(null);
    const [tableNo, setTableNo] = useState(null);
    const [confirmed, setConfirmed] = useState(false);

    const history = useHistory();

    const getOrder = useCallback(() => {
        return {
            Crust: crust,
            Flavor: flavor,
            Size: size,
            Table_No: tableNo
          };
    }, [crust, flavor, size, tableNo]);

    return (
    <Box display="flex" justifyContent="space-evenly" position="absolute" left="50%" top="50%">
        <Dialog 
            open={confirmed}
            onClose={() => {
                history.push('/past-orders');
            }}
        > 
            <Box
                height="300px"
                width="500px"
                display="flex"
                alignItems="center"
                justifyContent="space-evenly"
                flexDirection="column"
                padding="20px 40px"
            >
                <Typography variant="h4" align="center">
                    Order confirmed!
                </Typography>
                <Typography variant="h5" align="center">
                    Your order has been received. Click outside of this box to view pending orders!
                </Typography>

            </Box>
        </Dialog>
        <Box display="flex" flexDirection="column">
            <Select 
                label="Flavor"
                value={flavor}
                onChange={setFlavor}
                array={Flavors}
            />
            <Select 
                label="Crust"
                value={crust}
                onChange={setCrust}
                array={Crusts}
            />
            <Select 
                label="Size"
                value={size}
                onChange={setSize}
                array={Sizes}
            />
            <TextField 
                onChange={event => {
                    setTableNo(Number(event.target.value) ? Number(event.target.value) + 100 : null);
                }}
                label="Table #"
            />
        </Box>
        <Box display="flex" pr="4em">
            <Button
                disabled={!crust || !flavor || !size || !tableNo || tableNo < 1}
                onClick={() => {
                    postOrder(getOrder())
                    .then(setConfirmed(true));
                }}
            >
                Submit order
            </Button>
        </Box>
    </Box>
    );
  };

  export default Order;