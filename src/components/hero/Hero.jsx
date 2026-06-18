

function Hero() {
  return (
    <header id="hero">
    
      <div className="container">
          <div className="header__row">
            
              <div className="header__text">
                <span className="header__subtitle">
                  Est. 2007 . Lifetime Warranty
                </span>
                <h1 className="header__title">
                  Built To <br /> <span className="hero__span">Stand</span> Out.
                </h1>
                <p className="header__para">
                  Ceramic window tint, vinyl wraps, audio and lighting —
                  installed by certified pros. Walk in clean. Roll out a
                  statement.
                </p>

                <div className="header__btn__wrapper">
                  <button className="hero__btn__wrap">
                  <a href="#services" className="hero__btn__services">
                    Explore Services
                     
                  </a>
                  </button>
                 
                   <button className="quote__btn__wrap">
                  <a href="#contact" className="quote__btn">
                    Get a Free Quote
                    <span className="arrow">→</span>
                  </a>
                  </button>
                </div>
              </div>
            
          </div>
        </div>
</header>
  )
}

export default Hero