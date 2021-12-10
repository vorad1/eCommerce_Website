import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from './components/Home'
import { Login } from './components/Login'
import { Signup } from './components/SignUp'
import { NotFound } from './components/NotFound'
import { AddProducts } from './components/AddProducts'
import { Cart } from './components/Cart'

export const App = () => {
  return (
    <div>
      {/* for routing */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path='/add-products' component={AddProducts} />
          <Route path="/cart" component={Cart} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App