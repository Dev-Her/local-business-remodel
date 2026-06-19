import { useState } from "react";

import wrap1 from "../../assets/wrap1.jpg";
import wrap2 from "../../assets/wrap2.jpg";
import wrap3 from "../../assets/wrap3.jpg";
import tint1 from "../../assets/tint1.jpg";
import tint2 from "../../assets/tint2.jpg";
import tint3 from "../../assets/tint3.jpg";
import audio1 from "../../assets/audio1.jpg";
import audio2 from "../../assets/audio2.jpg";

function ImageSlider() {
  const images = [wrap1, wrap2, wrap3, tint1, tint2, tint3, audio1, audio2];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(null);

  const galleryTiles = [wrap2, tint1, audio1, wrap3];
  const previewImage = previewIndex === null ? null : images[previewIndex];

  const nextImage = () => {
    // if the currentIndex is the last image, set the currentIndex to the first image
    // images.length - 1 is the index of the last image there 8 images but the index of the last image is 7
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);

      // if the currentIndex is not the last image, set the currentIndex to the next image
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    // if the currentIndex is the last image, set the currentIndex to the first image
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
      // if the currentIndex is not the last image, set the currentIndex to the last image
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPreviewImage = () => {
    setPreviewIndex((previewIndex + 1) % images.length);
  };

  const prevPreviewImage = () => {
    if (previewIndex === 0) {
      setPreviewIndex(images.length - 1);
    } else {
      setPreviewIndex(previewIndex - 1);
    }
  };

  return (
    <section id="gallery">
      <div className="container">
        <div className="row gallery__row">
          <div className="gallery__text">
            <div className="gallery__titles">
              <span className="gallery__subtitle">The work</span>
              <h2 className="gallery__title">Recent builds.</h2>
            </div>
            <div className="gallery__para__wrapper">
              <a href="#contact" className="gallery__para">
                Start your build today{" "}
                <i className="fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>

          <div className="gallery__showcase">
            <div className="gallery__feature">
              <button
                className="gallery__preview__btn"
                onClick={() => setPreviewIndex(currentIndex)}
              >
                <img
                  className="gallery__feature__img"
                  src={images[currentIndex]}
                  alt="featured custom car build"
                />
              </button>
              <div className="slider__arrows">
                <button className="prev" onClick={prevImage}>
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button className="next" onClick={nextImage}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div className="gallery__tiles">
              {galleryTiles.map((image) => (
                <button
                  className="gallery__tile"
                  key={image}
                  onClick={() => setPreviewIndex(images.indexOf(image))}
                >
                  <img
                    className="gallery__tile__img"
                    src={image}
                    alt="custom car build"
                  />
                </button>
              ))}
            </div>
          </div>

          {previewImage && (
            <div className="gallery__modal" onClick={() => setPreviewIndex(null)}>
              <div
                className="gallery__modal__content"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  className="gallery__modal__close"
                  onClick={() => setPreviewIndex(null)}
                >
                  <i className="fa-solid fa-x"></i>
                </button>
                <button
                  className="gallery__modal__arrow gallery__modal__arrow--prev"
                  type="button"
                  aria-label="Previous image"
                  onClick={prevPreviewImage}
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                <img
                  className="gallery__modal__img"
                  src={previewImage}
                  alt="custom car build preview"
                />
                <button
                  className="gallery__modal__arrow gallery__modal__arrow--next"
                  type="button"
                  aria-label="Next image"
                  onClick={nextPreviewImage}
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ImageSlider;

// <div>
//             {/* display the current image by going in the array of images */}
//              <button onClick={prevImage}>
//                 <i className="fa-solid fa-arrow-left"></i>
//             </button>
//             <button onClick={nextImage}>
//                 <i className="fa-solid fa-arrow-right"></i>
//             </button>
//             <img src={images[currentIndex]} alt="car wrap" />
//         </div>
