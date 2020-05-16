import Head from 'next/head'
import { useState, useRef } from "react";

const Slide = ({slide}) => (
  <div id={`slide-${slide.id}`} className="slide">
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
    .slide {
      position: relative;
      min-width: 1110px;
      height: 75vh;
      margin: 0 10%;
      display: flex;
      flex-direction: row;
    }
    
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
     
     .right {
      position: absolute;
      top: 10%;
      right: 0;
     }
     
     .person-img {
      margin-top: 2px;
      box-shadow: 0 30px 30px rgba(0,0,0,.1);
     }
      `}
    </style>
  </div>
)

const Home = () => {
  const [slide, setSlide] = useState(0);
  const sliderRef = useRef(null);
  const slideWidth = 1295;
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
    if (slide === 0) return
    const updatedSlide = slide - 1;
    setSlide(updatedSlide);
    sliderRef.current.scrollLeft = slideWidth * updatedSlide
  }

  const handleNextSlide = () => {
    if (slide === slides.length - 1) return
    const updatedSlide = slide + 1;
    setSlide(updatedSlide);
    sliderRef.current.scrollLeft = slideWidth * updatedSlide
  }
  return (
    <div className="container">
      <Head>
        <title>Frontend Mentor | Coding Bootcamp Testimonials Slider</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div ref={sliderRef} className="slide-holder">
          {slides.map(slide => <Slide key={slide.id} slide={slide}/>)}
          <div className="nav">
            <button onClick={handlePrevSlide} className="prev"><img alt="Prev" src="/icon-prev.svg"/></button>
            <button onClick={handleNextSlide} className="next"><img alt="Next" src="/icon-next.svg"/></button>
          </div>
        </div>

      </main>

      {/*<footer>*/}
      {/*  <div className="attribution">*/}
      {/*    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.*/}
      {/*    Coded by <a href="#">Nabeel Kausari</a>.*/}
      {/*  </div>*/}
      {/*</footer>*/}

      <style jsx>{`

    .attribution { font-size: 11px; text-align: center; }
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
      overflow-x: scroll;
    }
     
     .nav {
       position: fixed;
       bottom: 100px;
       right: 450px;
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
     
     .nav button:hover {
        background: hsla(240, 18%, 77%, .5);
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
     
    

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

      <style jsx global>{`
      html {
      scroll-behavior: smooth;
      }
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: 'Inter', sans-serif;
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
