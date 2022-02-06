// This page is for temporary

import githubFinderImg from '../assets/images/github-finder-img.png'


function GithubFinder() {
  return (
    <div className="project-container">
      <div className="project-card">
        <header className="content-wrap">
          <h1 className="header-title">Github Finder Apps</h1>
          <hr></hr>
          <img src={githubFinderImg} alt="Github Finder App Screenshot" className="header-img" />
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
              <p className="content-text">Repo: <a>https://github.com/fadhilnigo/github-finder</a></p>
              <a 
                className="btn-container" 
                href="https://github-finder-indol-five.vercel.app/" 
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

export default GithubFinder;