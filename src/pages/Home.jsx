import profile from '../assets/images/profile.png'
import vectorBlue from '../assets/images/vector-blue.svg'
import vectorPink from '../assets/images/vector-pink.svg'
import starPink from '../assets/images/star-pink.svg'
import starBlue from '../assets/images/star-blue.svg'

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

      <body className="home-container">
        <section className="section-container bg-white">
          <h1>This is section one</h1>
        </section>
        <section className="section-container  bg-blue">
          <h1>This is section two</h1>
        </section>
      </body>
    </>
  )
}

export default Home
