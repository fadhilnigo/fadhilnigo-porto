// This page is for temporary

import housemarketplaceImg from '../assets/images/house-marketplace-img.png'

function Housemarketplace() {
  return (
    <div className="project-container">
      <div className="project-card">
        <header className="content-wrap">
          <h1 className="header-title">House Marketplace Apps</h1>
          <hr></hr>
          <img src={housemarketplaceImg} alt="House Marketplace App Screenshot" className="header-img" />
        </header>
        <main>
          <div  className="content-wrap">
            <div className="body-wrap">
              <h1 className="content-title">About This Project<hr></hr></h1>
              <p className="content-text">
                Mockup marketplace website applications to buy, sell, or rent a property.
                It is one of the projects on React Front to Back 2022 course for practice
                how to fetch modular API using Firebase and also how to setup firebase for Authentication.
              </p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies involved while working on this project:</p>
              <ul>
                <li>Javascript framework React JS</li>
                <li>Authentication feature and Database storage using Firebase</li>
                <li>Data visualization using Leaflet</li>
                <li>Carousel plugin library using Swiper JS</li>
                <li>Pop up wrapper animation plugin library using React-Toastify</li>
              </ul>
            </div>

            <div className="content-footer body-wrap">
              <p className="content-text">Repo: <a href="https://github.com/fadhilnigo/house-marketplace-app" 
                target="_blank" 
                rel="noreferrer noopener">github.com/fadhilnigo/house-marketplace-app</a></p>
              <a 
                className="btn-container" 
                href="https://house-marketplace-app-theta.vercel.app/" 
                target="_blank" 
                rel="noreferrer noopener"
              >
                <button className='btn--pils'>
                  View Website
                </button>
              </a>
            </div>
          </div>
        </main>
        
      </div>
    </div>
  );
}

export default Housemarketplace;