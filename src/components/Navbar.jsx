import React from 'react'
import {BsFillCartCheckFill} from 'react-icons/bs'
import { useStore } from "../context/context";


function Navbar() {
    const { cart, showcart, setshowcart } = useStore();
    return (
        <div className='fixed top-0 left-0 right-0 bg-white z-10 py-2 px-1'>
            <nav>
                <div className='font-bold text-3xl cursor-pointer'>NFT's</div>
            </nav>
            <div className='absolute top-3 right-5'>
            <BsFillCartCheckFill onClick={() => setshowcart(!showcart)} className='w-[30px] h-[30px] cursor-pointer'/>
            <span className='absolute -top-3 -right-2'>{cart.length}</span>
            </div>
        </div>
    )
}

export default Navbar