import React, { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

const AddProductForm = () => {
  const {addProduct,state} = useProductContext()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    small: '',
    medium: '',
    large: '',
  });
  const [error,setIsError] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setIsError(false)
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,description,price,small,medium,large} = formData
    if(name.length === 0 || description.length === 0 || price.length === 0 || small.length === 0 || medium.length === 0 || large.length === 0){
          setIsError(true)
          return
    }
    const newProduct = {
      id: Date.now(),
      ...formData,
    };
    addProduct(newProduct);
    setFormData({
      name: '',
      description: '',
      price:'',
      small: '',
      medium: '',
      large: '',
    });
  };

  return (
    <div className="bg-white w-10/12 rounded-lg  mt-10 flex flex-col justify-center items-center">
    <form onSubmit={handleSubmit} className="flex w-full p-2 m-1 items-center">
        <div className="flex flex-col w-2/12">
        <label htmlFor='name' className="m-2 font-serif font-medium text-xl">Tshirt Name</label>
        <input type="text"  name='name' value={formData.name} onChange={(e)=>{handleChange(e)}}
        className="border-2 rounded-lg border-black text-lg p-2 m-2 font-sans font-medium"></input> 
        </div>
        <div className="flex flex-col w-2/12 ">
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
        <label htmlFor='small'  className="m-2 font-serif font-medium text-xl">S-Size </label>
        <input type="number"  name="small" value={formData.small}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-1/12">
        <label htmlFor='medium'  className="m-2 font-serif font-medium text-xl">M-Size</label>
        <input type="number"  name="medium" value={formData.medium}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <div className="flex flex-col w-1/12">
        <label htmlFor='large'  className="m-2 font-serif font-medium text-xl">L-Size</label>
        <input type="number"  name="large" value={formData.large}  onChange={(e)=>{handleChange(e)}}
        className="border-2  rounded-lg border-black text-lg p-2 m-2 font-serif font-medium"></input>  
        </div>
        <button type="submit" className="bg-black text-white font-serif p-3 m-2 text-xl ml-10 items-center h-fit  border-2 rounded-lg hover:bg-white hover:text-black hover:border-black">Add Product</button>
    </form>
    {error && <p className="font-serif font-medium text-red-700 text-3xl">Please enter the correct details</p>}
</div>
  );
};

export default AddProductForm;
