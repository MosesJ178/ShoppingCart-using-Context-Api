import React from 'react'


function Card(props) {
    return (
        <li  className='w-60 group relative overflow-hidden h-72 flex bg-white rounded-lg flex-col justify-center items-center'>
            <div className='w-2/3 h-3/4 flex'>
                <img src={imageUrl} alt={name} className='w-full group-hover:scale-105 h-full' />
            </div>
            <div className='flex flex-col h-2/5 cursor-pointer  items-center bg-white w-full'>
                <p>{name}</p>
                <p>{`Price : ETH${price}`}</p>
            </div>
            <div className='w-full bottom-0 absolute'>
                <button className='bg-blue-500 rounded-br-md rounded-bl-md hover:bg-blue-300 w-full px-5'>Cart</button>
            </div>
        </li>
    )
}

export default Card