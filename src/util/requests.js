import axios from 'axios';
import { authUrl, authCredentials, ordersUrl } from './constants';

export const getOrders = async () => {
    return await axios.get(ordersUrl)
                        .then(results => results["data"])
                        .catch(() => null);
};

export const deleteOrder = async id => {
    return await axios.delete(`${ordersUrl}/${id}`)
                        .then(results => results["data"])
                        .catch(() => null);
};

export const getAuth = async () => {
    return await axios.post(authUrl, authCredentials)
                        .then(results => results["data"])
                        .catch(() => null);
};

export const postOrder = async order => {
    const authToken = await getAuth();
    return await axios.post(ordersUrl, order, { headers: { 'Authorization': `Bearer ${authToken.access_token}`} })
                        .then(results => results["data"])
                        .catch(() => null);
};
