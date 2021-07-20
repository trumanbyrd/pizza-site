import React, {useState, useEffect, useCallback} from 'react';
import { Box } from '@material-ui/core';
import { getOrders, deleteOrder } from '../util/requests';

const Order = ({ item, onDelete }) => {
    return (
        <>
            <li>
                {item.Crust} {item.Flavor} {item.Order_ID} {item.Size}
            </li>
            <button onClick={onDelete}>
                Delete order
            </button>
        </>
    );
};
  
const PastOrders = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const updateResults = useCallback(() => {
        console.log('UPDATING....');
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
        <Box>
            {loading ? <div>Loading orders...</div>
            : (
            <ul>
                {data?.map(item => {
                    return <Order 
                                item={item} 
                                onDelete={async () => {
                                    await deleteOrder(item.Order_ID)
                                            .then(() => {
                                                updateResults();
                                            }
                                    );
                                }}
                                key={item.Order_ID}
                            />;
                })}
            </ul>
            )}
            
        </Box>
      </>
    );
  };
  
  export default PastOrders;