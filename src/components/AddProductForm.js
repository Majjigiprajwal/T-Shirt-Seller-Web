import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const AddProductForm = () => {
  const {addProduct,state} = useProductContext()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    small: 0,
    medium: 0,
    large: 0,
  });
  console.log(state)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
    addProduct(newProduct);
    setFormData({
      name: '',
      description: '',
      price: 0,
      small: 0,
      medium: 0,
      large: 0,
    });
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="flex ">
        <div className="flex flex-col w-2/12">
        <label htmlFor='name' className="m-2 font-serif font-medium text-xl">Tshirt Name</label>
        <input type="text"  name='name' value={formData.name} onChange={(e)=>{handleChange(e)}}
        className="border-2 rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input> 
        </div>
        <div className="flex flex-col w-2/12">
        <label htmlFor='description'  className="m-2 font-serif font-medium text-xl">Description</label>
        <input type="text"  name="description" value={formData.description} onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input>
        </div>
        <div className="flex flex-col w-2/12">
        <label htmlFor='price'  className="m-2 font-serif font-medium text-xl">Price</label>
        <input type="number"  name="price" value={formData.price}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-1/12">
        <label htmlFor='small'  className="m-2 font-serif font-medium text-xl">Small Size Quantity</label>
        <input type="number"  name="small" value={formData.small}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-1/12">
        <label htmlFor='medium'  className="m-2 font-serif font-medium text-xl">Medium Size Quantity</label>
        <input type="number"  name="medium" value={formData.medium}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-1/12">
        <label htmlFor='large'  className="m-2 font-serif font-medium text-xl">Large Size Quantity</label>
        <input type="number"  name="large" value={formData.large}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <button type="submit" className="bg-black text-white font-serif p-3 m-2 mt-12 text-xl items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black">Add Product</button>
    </form>
</div>
  );
};

export default AddProductForm;
