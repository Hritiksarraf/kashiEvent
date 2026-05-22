import React from 'react'
import Hero from '../components/hero'
import Videoplayer from "../components/videoplayer.js"
import CardStak from '../components/cardStak.js';
import Middle from '../components/middle.js';
import Facilites from '../components/facilites.js';
import ContactUs from '../components/contact_us.js';

export default function Home() {
  return (
    <div className='bg-[#cec8c0'>
    <Hero/>
    <Videoplayer/>
    <CardStak/>
    <Middle/>
    <Facilites/>
    <ContactUs/>
    </div>
  )
}
