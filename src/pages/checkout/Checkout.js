import React from "react";
import { Header } from "../../Header";
import { useStateValue } from "../../StateProvider";
import "./checkout.css"
import Checkoutproduct from "../../component/checkoutproduct/Checkoutproduct";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <>
      <Header />
    <div className="checkout">
      <div className="checkout__left">
      <img
        className="checkout_ad"
        src="https://i.ytimg.com/vi/c0m57jAkF9U/maxresdefault.jpg"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Cart is Empty</h2>
          <p>You have no items in your cart. to buy one or more items, click "add to basket" next to the item</p>
        </div>
      ):(
        <div>
          <h2 className="checkout__title">Your Shopping Cart
          {basket.map(item=>(
            <Checkoutproduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
          
          </h2>
        </div>
      )}
      </div>
    </div>
    </>
  );
};

export default Checkout;
