import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage("Email service is not configured yet.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      await emailjs.sendForm(serviceId, templateId, form, {
        publicKey,
      });

      form.reset();
      setStatus("success");
      setStatusMessage("Thanks! Your quote request was sent. We'll get back to you soon.");
    } catch (error) {
      console.error("EmailJS send failed:", error);
      setStatus("error");
      setStatusMessage("Sorry, something went wrong. Please call or email us.");
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row contact__row">
          <div className="contact__text__wrapper">
            <span className="contact__subtitle">Get started</span>
            <h2 className="contact__title">
              Request a <span className="contact__title__span">Quote</span>
            </h2>
            <p className="contact__para">
              Tell us what you want done and we will help you plan the right
              tint, wrap, audio, or lighting setup for your vehicle.
            </p>

            <div className="contact__quick__actions">
              <a href="tel:4078460561" className="contact__action">
                <i className="fa-solid fa-phone"></i>
                Call Now
              </a>
              <a href="mailto:ktown4126@gmail.com" className="contact__action">
                <i className="fa-solid fa-envelope"></i>
                Email Us
              </a>
            </div>

            <div className="contact__info">
              <span className="contact__info__title">Hours & Location</span>
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
              <div className="contact__info__item">
                <i className="fa-solid fa-envelope"></i>
                <span>ktown4126@gmail.com</span>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <input type="hidden" name="subject" value="Ktown Customs quote request" />

            <label className="contact__field">
              <span className="contact__label">Name</span>
              <input className="contact__input" type="text" name="name" required />
            </label>

            <label className="contact__field">
              <span className="contact__label">Email</span>
              <input className="contact__input" type="email" name="email" required />
            </label>

            <label className="contact__field">
              <span className="contact__label">Vehicle / Service Needed</span>
              <input
                className="contact__input"
                type="text"
                name="vehicle"
                placeholder="Example: BMW tint, full wrap, subs"
              />
            </label>

            <label className="contact__field">
              <span className="contact__label">Message</span>
              <textarea
                className="contact__textarea"
                name="message"
                required
              ></textarea>
            </label>

            {statusMessage && (
              <p className={`contact__status contact__status--${status}`}>
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              className="contact__submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending..." : "Send Quote Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
