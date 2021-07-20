import React, {useState, useEffect, useCallback} from 'react';
import { Box, Grid } from '@material-ui/core';
import { getOrders, deleteOrder } from '../util/requests';
import OrderCard from '../components/OrderCard';
  
const PastOrders = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateResults = useCallback(() => {
        const fetchPosts = async () => {
            await getOrders()
                  .then(results => {
                      setData(results);
                      setLoading(false);
                  });
          };
        fetchPosts();
    }, []);

    useEffect(() => {
        updateResults();
    }, [updateResults]);
    
    return (
      <>
        <Box padding="30px">
            {loading ? <div>Loading orders...</div>
            : (
            <Grid container spacing={3}>
                {data?.map(item => {
                    if (item.Table_No < 100) {
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