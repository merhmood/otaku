import React from "react";

import Slider from "../components/Slider";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  const data = [
    {
      img: `${process.env.PUBLIC_URL}bg image.jpg`,
      header: "Otaku connect 2021 Lagos and Abuja",
      paragraph: "",
      paragraphOne: "",
      paragraphTwo: "",
      paragraphThree: "",
      btn: "About the event",
    },
    {
      img: `${process.env.PUBLIC_URL}3 black.gif`,
      header: "Abuja Edition",
      paragraph: "",
      paragraphOne: "18th December 2021",
      paragraphTwo: "Bar 360, Nnamdi Azikwe, Expressway, Wuse Abuja",
      paragraphThree: "12pm",
      btn: "Buy ticket",
    },
    {
      img: `${process.env.PUBLIC_URL}4 black.gif`,
      header: "Lagos Edition ",
      paragraph: "",
      paragraphOne: "22nd December 2021",
      paragraphTwo:
        "caesers lounge, No 16, Waziri Ibrahim crescent, off Adeola Odeku, Victoria island, Lagos",
      paragraphThree: "12pm",
      btn: "Buy ticket",
    },
    {
      img: `${process.env.PUBLIC_URL}1 black.gif`,
      header: "AFTER PARTY",
      paragraph: "Get your groove on, cause we turning up & getting LIT!!!! ",
      paragraphOne: "",
      paragraphTwo: "",
      paragraphThree: "",
      btn: "Buy ticket",
    },
  ];
  return (
    <div className="index">
      <Header />
      <Slider data={data} />
      <section>
        <div className="abt-evt">
          <h1>ABOUT THE EVENT</h1>
          <p>
            THE EVENT for Anime/Manga enthusiast in NIgeria! where you can
            relax, mingle, geek out and have fun with other Otaku, creating
            memories and Bonds. All this with games,Anime Swap and Music at the
            Connect. That's not all!!! There'll be an after party, come with
            your party groove cause we turning up & getting LIT!!!{" "}
          </p>
        </div>
        <div className="cnnt-abj">
          <div>
            <h2>Otaku Connect Abuja</h2>
            <br />
            <p>Venue: Bar 360 Nnamdi Azikwe Express Way, Wuse, Abuja</p>
            <br />
            <p>Date: 18th December, 2021</p>
            <br />
            <p>Price: </p>
            <br />
            <button>Buy Ticket</button>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}bg image.jpg`} alt="" />
          </div>
        </div>
        <div className="cnnt-lag">
          <div>
            <h2>Otaku Connect Lagos</h2>
            <br />
            <p>
              Venue: Caesars lounge, No. 16 Waziri Ibrahim Crescent, Adeola
              Odeku, V.I, Abuja
            </p>
            <br />
            <p>Date: 22nd December, 2021</p>
            <br />
            <p>Price: </p>
            <br />
            <button>Buy Ticket</button>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}bg image.jpg`} alt="" />
          </div>
        </div>
        <Slider data={data} />
        <br />
        <div className="of-prt">
          {" "}
          <div>
            <h2>Official Partners</h2>
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}bg image.jpg`} alt="" />
          </div>
        </div>
        <div className="of-spns">
          {" "}
          <div>
            <h2>Official Sponsor</h2>
            {data.map((obj) => {
              return (
                <img src={`${process.env.PUBLIC_URL}bg image.jpg`} alt="" />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
