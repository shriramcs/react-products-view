import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./styles.css";
import Products from "./products";
import ProductInfo from "./productinfo";

export default function App() {
  const [currentProduct, setCurrentProduct] = React.useState(null);

  function showDetails(item) {
    console.log(item);
    setCurrentProduct(item);
  }
  return (
    <div className="App">
      <h1>React Products</h1>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/products" />
          <Route exact path="/products">
            <Products showDetails={showDetails} />
          </Route>
          <Route exact path="/products/:id">
            <ProductInfo currentProduct={currentProduct} />
          </Route>
        </Switch>
      </BrowserRouter>

      <footer className="AppFooter">
        <a href="https://github.com/shriramcs/react-products-view">
          <img
            alt="github"
            width="30"
            height="30"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          />
        </a>
        <span className="Credits">Proudly hosted on Netlify</span>
      </footer>
    </div>
  );
}
