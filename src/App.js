import React, { useState, useEffect } from "react";
import Land from "./Assets/land.png";
import Typewriter from "typewriter-effect";
import Hamburger from "./components/Hamburger";
import CountDown from "./components/countDown";
import Video from "./components/Video";
import Zone from "./components/Zone";
import Festival from "./components/Festival";
import Footer from "./components/Footer";
import Artist from "./components/Artist";
import Map from "./components/Map";
import OurCompany from "./components/OurCompany";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="h-full w-full overflow-hidden block sm:hidden">
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <h1 className="font-bold text-5xl text-white text-center">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Mobi Festival 2022!")
                  .callFunction(() => {})
                  .pauseFor(1500)
                  .deleteAll()
                  .callFunction(() => {})
                  .start();
              }}
            />
          </h1>
        </div>
      ) : (
        <>
          <Hamburger />
          <div className="h-full"></div>
          <div className="">
            <div
              className=""
              style={{
                backgroundImage: `url(${Land})`,
                WebkitBackgroundSize: "cover",
                MozBackgroundSize: "cover",
                OBackgroundSize: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="flex flex-col justify-center items-center text-center h-full pt-52">
                <h1 className="font-semibold text-2xl text-white">
                  Mobi Festival 2022
                </h1>
                <p className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Холбоочдын баяр
                </p>
              </div>
            </div>
            <CountDown />
            <Video />
            <Zone />
            <Festival />
            <Artist />
            <OurCompany />
            <Map />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
