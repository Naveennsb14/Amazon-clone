export const initialState = {
  basket: [
    {
      id: "12321371",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 325.55,
      rating: 5,
      image:
        "https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129",
    },
    {
      id: "12321371",
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: 325.55,
      rating: 5,
      image:
        "https://www.crossword.in/cdn/shop/products/9780670921607.jpg?v=1680194129",
    },
  ],
  user: null,
};

function reducer(state, action) {
  console.log("action", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //loginc for adding item to basket
      return { ...state, basket: [...state.basket, action.item] };
    case "REMOVE_FROM_BASKET":
      //logic for removing items from basket


      //we cloned the basket
      let newBasket = [...state.basket];

      //we checked to see if product exists, 
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in cart`
        );
      }
      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
