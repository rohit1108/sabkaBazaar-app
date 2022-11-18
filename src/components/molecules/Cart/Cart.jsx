import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import CartImage from "../../../static/images/cart.svg";
import { GlobalContext } from "../../../context/GlobalContext";
import { useMediaQuery } from "../../../utils/useMediaQuery";
import Image from "../../atoms/Image/Image";
import Modal from "../../atoms/Modal/Modal";
import CartModal from "../../organisms/CartModal/CartModal";

import "./Cart.scss";

export default function Cart() {
  const {
    cartItems: { count, cartOpen },
    dispatch,
  } = useContext(GlobalContext);

  const countItem = count === 1 ? `${count} item` : `${count} items`;

  const navigate = useNavigate();
  const browserWidth = useMediaQuery("(min-width: 769px)");

  const handleBrowserWidth = () => {
    browserWidth
      ? dispatch({ type: "HANDLE_CART", cartOpen: !cartOpen })
      : navigate("/cartpage");
  };

  const handleOnKeyPress = (e) => {
    e.key === "Enter" && handleBrowserWidth();
  };

  return (
    <>
      <div
        className="cart-wrapper"
        onClick={() => {
          handleBrowserWidth();
        }}
        tabIndex={0}
        onKeyPress={handleOnKeyPress}
      >
        <Image
          source={CartImage}
          className={"cart-wrapper__image"}
          alt={"Cart Image"}
        />
        <p className="cart-wrapper__text" data-testid="count-items">{countItem}</p>
      </div>
      {cartOpen ? (
        <Modal>
          <CartModal cartOpen={cartOpen} />{" "}
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
