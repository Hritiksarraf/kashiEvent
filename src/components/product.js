import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  return (
    <>
      <div className="p-4 lg:p-10 h-[40] bg-black bg-gradient-to- to-[#bf72f2] from-[#0c0339] ">
        <div className="  rounded-3xl m border-4  shadow-md z-10  shadow-[#dfcaab] border-[#584D3C] bg-black">
          <div className="grid lg:grid-cols-2 items-center justify-items-center ">
            <div className="order-2 pb-10 lg:pb-0 lg:order-1 flex text-white flex-col justify-center items-center">
              <p className=" text-center p-2 lg:text-7xl text-5xl animate-pulse font-['poppins']">
                {props.heading}
              </p>
              <p className='text-center mb-4 text-lg  px-3 lg:w-2/3 font-["Garamond"]'>
                {" "}
                {props.description}
              </p>

              <div className="flex justify-between width-screen">
                <div className="px-8 ">
                  <Link
                    to="/contact"
                    className={`bg-gradient-to-r  to-[#aa9c66] from-[#584D3C] py-2 px-6 no-underline  text-black rounded-2xl  text-lg`}
                  >
                    Contact
                  </Link>
                </div>
               
              </div>
            </div>

            <div class="relative rounded-md ">
              <img
                src={props.img}
                class="md:w-[50vw] object-cover md:h-[60vh]  rounded-3xl "
              />
              <div class="absolute rounded-3xl inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
