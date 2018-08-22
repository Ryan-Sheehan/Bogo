/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILURE = 'CHECKOUT_FAILURE';

const REZ_PRODUCT_LIST = [
  {"id": 1, "title": "Pistachio", "price": 1.75, "inventory": 2},
  {"id": 2, "title": "Chocolate Chip", "price": 1.75, "inventory": 10},
  {"id": 3, "title": "Double Chocolate Chip", "price": 1.75, "inventory": 5},
  {"id": 4, "title": "Coffee Cake", "price": 1.75, "inventory": 7},
  {"id": 5, "title": "Cranberry Orange", "price": 1.75, "inventory": 3},
  {"id": 6, "title": "Blueberry", "price": 1.75, "inventory": 3},
  {"id": 7, "title": "Pumpkin", "price": 1.75, "inventory": 3},
  {"id": 8, "title": "Corn", "price": 1.75, "inventory": 3},
  {"id": 9, "title": "Lemon Poppy Seed", "price": 1.75, "inventory": 3},
  {"id": 10, "title": "Red Velvet", "price": 1.75, "inventory": 3},
  {"id": 11, "title": "Bran", "price": 1.75, "inventory": 3},
  {"id": 12, "title": "Apple Cinnamon", "price": 1.75, "inventory": 3},
  {"id": 13, "title": "Banana Nut", "price": 1.75, "inventory": 3}
];

export const getAllProducts = () => (dispatch, getState) => {
  // Here you would normally get the data from the server. We're simulating
  // that by dispatching an async action (that you would dispatch when you
  // succesfully got the data back)

  // You could reformat the data in the right format as well:
  const products = REZ_PRODUCT_LIST.reduce((obj, product) => {
    obj[product.id] = product
    return obj
  }, {});

  dispatch({
    type: GET_PRODUCTS,
    products: products
  });
};

export const checkout = (productId) => (dispatch) => {
  // Here you could do things like credit card validation, etc.
  // If that fails, dispatch CHECKOUT_FAILURE. We're simulating that
  // by flipping a coin :)
  const flip = Math.floor(Math.random() * 2);
  if (flip === 0) {
    dispatch({
      type: CHECKOUT_FAILURE
    });
  } else {
    dispatch({
      type: CHECKOUT_SUCCESS
    });
  }
};

export const addToCart = (productId) => (dispatch, getState) =>{
  const state = getState();
  // Just because the UI thinks you can add this to the cart
  // doesn't mean it's in the inventory (user could've fixed it);
  if (state.shop.products[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    productId
  };
};

export const addToCartUnsafe = (productId) => {
  return {
    type: ADD_TO_CART,
    productId
  };
};
