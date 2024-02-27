import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  products: [],
  cart: [],
  totalPrice:0
};

const productReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };


    case 'ADD_TO_CART':
      const newTotal = Number(state.totalPrice) + Number(action.payload.price)
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
           return {...state,products : updatedProducts,cart:updatedCart,totalPrice :newTotal}
      }
      else{
        return { ...state, products: updatedProducts,  cart: [...state.cart, { ...action.payload, quantity: 1 }] ,totalPrice : newTotal};
      }

      
      case 'ORDER_PRODUCTS':
           return {...state,cart:[],totalPrice:0}


    
      case 'CANCEL_ORDER' :
           return {...state,cart:[],totalPrice :0}


    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const addProduct = (product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  const addToCart = (product,size) => {
    if(Number(product[size]) > 0){
      product = {...product,size: size,quantity : 0}
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  const order = ()=>{
    dispatch({type : 'ORDER_PRODUCTS'})
  }

  const cancelOrder = ()=>{
    dispatch({type :'CANCEL_ORDER'})
  }

  return (
    <ProductContext.Provider value={{ state, addProduct, addToCart,order,cancelOrder}}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => useContext(ProductContext);

export { ProductProvider, useProductContext };
