import Head from 'next/head'
import { useState, useEffect } from "react";

const Slide = ({ slide, cn, innerWidth }) => (
  <div className={`slide animate ${cn}`}>
    <div className="left">
      <p className="content">
        {slide.quote}
      </p>
      <h5 className="author">{slide.name} <span className="designation">{slide.designation}</span></h5>
    </div>
    <div className="right">
      <img className="person-img" alt={slide.name} src={slide.image} />
    </div>
    <style jsx>
      {`

     .left {
        width: 650px;
        display: flex;
        flex-direction: column;
        
        z-index: 1;
     }
     
     .content {
        position: relative;
        font-size: 32px;
        font-weight: 300; 
        line-height: 1.4;
        margin-top: 230px;
        margin-bottom: 6px;
        color: hsl(240, 38%, 20%);
       
     }
     .content:before {
      content: "";
      position: absolute;
      width: 120px;
      height: 100px;
      left: 14.5%;
      top: -30%;
      background-image: url("/pattern-quotes.svg");
      background-repeat: no-repeat;
      background-size: contain;
     }
     
     .author {
      font-size: 20px;
      color: hsl(240, 38%, 20%);
     }
     .designation {
      font-weight: 500;
      color: hsl(240, 18%, 77%);
      margin-left: 3px;
     }
     
    .slide {
      position: relative;
      min-width: 1110px;
      height: 75vh;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
    }
    
     .right {
      position: absolute;
      top: 10%;
      right: 0;
     }
     
     .person-img {
      margin-top: 2px;
      box-shadow: 0 30px 30px rgba(0,0,0,.1);
      border-radius: 5px;
     }
     
     .animate {
        transition: .5s all;
      }
      
        .move-out-left,
        .stay-out-left {
          transform: translate(-120%);
        }
        
        .move-out-right,
        .stay-out-right {
          transform: translate(120%);
        }
      
        .move-in-right {
          transform: translate(10%);
        }
      
        .move-in-left {
          transform: translate(-90%);
        }
        .hidden {
          display: none;
        }
     
     @media (max-width: 425px) {
      .slide {
          flex-direction: column-reverse;
          min-width: ${innerWidth}px;
          height: max-content;
        }
        
        .right {
          width: 100%;
          flex: 1;
         position: relative;
         display: flex;
         padding: 10px;
        }
        
        .person-img {
          width: 77%;
          margin: 20px auto;
         
        }
          .left {
        width: 100%;
          flex: 1;
          align-items: center;
        }
        
        .content {
          font-size: 19px;
          margin-top: 50px;
          text-align: center;
          padding: 20px;
        }
        
        .content:before {
          width: 66px;
          height: 55px;
          top: -10px;
          left: 50%;
          transform: translate(-50%);
        }
        
        .author {
          font-size: 18px;
          text-align: center;
          margin-top: 0;
        }
        
        .designation {
          display: block;
          margin-left: 0;
        }
      
        .move-in-right {
          transform: translate(0);
        }
      
        .move-in-left {
          transform: translate(-100%);
        }
     }
`}
    </style>
  </div>
)

const Home = () => {

  const [slide, setSlide] = useState(0)
  const [innerWidth, setInnerWidth] = useState(300)
  const [prevClass, setPrevClass] = useState("");
  const [nextClass, setNextClass] = useState("hidden");
  const slidesOrder = { prev: 0, next: 1}

  useEffect(() => {
    setInnerWidth(window.innerWidth - 20)
  }, []);

  const slides = [
    {
      id: 1,
      quote: `“ I’ve been interested in coding for a while but never taken the jump, until now.
                I couldn’t recommend this course enough. I’m now in the job of my dreams and so
                excited about the future. ”`,
      name: "Tanya Sinclair",
      designation: "UX Engineer",
      image: "/image-tanya.jpg"
    },
    {
      id: 2,
      quote: `“ If you want to lay the best foundation possible I’d recommend taking this course.
        The depth the instructors go into is incredible. I now feel so confident about
        starting up as a professional developer. ”`,
      name: "John Tarkpor",
      designation: "Junior Front-end Developer",
      image: "/image-john.jpg"
    }
  ];

  const handlePrevSlide = () => {
    if (slide === 0) return;
    setNextClass("move-out-right");
    setPrevClass("stay-out-left");

    setTimeout(() => {
      setSlide(0);
      setPrevClass("move-in-right");
    }, 50);
  }

  const handleNextSlide = () => {
    if (slide === 1) return;

    setNextClass("stay-out-right");
    setPrevClass("move-out-left");


    setTimeout(() => {
      setSlide(1);
      setNextClass("move-in-left");
    }, 50);
  }

  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor | Coding Bootcamp Testimonials Slider</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="slide-holder">
          <Slide innerWidth={innerWidth} cn={prevClass} slide={slides[slidesOrder.prev]} />
          <Slide innerWidth={innerWidth} cn={nextClass} slide={slides[slidesOrder.next]} />
          <div className="nav">
            <button disabled={slide === 0} onClick={handlePrevSlide} className="prev"><img alt="Prev" src="/icon-prev.svg"/></button>
            <button disabled={slide === 1} onClick={handleNextSlide} className="next"><img alt="Next" src="/icon-next.svg"/></button>
          </div>

        </div>

      </main>

      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">Nabeel Kausari</a>.
      </div>

      <style jsx>{`

    .attribution { position: absolute; bottom: 10px; left: 10px; font-size: 11px; text-align: center; }
    .attribution a { color: hsl(228, 45%, 44%); }
    
    
      
    main {
      height: 100%;
      background-image: url("/pattern-curve.svg");
      background-repeat: no-repeat;
      background-position: left bottom;
      display: flex;
      justify-content: center;
    }
    
    .slide-holder {
      position: relative;
      width: 1295px;
      height: 660px;
      background-image: url("/pattern-bg.svg");
      background-repeat: no-repeat;
      background-position: right top;
      background-size: contain;
      margin-top: 50px;
      display: flex;
      flex-direction: row;
    }
     
     .nav {
       position: absolute;
       top: 580px;
       right: 35%;
       z-index: 10;
     }
     
     .nav button {
       background: #fff;
       border: none;
       outline: none;
       padding: 18px 10px;
       width: 57px;
       cursor: pointer;
       transition: .5s all;
     }
     
     .nav button:hover:not(:disabled) {
        background: hsla(240, 18%, 77%, .5);
     }
     
     .nav button:disabled {
        cursor: not-allowed;
     }
     
     .prev {
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        box-shadow: -5px 5px 10px rgba(0,0,0,.1);
     }
     
     .next {
        border-bottom-right-radius: 50%;
        border-top-right-radius: 50%;
        box-shadow: 5px 5px 10px rgba(0,0,0,.1);
     }
     
    @media (max-width: 425px) {
        main {
          background-size: 80%;
        }
        .slide-holder {
          min-width: ${innerWidth}px;
          margin-top: 20px;
          padding: 15px;
          background-position: 40% 2%;
          background-size: 90%;
        }
        
        .nav {
          left: 50%;
          top: 315px;
          width: 100%;
          text-align: center;
          transform: translate(-50%);
        }
        
        .nav button {
          width: 45px;
          padding: 13px 10px;
        }
        
        .nav button img {
          width: 10px;
        }
      }


      
    `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
        overflow: hidden;
      }
      
      html,body, #__next, .container {
        height: 100%;
      }

      * {
        box-sizing: border-box;
      }
      
    `}</style>
    </div>
  )
}

export default Home
