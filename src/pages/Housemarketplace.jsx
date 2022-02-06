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
              <p className="content-text">This is a project</p>
            </div>
            <div className="body-wrap">
              <h1 className="content-title">Technical<hr></hr></h1>
              <p>Technologies i used in this project:</p>
              <ul>
                <li>Next js</li>
                <li>Next js</li>
                <li>Next js</li>
                <li>Next js</li>
              </ul>
            </div>

            <div className="content-footer body-wrap">
              <p className="content-text">Repo: <a>https://github.com/fadhilnigo/house-marketplace-app</a></p>
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