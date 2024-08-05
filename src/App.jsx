import PageNotFound from "components/PageNotFound";
import Product from "components/Product";
import ProductList from "components/ProductList";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact component={ProductList} path="/products" />
    <Route exact component={Product} path="/products/:slug" />
    <Redirect exact from="/" to="/products" />
    <Route exact component={PageNotFound} path="*" />
  </Switch>
);

export default App;
