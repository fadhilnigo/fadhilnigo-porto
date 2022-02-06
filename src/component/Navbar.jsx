import { useNavigate, useLocation, useMatch } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'

function Navbar() {
  const [show, setShow] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  
  const pathMatchRoute = (route) => {
    if(route === location.pathname) {
      return true
    }
  }

  const Match = (route) => useMatch(route)

  return (
    <nav className="navbar-sticky">
      <div className="navbar">
        <div className={(Match("portofolio/:id") ? 
              "btn-active" : 
              "btn-disable")}
        >
          <button 
              className="nav-link btn--transparent"
              onClick={() => navigate("/portofolio") }
            >Back to Portofolio</button>
        </div>
        <div className="navbar">
          <button 
            className="nav-link btn--transparent"
            onClick={() => pathMatchRoute('/') ? 
              navigate("/portofolio") : 
              navigate("/")}
          >
            {pathMatchRoute('/') ? "PORTOFOLIO" : "HOME"}
          </button>
          <button 
            className="nav-link btn--transparent"
            onClick={() => pathMatchRoute('/') ? 
            window.location.replace("/#contact") :
            setShow(true)}
          >
            CONTACT
          </button>
          <Modal onClose={() => setShow(false)} show={show}/>  
        </div>
      </div>
    </nav>
  )
}

export default Navbar
