import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>Frontend Mentor | Coding Bootcamp Testimonials Slider</title>
      <link rel="icon" href="/favicon-32x32.png" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet" />
    </Head>

    <main>
      <div className="slide-holder">
        <div className="slide">
          <div className="left">
            <p className="content">
              “ I’ve been interested in coding for a while but never taken the jump, until now.
              I couldn’t recommend this course enough. I’m now in the job of my dreams and so
              excited about the future. ”
            </p>
            <h5 className="author">Tanya Sinclair <span className="designation">UX Engineer</span></h5>
          </div>
          <div className="right">
            <img className="person-img" alt="Tanya Image" src="/image-tanya.jpg"/>
            <div className="nav">
              <button className="prev"><img alt="Prev" src="/icon-prev.svg"/></button>
              <button className="next"><img alt="Next" src="/icon-next.svg"/></button>
            </div>
          </div>
        </div>
      </div>


      {/*“ If you want to lay the best foundation possible I’d recommend taking this course.*/}
      {/*The depth the instructors go into is incredible. I now feel so confident about*/}
      {/*starting up as a professional developer. ”*/}

      {/*John Tarkpor*/}
      {/*Junior Front-end Developer*/}
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
      background-position: bottom left;
      display: flex;
      justify-content: center;
    }
    
    .slide-holder {
      width: 1300px;
      height: 650px;
      background-image: url("/pattern-bg.svg");
      background-repeat: no-repeat;
      background-position: top right;
      background-size: contain;
      margin-top: 50px;
    }
    
    .slide {
      position: relative;
      width: 1120px;
      height: 75vh;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
    }
    
    .left {
        width: 650px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-image: url("/pattern-quotes.svg");
        background-repeat: no-repeat;
        background-position: 18% 35%;
        z-index: 1;
     }
     
     .content {
        font-size: 32px;
        font-weight: 300; 
        line-height: 1.5;
        margin-top: 200px;
        margin-bottom: 0;
        color: hsl(240, 38%, 20%);
     }
     
     .author {
      font-size: 20px;
      color: hsl(240, 38%, 20%);
     }
     .designation {
      font-weight: 300;
      color: hsl(240, 18%, 77%);
     }
     
     .right {
      position: absolute;
      top: 10%;
      right: 0;
     }
     
     .person-img {
      box-shadow: 1px 30px 40px rgba(0,0,0,.2);
     }
     
     .nav {
       position: absolute;
       bottom: -5%;
       left: 10%;
     }
     
     .nav button {
       background: #fff;
       border: none;
       outline: none;
       padding: 18px;
       width: 60px;
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

export default Home
