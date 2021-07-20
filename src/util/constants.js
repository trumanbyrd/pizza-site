import Cheese from '../media/cheese.jpg';
import Pepperoni from '../media/pepperoni.jpg';
import Margherita from '../media/margherita.jpg';
import MeatLovers from '../media/meatlovers.jpg';
import Supreme from '../media/supreme.jpg';

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

export const colors = {
    navbar: '#5c5c5c',
    background: '#866c6c',
    link: {
        default: '#7b7b7b',
        hover: '#4b4b4b',
        textDefault: '#c9c9c9;',
        textHover: '#dadada'
    }
};

export const Flavors = [
    'Cheese',
    'Pepperoni',
    'Margherita',
    'Supreme',
    'Meat Lovers'
];

export const Sizes = [
    'Small',
    'Medium',
    'Large',
    'Extra Large'
];

export const Crusts = [
    'Thin',
    'Hand-tossed',
    'Pan',
    'Stuffed'
];

export const FlavorImages = {
    Cheese: Cheese,
    Pepperoni: Pepperoni,
    Margherita: Margherita,
    Supreme: Supreme,
    'Meat Lovers': MeatLovers
};
