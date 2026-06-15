import service_tint from "../../assets/service-tint.jpg";
import service_wrap from "../../assets/service-wrap.jpg";
import service_lighting from "../../assets/service-lighting.jpg";

function Service() {
  return (
    <div>
      
        <section id="services">
          <div className="container">
            <div className="row service__row">
              <div className="service__text__wrap">
                <div className="service__text__titles">
                  <span className="service__subtitle">What we do</span>
                  <h2 className="service__title">Services.</h2>
                </div>
                <div className="service__para__wrap">
                  <p className="service__para">
                    Every install gets the same attention to detail — whether
                    it's a daily driver or a show car.
                  </p>
                </div>
              </div>
              <div className="service__card__wrap">
                <div className="service__card">
                  <div className="service__img__wrap">
                    <img src={service_tint} alt="" className="service__img" />
                  </div>
                  <div className="service__card__text">
                    <h3 className="service__card__title">
                      Ceramic Window Tint
                    </h3>
                    <p className="service__card__para">
                      Premium ceramic films that reject heat, block 99% UV, and
                      look unreal. Lifetime warranty.
                    </p>
                    <div className="inquire">
                      <a href="" className="service__inquire">
                        Inquire
                      </a>
                      <span className="service__icon__span">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service__card">
                  <div className="service__img__wrap">
                    <img src={service_wrap} alt="" className="service__img" />
                  </div>
                  <div className="service__card__text">
                    <h3 className="service__card__title">Vinyl Wraps</h3>
                    <p className="service__card__para">
                      300+ colors and finishes — matte, satin, gloss, chrome.
                      Avery Dennison & 3M certified.
                    </p>
                    <div className="inquire">
                      <a href="" className="service__inquire">
                        Inquire
                      </a>
                      <span className="service__icon__span">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="service__card">
                  <div className="service__img__wrap">
                    <img
                      src={service_lighting}
                      alt=""
                      className="service__img"
                    />
                  </div>
                  <div className="service__card__text">
                    <h3 className="service__card__title">Audio & Lighting</h3>
                    <p className="service__card__para">
                      Custom sound systems, ambient lighting, underglow. Built
                      clean, wired right.
                    </p>
                    <div className="inquire">
                      <a href="" className="service__inquire">
                        Inquire
                      </a>
                      <span className="service__icon__span">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      
    </div>
  );
}

export default Service;
