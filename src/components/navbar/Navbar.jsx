

function Navbar() {
  return (
    <>
     <nav>
        
          <span className="nav__logo"><span className="logo__span">K-TOWN</span> <br /> CUSTOMS</span>
          <div className="nav__links">
            <a href="#hero" className="nav__link">
              Home
            </a>
            <a href="#services" className="nav__link">
              Services
            </a>
            <a href="#gallery" className="nav__link">
              Gallery
            </a>
            <a href="#about" className="nav__link">
              About
            </a>
            <a href="#contact" className="nav__link">
              Contact
            </a>
            <a href="#reviews" className="nav__link">
              Reviews
            </a>
          </div>

          <button className="nav__quote">
            <a href="#contact" className="nav__quote__btn">
              Get a Quote
            </a>
          </button>
      
      </nav>
    </>
  )
}

export default Navbar;