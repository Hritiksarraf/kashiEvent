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
        img="https://www.haringphotography.com/wp-content/uploads/2022/09/Tampa-Indian-Wedding-Photos-Hilton-Downtown-11.jpeg" 
        des="Host a beautiful reception with our expert planning services, ensuring a stunning setting, delicious cuisine, and seamless flow for you and your guests."
    />
    <Card 
        title="Pool Party" 
        img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054511/62_bj5kvw.jpg" 
        des="Dive into fun with a stylish pool party experience. From decor to catering, we handle it all to make your poolside event a splash."
    />
    <Card 
        title="Birthday Party" 
        img="https://media.istockphoto.com/id/1452683187/photo/happy-girl-celebrating-her-birthday-party-at-home-with-her-close-friends-in-india-indian-model.jpg?s=612x612&w=0&k=20&c=mXnxg942yPTmsSpRgRJAyl5Z_DVlPdcmy-RgMDrxyh4=" 
        des="Make birthdays unforgettable with custom decorations, exciting themes, and exceptional service. We bring your party vision to life."
    />
    <Card 
        title="Corporate Events" 
        img="corporate.jpeg" 
        des="Impress clients and colleagues with flawlessly executed corporate events. We offer professional planning tailored to your business needs."
    />
    <Card 
        title="Catering and Many More" 
        img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730064839/08_ju471z.jpg" 
        des="Indulge in our exquisite catering services, featuring diverse menus crafted to perfection for any occasion. Let us elevate your event experience."
    />
</div>

    </>
  )
}
