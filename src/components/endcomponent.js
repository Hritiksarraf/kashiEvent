import React from "react";
import Accordion from "./accordion";
import { Container } from "reactstrap";
import Footer from "./footer2";

export default function Endcomponent() {
  return (
    <>
      <div className="m-auto h-2/3 w-screen flex flex-col justify-center p-3 items-center bg-gray-300 ">
        <div className="h-16 w-screen flex items-center justify-center ">
          <a className=" text-black mx-3" href="https://www.instagram.com/kashieventandcaterers/profilecard/?igsh=M29taG5iNXVscW9t">
            <i class="fa-brands fa-instagram fa-2xl "></i>
          </a>
          <a className=" text-black mx-3" href="https://www.facebook.com/people/Kashi-Event-Caterers/61553954161223/">
            <i class="fa-brands fa-facebook fa-2xl"></i>
          </a>

          <a
            className=" text-black mx-3"
            href="mailto:kashieventandcaterers@gmail.com
"
          >
            <i class="fa-solid fa-envelope fa-2xl"></i>
          </a>
        </div>
        <iframe
          className=" lg:w-1/2 w-[90vw] h-96 md:h-[30rem] mb-10"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          style={{ filter: "grayscale(90%)" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.7594990803527!2d85.48706617613419!3d26.592091776839837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ecf10021a9467b%3A0xf7d960e6c869cff6!2sKashi%20Event%20and%20Caterers!5e0!3m2!1sen!2sin!4v1730185715694!5m2!1sen!2sin"
        ></iframe>{" "}
        <script
          type="text/javascript"
          src="https://embedmaps.com/google-maps-authorization/script.js?id=fb5310535e855f23041e76f80d220879cda6a205"
        ></script>
      </div>
      {/* <div className="w-screen h-48 bg-zinc-950 flex itmes-center justify-center text-gray-400 flex-col text-center bg-black">
          <p>The Tamarind Tree, Koat Bazar, Sitamarhi, Bihar, India </p>
          <p> +91 7061652485 | hritiksarraf@gmail.com</p>

      </div> */}
      <Footer />

      {/* <Container> */}
      {/* <Accordion /> */}
      {/* </Container> */}
    </>
  );
}
