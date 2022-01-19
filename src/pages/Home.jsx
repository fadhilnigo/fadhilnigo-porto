import profile from '../assets/images/profile.png'
import vectorBlue from '../assets/images/vector-blue.svg'
import vectorPink from '../assets/images/vector-pink.svg'
import starPink from '../assets/images/star-pink.svg'
import starBlue from '../assets/images/star-blue.svg'
import mailIcon from '../assets/images/mail.svg'
import githubIcon from '../assets/images/github.svg'

function Home() {
  return (
    <>      
      <header className="home-container">
        <section className="section-container bg-white">
          <div className="section-content" data-aos="zoom-in">
            <h1>Hi, I'm Fadhil Panigoro Rahardjo, a <span>self-taught</span> front-end developer.</h1>
            <p>Look around and see my portfolio</p>
            <button className="btn--pils">SEE MY PORTFOLIO</button>
          </div>
        </section>
        <section className="section-container bg-blue">
          <div className="img-container" data-aos="zoom-in">
            <img src={profile} alt="fadhil" className="profile-img" />
            <img src={vectorBlue} alt="background" className="background-img shape-blue" />
            <img src={vectorPink} alt="background" className="background-img shape-pink" />
            <img src={starBlue} alt="background" className="background-img star-blue" />
            <img src={starPink} alt="background" className="background-img star-pink" />
          </div>
        </section>
      </header>

      {/* Swiper */}

      <body className="body-container">
        <section className="section-container section-left bg-white">
          <div>
            <h1 data-aos="zoom-in">About Me</h1>
            <p data-aos="zoom-in">Hi! My name is Fadhil Panigoro Rahardjo and I started to challenge myself to 
              follow the latest technology by learning and programming using Next.js.
              <br />
              I'm a self-taught front-end developer who will constantly seeking out new technologies 
              and staying up-to-date on trends in the industry even though my major is Bioenergy and kemurgy engineering.   
            </p>
            <p data-aos="zoom-in">Here are few technologies I've been learning on recently:</p>
            <div>
              <p className="body-list" data-aos="zoom-in">
                <img src={vectorPink} alt="List Style" className="list-img" />
                React.js
              </p>
              <p className="body-list" data-aos="zoom-in">
                <img src={vectorPink} alt="List Style" className="list-img" />
                Next.js
              </p>
              <p className="body-list" data-aos="zoom-in">
                <img src={vectorPink} alt="List Style" className="list-img" />
                Firebase
              </p>
            </div>
          </div>
        </section>
        <section className="section-container section-right bg-blue">
          <div className="content-container">
            <h1 data-aos="zoom-in">Get in Touch</h1>
            <p data-aos="zoom-in">Feel free to contact me anytime! I'll get back to you as soon as possible. </p>
            <p className="text-contact" data-aos="zoom-in">
              <img src={mailIcon} alt="Mail Icon" className="body-icon" />
              fadhilnigo@gmail.com
            </p>
            <p data-aos="zoom-in">Know more about my code by looking around my github!</p>
            <a href="https://github.com/fadhilnigo" className="text-contact" data-aos="zoom-in">
              <img src={githubIcon} alt="Github Icon" className="body-icon" />
              https://github.com/fadhilnigo
            </a>
          </div>
        </section>
      </body>
    </>
  )
}

export default Home
