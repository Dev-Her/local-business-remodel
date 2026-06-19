import clock from "../../assets/clock.png";
import shield from "../../assets/shield.png";
import sparkle from "../../assets/sparkle.png";
import kaneki from "../../assets/kaneki.jpg";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row about__row">
          <div className="about__text__wrap">
            <span className="about__subtitle">
              Why <span className="about__subtitle__span">choose</span> us?
            </span>
            <h2 className="about__title">
              Obsessed <br /> with the{" "}
              <span className="about__title__span">details.</span>
            </h2>
            <p className="about__para">
              We've been transforming cars since 2007. Our installers are
              factory-certified, our films are top-tier, and our shop stays
              clean because tint does not lie. Dust shows.
            </p>
            <div className="about__cards">
              <div className="about__card">
                <div className="about__icon__wrap">
                  <img src={shield} alt="" className="about__icon" />
                </div>
                <span className="about__card__info">Lifetime warranty</span>
              </div>
              <div className="about__card">
                <div className="about__icon__wrap">
                  <img src={sparkle} alt="" className="about__icon" />
                </div>
                <span className="about__card__info">Dust-Free Bay</span>
              </div>
              <div className="about__card">
                <div className="about__icon__wrap">
                  <img src={clock} alt="" className="about__icon" />
                </div>
                <span className="about__card__info">Same Day Installs</span>
              </div>
            </div>
          </div>
          <div className="about__img__wrapper">
            <img src={kaneki} alt="Custom vehicle detail work" className="about__img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
