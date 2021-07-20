import React, { useState } from 'react';
import { FlavorImages } from '../util/constants';
import {
        Button, 
        Card,
        CardMedia,
        CardActions,
        CardContent,
        Collapse,
        Grid,
        IconButton,
        Typography, 
        Box
    } from '@material-ui/core';
import styled from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const GridWrapper = styled(Grid)`
    .MuiCardActions-spacing {
        padding-top: 0px;
    }
`;

export const OrderCard = ({ item, onDelete }) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <GridWrapper item xs={3}>
            <Card>
                <CardMedia
                    component="img"
                    alt="Pizza image"
                    height="256px"
                    image={FlavorImages[item.Flavor]}
                />
                <CardContent>
                    <Typography variant="h5">
                        Order #{item.Order_ID}
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton
                        onClick={() => {
                            setExpanded(!expanded);
                        }}
                    >
                        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                    <Button onClick={onDelete}>
                        Delete
                    </Button>
                </CardActions>
                <Collapse in={expanded} unmountOnExit>
                    <CardContent>
                            <Box display="flex" justifyContent="space-between">
                                <Box>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>Size: </b>{item.Size} <br />
                                        <b>Flavor: </b>{item.Flavor} <br />
                                        <b>Crust: </b>{item.Crust} <br />
                                        <b>Table: </b>{item.Table_No - 100}
                                    </Typography>
                                </Box>
                                <Box maxWidth="200px">
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        <b>Order time: </b>{String(new Date(item.Timestamp))}
                                    </Typography>
                                </Box>
                            </Box>
                    </CardContent>
                </Collapse>
            </Card>
        </GridWrapper>
    )
};

export default OrderCard;