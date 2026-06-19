function Hero() {
  return (
    <header id="hero">
      <div className="container">
        <div className="header__row">
          <div className="header__text">
            <span className="header__subtitle">
              Kissimmee, FL | Est. 2007 
            </span>
            <h1 className="header__title">
              Custom Builds That Make Your Ride Stand Out.
            </h1>
            <p className="header__para">
              Ceramic tint, vinyl wraps, audio, and lighting installed with the
              detail your vehicle deserves.
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
                  <span className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </span>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
