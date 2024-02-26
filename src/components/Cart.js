import React,{useState} from 'react'
import Modal from './Modal'
import { useProductContext } from '../context/ProductContext'
const Cart = () => {

    const {state} =  useProductContext()
     const [isModalOpen,setIsModalOpen] = useState(false)

     const openModal = ()=>{
        setIsModalOpen(true)
     }

     const closeModal = ()=>{
        console.log('Before closing modal', isModalOpen);
  setIsModalOpen((prev)=>!prev);
  console.log('After closing modal', isModalOpen);
     }

  return (
      <button onClick={openModal} className="w-12 h-12 bg-black text-white text-xl">
         {isModalOpen && (
        <Modal onClose={closeModal}>
          {
            state.cart.map((items)=>{
                return <li>
                    <p>item.name</p>
                    <p>item.price</p>
                    <p>item.quantity</p>
                </li>
            })
          }
        </Modal>
      )}
        Cart
      </button>
  )
}

export default Cart
