import profile from '../assets/images/profile.png'

function Home() {
  return (
    <>      
      <header className="header-home">
        <section className="section-container">
          <div className="section-content">
            <h1>Hi, I'm Fadhil Panigoro Rahardjo, a <span>self-taught</span> front-end developer.</h1>
            <p>Look around and see my portfolio</p>
            <button className="btn--pils">SEE MY PORTFOLIO</button>
          </div>
        </section>
        <section className="section-container bg-blue">
          <div className="img-container">
            <img src={profile} alt="fadhil" className="header-img" />
          </div>
        </section>
      </header>
    </>
  )
}

export default Home
