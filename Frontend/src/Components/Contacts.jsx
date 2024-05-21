import React from 'react'


const Contacts = () => {
    return (
        <div className='flex flex-col text-white font-semibold '>
            <form className=' space-y-3 text-black'>
                <h1 className='text-2xl'>Contact Us</h1>

                <div>
                    <label>Name</label> <br />
                    <input className='mt-2 text-black bg-white  px-3 py-1 border-[2px] border-black rounded-md text-sm w-80 outline-none' type="text" placeholder='Enter Your Name' />
                </div>

                <div>
                    <label>Email</label> <br />
                    <input className='mt-2 text-black bg-white px-3 py-1 border-[2px] border-black rounded-md text-sm w-80 outline-none' type="email" placeholder='Email Address' />
                </div>

                <div className='flex flex-col'>
                    <label>Message</label>
                    <textarea className='mt-2 mb-4 bg-white border-[2px] border-black rounded-md text-black text-sm px-3 py-1 outline-none'placeholder='Type Your Message' cols="10" rows="5"></textarea>
                </div>

                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Submit</button>
            </form>



        </div>
    )
}

export default Contacts
