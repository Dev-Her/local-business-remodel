function Reviews() {
  return (
    <section id="reviews">
      <div className="container">
        <div className="row reviews__row">
          <div className="reviews__text__wrap">
            <span className="reviews__subtitle">Testimonials</span>
            <h2 className="reviews__title">
              Real <span className="reviews__span">Customers.</span> Real{" "}
              <span className="reviews__span">Reviews.</span>
            </h2>
          </div>
          <div className="reviews__cards">
            <div className="reviews__card">
              <span className="reviews__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p className="reviews__para">
                "Amazing service. They got me in the same day, finished on time,
                and the tint came out great. I will be bringing my daughter's car
                next."
              </p>
              <div className="reviews__info">
                <span className="reviews__name">- Kentrell W.</span>
                <span className="reviews__car">Mitsubishi Outlander</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p className="reviews__para">
                "I had a great experience with K-Town Customs. Professional,
                quick, and the tint looks perfect. Definitely recommend."
              </p>
              <div className="reviews__info">
                <span className="reviews__name">- Aaliyah G.</span>
                <span className="reviews__car">BMW M4</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p className="reviews__para">
                "Great service, professional work, good prices, and they get the
                job done in a timely manner. I would recommend them to anyone."
              </p>
              <div className="reviews__info">
                <span className="reviews__name">- Joshua R.</span>
                <span className="reviews__car">Mitsubishi Lancer</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <p className="reviews__para">
                "Leo did a great job on my tints. Extremely professional,
                welcoming, and fairly priced. The waiting area was nice too."
              </p>
              <div className="reviews__info">
                <span className="reviews__name">- Shane B.</span>
                <span className="reviews__car">Lexus ES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
