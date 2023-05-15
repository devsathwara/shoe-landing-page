import './assets/css/App.css'
import logo from './assets/brand_logo.jpg'

function Navbar() {

  return (
    <div>
        <nav>
            <div className="logo">
             <img src={logo}></img>
            </div>
            <div className="nav-links">
               <a href="/" className="links">Menu</a>
               <a href="/" className="links">Location</a>
               <a href="/" className="links">About</a>
               <a href="/" className="links">Contact</a>
            </div>
            <div className="btn">
            <button className="btn-login">Login</button>
            </div>
            
        </nav>
    </div>
  )
}

export default Navbar