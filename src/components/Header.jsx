import React, { useState } from 'react'
import { BsCart3 } from "react-icons/bs";
import Badge from "react-bootstrap/Badge"
import { useSelector } from 'react-redux';


const Header = ({ toggle, setToggle }) => {
    const cartSelecter = useSelector((state) => state.cart.items)
    console.log(cartSelecter)


    return (
        <div className='flex justify-between items-center border border-gray-500 mt-3 px-6 py-3 rounded-3xl'>
            <span>Logo</span>

            <div className='flex gap-3 text-sm'>
                <span>Home</span>
                <span>About</span>
            </div>
            <div className='relative' onClick={() => setToggle(!toggle)}>
                <BsCart3 />
                <Badge bg="secondary" className='absolute -top-2.5 -right-1.5 text-xs bg-amber-600 p-1 rounded-2xl text-gray-900 leading-2'>{cartSelecter.length ? cartSelecter.length : 0}</Badge>
            </div>
        </div>
    )
}

export default Header