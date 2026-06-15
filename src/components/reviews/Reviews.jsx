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
              <span className="reviews__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
              <p className="reviews__para">
                "Amazing service… was able to get me in the same day and do it in a timely fashion a one service love the tent.. Will be doing my daughter’s car tomorrow as well"
              </p>
              <div className="reviews__info">
              <span className="reviews__name">-Kentrell W.</span>
              <span className="reviews__car">Mitsubishi Outlander</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
              <p className="reviews__para">
                "I had a great experience with K town customs . He did an excellent job, was very professional, and got everything done in just about an hour. The tint looks perfect—definitely recommend!"
              </p>
              <div className="reviews__info">
              <span className="reviews__name">-Aaliyah G.</span>
              <span className="reviews__car">BMW M4</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
              <p className="reviews__para">
                "Great service! Professional and good prices! Gets the job done in a timely manner as well and always is there to assist. Would recommend to anyone who wants to get tints done!"
              </p>
              <div className="reviews__info">
              <span className="reviews__name">-Joshua R.</span>
              <span className="reviews__car">Mitsubishi Lancer</span>
              </div>
            </div>
            <div className="reviews__card">
              <span className="reviews__stars"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
              <p className="reviews__para">
                "Leo did a great job on my tints. extremely professional and welcoming. great price and had a nice waiting area as well. would highly recommend. 10/10"
              </p>
              <div className="reviews__info">
              <span className="reviews__name">-Shane B.</span>
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
