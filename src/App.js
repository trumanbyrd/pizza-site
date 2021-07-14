import './App.css';
import { Box } from '@material-ui/core';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';

const Home = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <div>Home</div>
      <a href="/order">Order</a>
      <a href="/confirm">Confirm</a>
    </Box>
  );
};

const Order = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <a href="/">Home</a>
      <div>Order</div>
      <a href="/confirm">Confirm</a>
    </Box>
  );
};

const Confirm = () => {
  return (
    <Box display="flex" justifyContent="space-around">
      <a href="/">Home</a>
      <a href="/order">Order</a>
      <div>Confirm</div>
    </Box>
  );
};

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/order" component={Order}/>
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  );
}

export default App;
