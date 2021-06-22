import "./styles.css";
import { Route } from "react-router-dom";

export default function Products({ showDetails }) {
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

  return (
    <div className="App">
      {list.map((item) => (
        <div className="Card">
          {item.name}
          {Button(item)}
        </div>
      ))}
    </div>
  );
}
