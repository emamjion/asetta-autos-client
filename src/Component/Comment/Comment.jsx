import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContex } from '../Providers/Authprovider';
import { FaClock } from "react-icons/fa";

const Comment = ({ comment }) => {
    const { user } = useContext(AuthContex)
    // console.log(comment)



    return (
        <div className='flex items-start justify-start gap-6 ms-40 mt-10 bg-slate-50 p-4 rounded-xl'>
            <div className='w-[100px]'>
                <img className='rounded-full ' src={comment?.photoURL} alt="" />
            </div>
            <div className='w-11/12'>
                <h1 className='font-bold text-xl mt-3'>{comment?.name}</h1>
                <p className='text-red-600 font-bold mt-3 flex items-center gap-1'><FaClock></FaClock>{comment.date}</p>
                <p className='mt-3 text-xl'>{comment?.comment}</p>
            </div>
        </div>
    );
};

export default Comment;