//  import { SOLDE } from "./type"
// export const SOLDE_AMOUNT = ( totalPrice, pourcents) => {

export const SOLDE = ( payload) => {
    return {
    type: "SOLDE",
    payload: payload,
  }
}
export const INPUT_CODE_SOLDE = ( payload) => {
  return {
  type: "INPUT_CODE_SOLDE",
  payload: payload,
}
}

export const REMOVE_CARD = (payload) => {
  return {
    type: "REMOVE_CARD",
    payload: payload,
  }
}
export const ADD_ITEM = (payload) => {
  return {
    type: "ADD_ITEM",
    payload: payload,
  }
}
export const REMOVE_ITEM = (payload) => {
  return {
    type: "REMOVE_ITEM",
    payload: payload,
  }
}
export const PRICE = (payload) => {
  return {
    type: "PRICE",
    payload: payload,
  }
}
export const ORDER_DETAILS = (payload) => {
  return {
    type: "ORDER_DETAILS",
    payload: payload,
  }
}
export const FIND_ORDER = (payload) => {
  return {
    type: "FIND_ORDER",
    payload: payload,
  }
}
export const FIND_EMAIL = (payload) => {
  return {
    type: "FIND_EMAIL",
    payload: payload,
  }
}
export const EMAIL = (payload) => {
  return {
    type: "EMAIL",
    payload: payload,
  }
}
export const CLEAN_CART = (payload) => {
  return {
    type: "CLEAN_CART",
    payload: payload,
  }
}









