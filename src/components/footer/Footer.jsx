function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span className="logo__span">K-TOWN</span> CUSTOMS
          </span>
          <p className="footer__para">
            Kissimmee's custom tint, wrap, audio, and lighting shop.
          </p>
        </div>

        <div className="footer__links">
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__contact">
          <a href="tel:4078460561">
            <i className="fa-solid fa-phone"></i>
            407-846-0561
          </a>
          <a href="mailto:ktown4126@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            ktown4126@gmail.com
          </a>
          <span>
            <i className="fa-solid fa-location-dot"></i>
            750 Royal Palm Drive, Kissimmee, FL 34743
          </span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>Copyright 2026 K-Town Customs. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
