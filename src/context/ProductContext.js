import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'ADD_TO_CART':
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, [action.payload.size]: product[action.payload.size] - 1 };
        }
        return product;
      });
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id && item.size === action.payload.size
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
           return {...state,products : updatedProducts,cart:updatedCart}
      }
      else{
        return { ...state, products: updatedProducts,  cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
      
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (product) => {
    console.log(product)
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const addToCart = (product,size) => {
    product = {...product,size: size,quantity : 0}
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <ProductContext.Provider value={{ state, addProduct, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductProvider, useProductContext };
