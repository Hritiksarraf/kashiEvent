import React from 'react'
import 'animate.css';

export default function card(props) {
  return (
    <>
    {/* data-aos="fade-up" */}
    <div className='w-96 flex flex-col  md:h-96 my-3 mx-5 md:m-5' > 
        <img src={props.img} className='border-8 border-[#584D3C] aspect-3/4  p-1' alt="" />
        <div className='text-[#584D3C] px-2 font-bold hover:text-red-800 text-decoration-none text-4xl my-2 lg:text-5xl text-center animate-pulse' style={{fontFamily:"poppins"
, fontSize:"1.5rem"}} >{props.title}</div>
        <p className='text-center lg:text-lg  ' style={{fontFamily:"Garamond"
}}>{props.des}</p>
    </div>
    </>
  )
}
