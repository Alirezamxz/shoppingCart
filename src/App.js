import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
