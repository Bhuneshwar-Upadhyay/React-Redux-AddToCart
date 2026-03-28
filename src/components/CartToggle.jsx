import React, { useEffect, useRef, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slice';


const CartToggle = ({ toggle, setToggle }) => {
    const dispatch = useDispatch();
    const cartProduct = useSelector((state) => state.cart.items)

    const [val, setVal] = useState(1);
    const hendalQty = (id, qty) => {
        const quantity = parseInt(qty) > 1 ? parseInt(qty) : 1;
        const cartTempItem = cartProduct.map((item) => {
            return item.id == id ? { ...item, quantity } : item
        })
        console.log(cartTempItem[0]);
        setVal(cartTempItem)
    }

    return (

        <div className={`fixed w-2xs top-0 h-full bg-gray-900 px-5 pt-15 pb-5 z-50 text-left transition-all ${toggle ? 'right-0' : '-right-84'}`}>
            <a className='absolute top-3 cursor-pointer text-md leading-0 right-4 w-8 h-8 rounded-full bg-gray-800 flex justify-center items-center' onClick={() => setToggle(!toggle)}>x</a>
            <h3 className='flex justify-between'><span>Your Cart Items</span> <span>{val.length}</span></h3>
            <hr />

            <div className='mt-4'>
                {
                    cartProduct.length > 0 ? cartProduct.map((item) => (
                        <div key={item.id} className='w-full flex gap-2 items-center border-b border-gray-700 py-1'>
                            <img src={item.images[0]} className='w-8' />
                            <div className='w-full text-xs text-nowrap overflow-hidden text-ellipsis'>{item.title}</div>
                            <div className='w-34'>
                                <input type='number' onChange={(e) => hendalQty(item.id, e.target.value)} value={item.val ? item.val : 1} className='text-xs w-full border border-gray-700 p-1' />
                            </div>
                            <div className=' text-xs'>{item.price}</div>
                            <button onClick={() => dispatch(removeItem(item))} className='p-1 cursor-pointer text-sm bg-red-600 rounded-2xl'><MdDelete /></button>
                        </div>
                    ))
                        :
                        <p>Cart is Empty!</p>
                }
                <div className='flex justify-between border border-gray-700 p-2 mt-3'>
                    <span>Total :</span> <span>{cartProduct.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
                </div>
            </div>

        </div>
    )
}

export default CartToggle