import "./styles.css";

export default function Cart({ cartItems }) {
  return (
    <div className="Cart">
      Cart Details : {cartItems ? cartItems.length : "0"}
      <div>{cartItems ? cartItems.map((i) => <div>{i.name}</div>) : ""}</div>
    </div>
  );
}
