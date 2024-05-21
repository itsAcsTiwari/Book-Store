import React from 'react'

const Cards = ({item}) => {
    return (
        <>
            <div className='mt-4 my-3 p-1 '>
                <div className="card w-70 mr-4 bg-white shadow-xl hover:scale-105 duration-200 ">
                    <figure><img  src={item.image} alt="Shoes" /></figure>
                    <div className="card-body text-black  ">
                        <hr className='border-b border-gray-400'/>
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="badge badge-outline">${item.price}</div>
                            <div className=" cursor-pointer px-2  rounded-full border-[1px]  hover:bg-pink-500 hover:text-white duration-200 hover:border-none">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
