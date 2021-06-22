import "./styles.css";
import { Route } from "react-router-dom";

export default function Products({ currentProduct }) {
  const Button = () => (
    <div>
      <Route
        render={({ history }) => (
          <button
            type="button"
            onClick={() => {
              history.push("/");
            }}
          >
            Back
          </button>
        )}
      />
    </div>
  );

  return (
    <div className="App">
      Product Info : {currentProduct ? currentProduct.name : ""}
      {Button()}
    </div>
  );
}
