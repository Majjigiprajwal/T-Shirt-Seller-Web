import React from 'react'
import { useProductContext } from '../context/ProductContext'


const ProductList = () => {

    const {state , addToCart} = useProductContext()
  return (
       <>
       <h1>Product List</h1>
    {
          state.products?.map((product,index)=>{
            return   <div className="bg-white flex w-2/5  rounded-lg p-1 mt-4 items-center">
            <p className=" text-black text-3xl m-2 ">{index+1}.</p>
            <p className="text-black font-serif text-2xl m-2 w-4/12  ">{product.name}</p>
            <p className="text-black font-sans text-2xl m-2 w-4/12 text-right">{product.description}</p>
            <p className="text-black font-sans text-2xl m-2 w-4/12 text-right">${product.price}</p>
            <button className=" w-fit p-2 ml-5 bg-black text-white font-serif text-xl rounded-lg hover:bg-red-600 hover:text-black  " onClick={()=>{addToCart(product,'small')}}>Buy Small</button>
            <button className=" w-fit p-2 ml-5 bg-black text-white font-serif text-xl rounded-lg hover:bg-red-600 hover:text-black  " onClick={()=>{addToCart(product,'medium')}}>Buy Medium</button>
            <button className=" w-fit p-2 ml-5 bg-black text-white font-serif text-xl rounded-lg hover:bg-red-600 hover:text-black  " onClick={()=>{addToCart(product,'large')}}>Buy Large</button>
           </div>
        })
    }
     </>
  )
}

export default ProductList