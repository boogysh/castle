// import { ADD_CART, REMOVE, REMOVE_ITEM } from "./type";
//import { SOLDE } from "./type";

const initialStore = {
  carts: [],
  solde: 0,
  codeSolde: "CODE5", //must be process.env.CODE_SOLDE
  inputCodeSolde: "",
  clientInfo: [],
  totalPrice: 0, // to display on OrderPage
  orderDetails: [],
  email: "",
  findEmail: "",
  findOrder: "",
};
// reducer
function cartReducer(state = initialStore, action) {
  switch (action.type) {
    case "FIND_ORDER":
      return {
        ...state,
        findOrder: action.payload,
      };

    case "FIND_EMAIL":
      return {
        ...state,
        findEmail: action.payload,
      };

    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "ORDER_DETAILS":
      return {
        ...state,
        orderDetails: action.payload,
      };

    case "PRICE":
      return {
        ...state,
        totalPrice: action.payload,
      };
    case "CLIENT_INFO":
      return {
        ...state,
        clientInfo: action.payload,
      };
    case "SOLDE":
      return {
        ...state,
        solde: action.payload,
        //-------------------------------
      };
    case "CODE_SOLDE":
      return {
        ...state,
        codeSolde: action.payload,
      };
    case "INPUT_CODE_SOLDE":
      return {
        ...state,
        inputCodeSolde: action.payload,
      };

    case "ADD_CART":
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payload],
      // }

      // const itemIndex = state.carts.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // if (itemIndex >= 0) {
      //   state.carts[itemIndex].qty += 1;
      // }
      // else {
      //   const temp = { ...action.payload, qty: 1  };
      //   return {
      //     ...state,
      //     carts: [...state.carts, temp],
      //   };
      // }

      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        // state.carts[itemIndex].qty += 1;
        state.carts[itemIndex].qty += 0;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
      break;

    case "ADD_ITEM":
      const itemIndex_incr = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_incr].qty >= 1) {
        state.carts[itemIndex_incr].qty += 1;
        // const add_item = (state.carts[itemIndex_incr].qty += 1);
        // console.log([...state.carts, add_item]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
      break;

    case "REMOVE_CARD": // DELETE ONE CARD, type of
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case "CLEAN_CART": // DELETE ALL CART
      return {
        ...state,
        carts: [],
      };

    case "REMOVE_ITEM":
      const itemIndex_desc = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[itemIndex_desc].qty >= 2) {
        const delete_item = (state.carts[itemIndex_desc].qty -= 1);
        console.log([...state.carts, delete_item]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
      // else if (state.carts[itemIndex_desc].qty === 1) {
      //   const data = state.carts.filter((el) => el.id !== action.payload.id);
      //   return {
      //     ...state,
      //     carts: data,
      //   };
      // }
      break;

    default: //doo nothing
  }
  return state;
}
export default cartReducer;
