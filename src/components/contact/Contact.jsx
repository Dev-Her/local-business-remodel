function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <div className="row contact__row">
          <div className="contact__text__wrapper">
            <h2 className="contact__title">Contact <span className="contact__title__span">Us</span></h2>
            <p className="contact__para">
              Ready to customize your ride? Come see or get in touch with us
              today!
            </p>
            <div className="contact__email">
              <i className="fa-solid fa-envelope"></i>
              <span>ktowncustoms@aol.com</span>
            </div>
            <div className="contact__info">
              <div className="contact__info__item">
                <i className="fa-solid fa-phone"></i>
                <span>407-846-0561</span>
              </div>
              <div className="contact__info__item">
                <i className="fa-solid fa-location-dot"></i>
                <span>750 Royal Palm Drive, Kissimmee, Florida 34743</span>
              </div>
              <div className="contact__info__item">
                <i className="fa-solid fa-clock"></i>
                <span>Monday - Friday, 9am - 6pm</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input className="contact__input" type="text" name="name" required />
            </label>

            <label className="contact__field">
              <span className="contact__label">Email</span>
              <input className="contact__input" type="email" name="email" required />
            </label>

            <label className="contact__field">
              <span className="contact__label">Message</span>
              <textarea className="contact__textarea" name="message" required></textarea>
            </label>

            <button type="submit" className="contact__submit">
              Submit
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
