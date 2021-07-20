import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { Dialog, Box, TextField, Button, Typography } from '@material-ui/core';
import Select from '../components/Select';
import { postOrder } from '../util/requests';
import { colors, tableNoOffset } from '../util/constants'; 
import { Flavors, Crusts, Sizes, FlavorImages } from '../util/constants';
import styled from 'styled-components';

const HelpText = styled(Box)`
    font-family: "Arial Black", Gadget, sans-serif;
    width: 100%;
    font-size: 72px;
    padding-top: 30px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const OrderFieldsWrapper = styled(Box)`
    background-color: ${colors.backgroundDark};
    padding: 0px 20px;
    border-radius: 15px;
`;

const StyledButton = styled(Button)`
    background-color: ${colors.backgroundDark};
`;

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
    <>
    <HelpText>
        Select your options!
    </HelpText>
    <Box display="flex" justifyContent="space-evenly">
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
        <OrderFieldsWrapper display="flex" flexDirection="column" justifyContent="center">
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
                    setTableNo(Number(event.target.value) ? Number(event.target.value) + tableNoOffset : null);
                }}
                label="Table #"
            />
        </OrderFieldsWrapper>
        <Box display="flex" pr="4em" flexDirection="column" justifyContent="center">
            <Box display="flex" width="400px" height="300px" justifyContent="center" mb="20px">
                {flavor ? <img src={FlavorImages[flavor] } alt="Your order" /> : 
                <div>Waiting for selection...</div>}
            </Box>
            <StyledButton
                variant="contained"
                disabled={!crust || !flavor || !size || !tableNo || tableNo < 1}
                onClick={() => {
                    postOrder(getOrder())
                    .then(setConfirmed(true));
                }}
            >
                Submit order
            </StyledButton>
        </Box>
    </Box>
    </>
    );
  };

  export default Order;