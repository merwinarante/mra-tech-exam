import { useState } from "react";

function Trending() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="trending-bg">
        <div className="trending container">
          <h1 className="py-4">
            Trending <span>this week</span>
          </h1>
          <div className="carousel">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active d-flex gap-3 justify-content-around align-items-center">
                  <div
                    className="trending-card-1 trending-card"
                    onClick={handleOpenModal}
                  >
                    <div className="trending-text d-flex align-items-end justify-content-around h-100">
                      <div className="trending-title">
                        <h3>Attack on Titan</h3>
                        <p>
                          Category: Adventure fiction, Dark fantasy, Martial
                          Arts
                        </p>
                      </div>
                      <div className="trending-rate pb-3 d-flex align-items-center">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z"
                            fill="#FBC94A"
                          />
                        </svg>
                        5.00
                      </div>
                    </div>
                  </div>
                  <div className="trending-card-2 trending-card">
                    <div className="trending-text d-flex align-items-end justify-content-around h-100">
                      <div className="trending-title">
                        <h3>Jujutsu Kaisen</h3>
                        <p>Category: Adventure fiction, Martial Arts</p>
                      </div>
                      <div className="trending-rate pb-3 d-flex align-items-center">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z"
                            fill="#FBC94A"
                          />
                        </svg>
                        5.00
                      </div>
                    </div>
                  </div>
                  <div className="trending-card-3 trending-card">
                    <div className="trending-text d-flex align-items-end justify-content-around h-100">
                      <div className="trending-title">
                        <h3>One Piece</h3>
                        <p>Category: Adventure fiction, Comedy, Family</p>
                      </div>
                      <div className="trending-rate pb-3 d-flex align-items-center">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z"
                            fill="#FBC94A"
                          />
                        </svg>
                        5.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item"></div>
                <div className="carousel-item"></div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <h1 className="py-4">Throwback Anime!</h1>
          <div className="throwback d-flex pb-5 justify-content-between">
            <div className="photo-card throwback-card-1"></div>
            <div className="photo-card throwback-card-2"></div>
            <div className="photo-card throwback-card-3"></div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="modal show d-block" tabIndex="-1">
              <div className="modal-dialog modal-xl modal-dialog-centered">
                {" "}
                <div className="modal-content bg-dark">
                  <div className="modal-header">
                    <h5 className="modal-title text-light">Attack on Titan</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleCloseModal}
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body text-light row">
                    <div className="left col-lg-5 col-md-5 col-sm-12 col-xs-12 d-flex flex-column align-items-center">
                      <div className="modal-card-1">
                        <div className="trending-text d-flex align-items-end justify-content-around h-100">
                          <div className="trending-title">
                            <h3>Attack on Titan</h3>
                            <p>
                              Category: Adventure fiction, Dark fantasy, Martial
                              Arts
                            </p>
                          </div>
                          <div className="trending-rate pb-3 d-flex align-items-center">
                            <svg
                              width="21"
                              height="20"
                              viewBox="0 0 21 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z"
                                fill="#FBC94A"
                              />
                            </svg>
                            5.00
                          </div>
                        </div>
                      </div>
                      <div>
                        <p className="ps-2 py-3 modal-synopsis">
                          When man-eating Titans first appeared 100 years ago,
                          humans found safety behind massive walls that stopped
                          the giants in their tracks. But the safety they have
                          had for so long is threatened when a colossal Titan
                          smashes through the barriers, causing a flood of the
                          giants into what had been the human…
                        </p>
                      </div>
                    </div>
                    <div className="right col-lg-7 col-md-7 col-sm-12 col-xs-12 d-flex flex-column">
                      <div className="d-flex justify-content-between">
                        <h2>Episodes</h2>
                        <h2>Season 1</h2>
                      </div>
                      <div className="episodes d-flex flex-column gap-3">
                        <div className="d-flex align-items-center gap-3">
                          <img src="./src/assets/image/episode-1.png" alt="" />
                          <div>
                            <h2>Episode 1</h2>
                            <p>
                              The citizens worry they will be at the Titans'
                              mercy after many years of peace.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <img src="./src/assets/image/episode-2.png" alt="" />
                          <div>
                            <h2>Episode 2</h2>
                            <p>
                              The Shiganshina citizens are under attack from the
                              Titans.
                            </p>
                          </div>
                        </div>
                        <div className="d-flex gap-3 align-items-center">
                          <img src="./src/assets/image/episode-3.png" alt="" />
                          <div>
                            <h2>Episode 3</h2>
                            <p>
                              Eren butt heads with Jean Kirschtein, a cadet who
                              wants to be in the Military Police Regiment.
                              Berholt and Reiner help Eren learn during
                              training.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Trending;
