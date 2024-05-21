import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"



const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)


    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* If there is a button in form, it will close the modal */}
                        <Link to="/" className=" outline-none btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        <div className='mt-4 space-y-2'>
                            <label className="text-black">Email</label><br />
                            <input type="email" placeholder='Enter your Email' className='w-80 px-3 py-1 text-black bg-white border rounded-md outline-none'  {...register("email", { required: true })} /> <br />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        {/* Password */}
                        <div className='mt-8 space-y-2'>
                            <label className="text-black">Password</label><br />
                            <input type="password" placeholder='Enter your Password' className='w-80 px-3 py-1 text-black bg-white border rounded-md outline-none'  {...register("password", { required: true })} /> <br />
                            {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>
                        <div className='flex mt-4 justify-around'>
                            <button type='submit' className='bg-pink-500 px-4 py-1  rounded-md text-white hover:bg-pink-700 duration-200'>Login</button>

                            <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'> Signup</Link></p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;
