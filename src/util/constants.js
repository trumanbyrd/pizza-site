const proxy = '';
const auth =  'https://order-pizza-api.herokuapp.com/api/auth';
const orders = 'https://order-pizza-api.herokuapp.com/api/orders';

export const authUrl = `${proxy}${auth}`;

// in a real project, we would keep this away from any public facing code
export const authCredentials = {
    username: "test",
    password: "test"
};

export const ordersUrl = `${proxy}${orders}`;
