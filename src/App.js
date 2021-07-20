import React from 'react';
import './App.css';
import { BrowserRouter as Router,
         Switch,
         Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Order from './pages/Order';
import Home from './pages/Home';
import PastOrders from './pages/PastOrders';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order}/>
        <Route path="/past-orders" component={PastOrders} />
      </Switch>
    </Router>
  );
}

export default App;
