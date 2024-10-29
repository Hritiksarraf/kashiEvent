import React from 'react'
import Card from "./card.js" 
import {Container} from "reactstrap"



export default function CardStak() {
  return (
    <>
    <div className='flex flex-wrap flex-center item-center justify-center '>
    <Card 
        title="Wedding Events" 
        img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054487/44_wxw2dp.jpg" 
        des="Celebrate your special day with elegance and grandeur. Our team ensures every detail is perfect, creating memories that last a lifetime." 
    />
    <Card 
        title="Reception" 
        img="https://res.cloudinary.com/dun3dkqst/image/upload/v1730186204/bb72090d075472991190dce58a67f967_qbpob3.jpg" 
        des="Host a beautiful reception with our expert planning services, ensuring a stunning setting, delicious cuisine, and seamless flow for you and your guests."
    />
    <Card 
        title="Pool Party" 
        img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054511/62_bj5kvw.jpg" 
        des="Dive into fun with a stylish pool party experience. From decor to catering, we handle it all to make your poolside event a splash."
    />
    <Card 
        title="Birthday Party" 
        img="https://res.cloudinary.com/dun3dkqst/image/upload/v1730186269/istockphoto-1643695903-612x612_xyk4du.jpg" 
        des="Make birthdays unforgettable with custom decorations, exciting themes, and exceptional service. We bring your party vision to life."
    />
    <Card 
        title="Corporate Events" 
        img="corporate.jpeg" 
        des="Impress clients and colleagues with flawlessly executed corporate events. We offer professional planning tailored to your business needs."
    />
    <Card 
        title="Catering and Many More" 
        img="https://res.cloudinary.com/dun3dkqst/image/upload/v1730186650/WhatsApp_Image_2024-10-28_at_23.22.27_vst0pz.jpg" 
        des="Indulge in our exquisite catering services, featuring diverse menus crafted to perfection for any occasion. Let us elevate your event experience."
    />
</div>

    </>
  )
}
