import React from "react";
import Photocard from "./photocard";
import { Container } from "reactstrap";

export default function Facilites() {
  return (
    <>
      <div className="mt-28 mb-9 flex flex-col item-center justify-center">
      <h1
    className="text-center text-black text-3xl mb-5"
    style={{ fontFamily: "bold" }}
>
    YOUR DREAM WEDDING PLANNER IN SITAMARHI
</h1>
<p
    className="text-center text-1xl px-8 lg:px-2 lg:w-1/2 m-auto my-4"
    style={{ fontFamily: "Garamond" }}
>
    We specialize in creating unforgettable events for all occasions. Whether it’s a wedding, reception, pool party, birthday celebration, corporate event, or school party, our expert team is here to make your vision come to life. Enjoy seamless planning and top-notch catering services tailored to your needs.
</p>


        {/* <p  className='text-center text-1xl w-1/2 m-auto my-2'>Once someone's home, then a restaurant, sometimes a weekend getaway, and now a luxury space for events, corporate expeditions, and leisure retreats. It is one of the most understated, yet magical resorts for Marriage in Bangalore. We consider The Tamarind Tree a warm, family-run business and one of the best heritage hideaways in India.</p> */}
      </div>
      <Container className="flex flex-wrap item-center justify-center">
        <Photocard
          img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730063896/80_zgah83.jpg"
          title="JAY MALA"
        />
        <Photocard img="48.jpg" title="HALDI" />
        <Photocard
          img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730066173/50_jlj1un.jpg"
          title="VENUE"
        />
        <Photocard
          img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730066438/73_xjjxky.jpg"
          title="POOL PARTY"
        />
        <Photocard
          img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730066506/06_rk60yc.jpg"
          title="EVENTS"
        />
        <Photocard
          img="https://res.cloudinary.com/hritiksarraf/image/upload/v1730064827/04_av6vmt.jpg"
          title="SELFIE POINT"
        />
      </Container>

      <div
        className="flex flex-col items-center justify-center mt-5"
        style={{
          backgroundImage: "url('bar4.jpg')",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <h1
          className="text-center text-white text-7xl my-4"
          style={{ fontFamily: "fantasy" }}
        >
          Living
        </h1>
        <h3
          className="text-4xl text-yellow-500"
          style={{ fontFamily: "fantasy" }}
        >
          LUXURY LIVING
        </h3>
      </div><div className="mt-28 mb-9 flex flex-col items-center justify-center">
    <h2
        className="text-center text-black text-2xl"
        style={{ fontFamily: "Garamond" }}
    >
        ELEGANT CELEBRATIONS AT OUR OUTDOOR EVENT VENUE IN SITAMARHI
    </h2>

    <p
        className="text-center text-1xl lg:w-1/3 p-1 m-auto my-4 text-gray-700"
        style={{ fontFamily: "Garamond" }}
    >
        Experience the perfect setting for your special occasions at our luxurious venue in Sitamarhi, Bihar. Choose from our exquisite suites for a serene getaway or the spacious water courtyard villa, featuring four sky-lit rooms surrounding a tranquil koi pond. We are your go-to destination for the best wedding planner services in Sitamarhi and the entire Bihar region.
    </p>

    <div className="flex justify-center flex-wrap">
        <img
            className="p-3"
            style={{ height: "20rem" }}
            src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054562/84_rmky4b.jpg"
            alt="Luxury Suite"
        />
        <img
            className="p-3"
            style={{ height: "20rem" }}
            src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054538/85_bxyayn.jpg"
            alt="Water Courtyard Villa"
        />
    </div>
</div>
<div
    className="flex flex-col items-center justify-center mt-28"
    style={{
        backgroundImage: "url('bar4.jpeg')",
        height: "50vh",
        backgroundSize: "cover",
    }}
>
    <h1
        className="text-center text-white text-3xl md:text-7xl my-4"
        style={{ fontFamily: "Garamond" }}
    >
        EVENT PLANNING & SERVICES
    </h1>
    <h3
        className="md:text-4xl text-2xl text-center p-1 text-yellow-500"
        style={{ fontFamily: "fantasy" }}
    >
        YOUR INTEGRATED EVENT SOLUTION
    </h3>
</div>
<div className="mt-28 mb-9 flex flex-col items-center justify-center">
    <h2
        className="text-center text-black text-4xl"
        style={{ fontFamily: "Garamond" }}
    >
        PLAN YOUR DREAM EVENT WITH THE BEST PLANNER IN SITAMARHI
    </h2>

    <p
        className="text-center text-1xl lg:w-1/3 m-auto my-4 text-gray-700"
        style={{ fontFamily: "Garamond" }}
    >
        At our event venue in Sitamarhi, Bihar - 843302, we strive to provide an unparalleled experience for all types of celebrations. Whether it's a wedding, reception, pool party, birthday bash, corporate gathering, or school party, our expert team is dedicated to making your vision a reality. Trust us for the best wedding planning services and photography in Sitamarhi and beyond, ensuring every moment is beautifully captured and cherished.
    </p>
</div>

      <div className="">
        <div className="flex lg:w-2/3 flex-col lg:flex-row justify-center lg:mx-auto">
          <div className="flex flex-col md:w-[50%] justify-center items-center">
            <div className="my-4 mx-4">
              <img
                src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730064827/04_av6vmt.jpg"
                alt=""
              />
            </div>
            <div className="my-4 mx-4">
              <img
                src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054571/77_a2jdsf.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="flex md:w-[50%] flex-col">
            <div className="my-4 mx-4">
              <img
                src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730054497/55_yntr9n.jpg"
                alt=""
              />
            </div>
            <div className="my-4 mx-4">
              <img
                src="https://res.cloudinary.com/hritiksarraf/image/upload/v1730065395/11_h7wwcw.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
