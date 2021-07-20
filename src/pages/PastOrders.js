import React, {useState, useEffect, useCallback} from 'react';
import { Box, Grid } from '@material-ui/core';
import { getOrders, deleteOrder } from '../util/requests';
import OrderCard from '../components/OrderCard';
import { tableNoOffset } from '../util/constants';
import { Link } from '../components/Link';
  
const PastOrders = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateResults = useCallback(() => {
        const fetchPosts = async () => {
            await getOrders()
                  .then(results => {
                      const filtered = results.filter(item => item.Table_No > tableNoOffset);
                      setData(filtered);
                      setLoading(false);
                  });
          };
        fetchPosts();
    }, []);

    useEffect(() => {
        updateResults();
    }, [updateResults]);

    if (!loading && !data?.length) {
        return (
            <Box height="100%" display="flex" justifyContent="center" alignItems="center">
                <Link href="/order">
                    No orders yet! Click here to place an order!
                </Link>
            </Box>
        )
    }
    
    return (
      <>
        <Box padding="30px">
            {loading ? <div>Loading orders...</div>
            : (
            <Grid container spacing={3}>
                {data?.map(item => {
                    if (item.Table_No < tableNoOffset) {
                        return null;
                    }
                    return (
                        <OrderCard 
                            item={item} 
                            onDelete={async () => {
                                await deleteOrder(item.Order_ID)
                                        .then(() => {
                                            updateResults();
                                        }
                                );
                            }}
                            key={item.Order_ID}
                        />
                    );
                })}
            </Grid>
            )}
            
        </Box>
      </>
    );
  };
  
  export default PastOrders;