import "./styles.css";
import { Route } from "react-router-dom";

export default function Products({ showDetails, addToCart, cartItems }) {
  const list = [
    { name: "card 1", id: 1 },
    { name: "card 2", id: 2 },
    { name: "card 3", id: 3 },
    { name: "card 4", id: 4 }
  ];

  const Button = (item) => (
    <Route
      render={({ history }) => (
        <button
          type="button"
          onClick={() => {
            console.log("@@@@@", item);
            showDetails(item);
            history.push("/products/" + item.id);
          }}
        >
          Details
        </button>
      )}
    />
  );

  const onAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <div className="App">
      {list.map((item) => (
        <div className="Card">
          {item.name}
          {Button(item)}
          <button
            disabled={cartItems.find(prod => prod.id === item.id)}
            type="button"
            onClick={() => {
              onAddToCart(item);
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
