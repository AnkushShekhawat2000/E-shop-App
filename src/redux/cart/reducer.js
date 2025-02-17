import { cartActions } from "./actions";

const initialState = {
  cart: {},
  totalProducts: 0,
  totalPrice: 0
};



const cartReducer = (state = initialState, action) => {

  switch (action.type) {
    case cartActions.INC_QTY: {
      let productId = action.payload.id;
      let price = Number(action.payload.price);
      let newCart = { ...state.cart };
      newCart[productId] = (newCart[productId] || 0) + 1;

      return {
        ...state,
        cart: newCart,
        totalProducts: state.totalProducts + 1,
        totalPrice: Number(state.totalPrice) + price  
      };
    }

    case cartActions.DEC_QTY: {
      let productId = action.payload.id;
      let price = Number(action.payload.price);
      let newCart = { ...state.cart };

      if (newCart[productId] === 1) {
        delete newCart[productId];
      } else if (newCart[productId]) {
        newCart[productId] -= 1;
      }

      
      return {
        ...state,
        cart: newCart,
        totalProducts: Math.max(0, state.totalProducts - 1), 
        totalPrice: Math.max(0, Number(state.totalPrice) - price) 
      };
    }

    case cartActions.RESET:
        return initialState;

        
    default:
      return state;
  }
};

export default cartReducer;



