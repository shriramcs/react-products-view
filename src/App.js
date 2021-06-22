import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import "./styles.css";
import Products from "./products";
import ProductInfo from "./productinfo";
import Cart from "./cart";

export default function App() {
  const [currentProduct, setCurrentProduct] = React.useState(null);
  const [cartItems, setCartItems] = React.useState([]);

  function showDetails(item) {
    console.log(item);
    setCurrentProduct(item);
  }
  function addToCart(item){
    console.log("main app add cart val", item)
    if(cartItems.find(prod => prod.id === item.id)){
      console.log("duplicate, product already added")
      return;
    }
    setCartItems([...cartItems, {...item}])
  }
  return (
    <div className="App">
      <h1>React Products</h1>
      <Cart cartItems={cartItems}>
      </Cart>
      <BrowserRouter>
        <Switch>
          <Redirect from="/" exact to="/products" />
          <Route exact path="/products">
            <Products cartItems={cartItems} showDetails={showDetails} addToCart={addToCart}/>
          </Route>
          <Route exact path="/products/:id">
            <ProductInfo currentProduct={currentProduct} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
