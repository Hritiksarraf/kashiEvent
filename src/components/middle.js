import React from 'react';

export default function Middle() {
  return (
    <div>
      <div
        className='flex flex-col items-center justify-center mt-20'
        style={{ backgroundImage: "url('bar1.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4' style={{fontFamily:"Garamond"}}>The Story</h1>
        <h3 className=' text-4xl text-yellow-500 text-center p-1' style={{fontFamily:"Garamond"}}>A TAILOR MADE AFFAIR</h3>
      </div>
      <div className='mt-24 mb-9 flex flex-col items-center justify-center'>
    <h1 className='text-center text-black text-3xl mb-5' style={{fontFamily:"bold"}}>Unforgettable Events Tailored Just for You in Sitamarhi</h1>
    <h2 className='text-center text-2xl text-black' style={{fontFamily:"Garamond"}}>YOUR CELEBRATION PARTNER</h2>
    <p className='text-center text-1xl px-4 lg:w-1/2 m-auto my-4' style={{fontFamily:"Garamond"}}>
        We specialize in a variety of events including Weddings, Receptions, Pool Parties, Birthday Parties, Corporate Events, School Parties, and Catering services. Our dedicated team ensures that every detail is meticulously planned to create memorable experiences tailored to your unique vision.
    </p>
</div>

      <div className='mb-10 lg:mb-20'>
        <img  className='lg:w-2/3 lg:h-2/3 w-[89vw] m-auto'   src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730064068/49_a6hkwb.jpg" alt="" />
      </div>
      <div className='flex flex-col items-center justify-center'
        style={{ backgroundImage: "url('bar3.jpg')", height: '50vh', backgroundSize: 'cover' }}
      >
        <h1 className='text-center text-white text-7xl my-4'>Facilities</h1>
        <h3 className='text-white text-2xl md:text-4xl text-center p-1'>Many Year Of Exprience</h3>
      </div>
    </div>
  );
}

