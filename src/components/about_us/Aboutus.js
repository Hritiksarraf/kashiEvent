import React from "react";

export default function Aboutus() {
  return (
    <>
      <div className="bg-[#cec8c0]">
        {/* <div
          className=" bg-cover  h-[75vh]  items-center justify-center text-center cover font-mono bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://www.studiomemorylane.com/wp-content/uploads/2019/06/Ethnic-Punjabi-wedding-couple-photography.jpg")',
          }}
        ></div> */}
        <div className="grid grid-row-2  lg:grid-cols-2">
          <div className="lg:w-[50vw] m-0 order-2 lg:order-1 p-10 lg:p-24">
            <h1 className="font-sans text-xl  text-[#280c0c] ">
            Welcome to Kashi Event & Caterers, Sitamarhi’s premier event planning and catering service, dedicated to crafting unforgettable moments. We are passionate about creating experiences that are as unique as you, blending elegance, precision, and a personal touch to bring every event to life.
            </h1>
            <p>
            With years of experience and a deep-rooted commitment to excellence, we offer tailored event planning services that turn your dreams into reality. Our approach blends elegant details with a personalized touch, ensuring that every celebration is meticulously crafted to exceed your expectations.
            </p>
            <p>
            Our services extend to exquisite catering with menus crafted by our culinary experts, designed to elevate every gathering. We understand that every occasion is unique, which is why our team collaborates closely with you to tailor each detail, ensuring your vision is perfectly executed.
            </p>
            <p>At Kashi Event & Caterers, we don’t just plan events; we bring dreams to life. Located on Makhan Sonar Road near RaghuLeela Resort in Sitamarhi, our venue offers luxury suites and a spacious outdoor courtyard. This serene setting provides the perfect backdrop for creating memories that will be cherished for a lifetime.</p>
          </div>
          <div className="">
            <img src="https://res.cloudinary.com/dun3dkqst/image/upload/v1730147898/KEC_Logo-01_bivees.png" className="w-[90vw]  border-8 order-1 shadow-lg shadow-black lg:order-2 bg-white rounded-3xl  border-white m-4" alt="" />
          </div>
        </div>
        <div className=" lg:flex flex-row bg-[#ab9d8b] py-14 items-center justify-center gap-32">
          <div className="">
            <p className="font-['Caveat']  text-9xl text-center"> 250+</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              wedding Couples
            </p>
          </div>
          <div className="">
            <p className="font-['Caveat'] text-9xl text-center">20+</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              expert member
            </p>
          </div>
          <div>
            <p className="font-['Caveat'] text-9xl text-center">100%</p>
            <p className="font-['Bad_Script'] text-center text-2xl">
              Satisfaction Rate
            </p>
          </div>
        </div>
        <div className="pt-14 ">
          <div>
            <p className="font-['Bad_Script'] text-center text-2xl">
              WHY CHOOSE
            </p>
            <p className="font-['Caveat'] -mt-10 text-7xl lg:text-9xl text-center">
              Dreamy day
            </p>
          </div>
          <div className="lg:flex flex-row mt-20">
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid fa-champagne-glasses text-9xl text-center"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                CREATIVE CONCEPT
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers bring your dream wedding concept to life
                from thematic decorations to innovative layouts.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid text-9xl text-center fa-face-smile"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                PERFECT ATTIRE
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers work closely with our renowned designers
                to ensure that your own wedding attire is the star of the
                occasion.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <i class="fa-solid fa-plate-wheat text-9xl text-center"></i>
              <p className="font-['Caveat'] mt-4 text-center text-4xl">
                DELICIOUS FOOD
              </p>
              <p className="font-['Bad_Script'] text-center text-xs w-2/3">
                Our wedding organizers prioritize partnering with top-notch
                caterers to ensure that your wedding feast is a symphony of
                flavors.
              </p>
            </div>
          </div>
          
        </div>
        <div>
          <div className="pt-16 bg-[#ab9d8b]">
            <p className="font-['Bad_Script'] bg-[#ab9d8b] text-center m-0 text-4xl lg:text-6xl">
              Founder Of Kashi Event And Caterers
            </p>
          </div>
          <div className="flex flex-col lg:flex-row bg-[#ab9d8b] items-center m-0  pb-20 justify-center gap-10">
            <div>
              <div className="border-8 shadow-lg shadow-black  border-white m-4">
                <img src="https://res.cloudinary.com/dun3dkqst/image/upload/v1730149172/IMG_1434_rhj0hk.jpg"  className="w-[25rem]" alt="" />
              </div>
             
              <p className="font-['Caveat']  text-5xl text-center">
                Vivek Kumar
              </p>
            </div>
            
            
          </div>
          </div>
        
      </div>
    </>
  );
}
