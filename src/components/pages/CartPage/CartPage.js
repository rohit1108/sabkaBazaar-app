import React, { useContext } from "react";
import "./CartPage.scss";
import Navbar from "../../organisms/Navbar/Navbar"
import CardTablet from "../../organisms/CartTablet/CardTablet";
import { GlobalContext } from "../../../context/GlobalContext";
import Helmet from "react-helmet";

export default function CartPage() {
  const {
    cartItems: { count, products },
  } = useContext(GlobalContext);
  console.log(products);
  console.log(count);

  const countItems = count === 1 ? `${count} item` : `${count} items`;
  return (
    <>
    <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="You can view different offers on the prducts and different categories of product." />
            <title>Cart</title>
    </Helmet>
      <Navbar />
      <main className="cartpage">
        <h1 className="cartpage__title">My Cart ({countItems})</h1>
        <CardTablet count={count} products={products} />
      </main>
    </>
  );
}
