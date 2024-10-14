function Banner() {
  return (
    <>
      <div className="banner">
        <div className="d-flex flex-column h-100 container">
          <div className="my-auto">
            <h1>Kimetsu No Yaiba</h1>
            <p className="gap-3 d-flex align-items-center">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-1"
                >
                  <g clip-path="url(#clip0_2_251)">
                    <path
                      d="M10.5 15.9775L4.32867 19.432L5.7068 12.495L0.513672 7.693L7.5373 6.86L10.5 0.4375L13.4628 6.86L20.4864 7.693L15.2933 12.495L16.6714 19.432L10.5 15.9775Z"
                      fill="#FBC94A"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_251">
                      <rect width="21" height="21" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                5.0
              </span>
              Category: Adventure fiction, Dark fantasy, Martial Arts
            </p>
            <h5 className="mb-4">
              Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written
              and illustrated by Koyoharu Gotouge. It follows teenage Tanjiro
              Kamado, who strives to become a demon slayer after his family was
              slaughtered and his younger sister Nezuko turned into a demon.
            </h5>
            <button className="watch-now btn btn-outline-light me-3">
              <svg
                width="15"
                height="19"
                viewBox="0 0 15 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="me-2"
              >
                <path
                  d="M14.4125 10.0027L1.60538 18.5408C1.5144 18.6013 1.4087 18.636 1.29954 18.6412C1.19038 18.6465 1.08185 18.622 0.985503 18.5704C0.889158 18.5188 0.808608 18.4421 0.752433 18.3483C0.696257 18.2546 0.66656 18.1474 0.666504 18.0381V0.961918C0.66656 0.852633 0.696257 0.745411 0.752433 0.65167C0.808608 0.557929 0.889158 0.48118 0.985503 0.429598C1.08185 0.378015 1.19038 0.353531 1.29954 0.358753C1.4087 0.363975 1.5144 0.398708 1.60538 0.459251L14.4125 8.99733C14.4952 9.05251 14.5631 9.12726 14.61 9.21494C14.6569 9.30263 14.6815 9.40055 14.6815 9.5C14.6815 9.59945 14.6569 9.69737 14.61 9.78506C14.5631 9.87274 14.4952 9.94749 14.4125 10.0027Z"
                  fill="white"
                />
              </svg>
              Watch Now!
            </button>
            <button className="heart btn btn-outline-light">
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_261)">
                  <path
                    d="M13.5011 5.09513C16.1438 2.7225 20.2275 2.80125 22.7734 5.35163C25.3181 7.90313 25.4059 11.9666 23.0389 14.6171L13.4989 24.1706L3.96113 14.6171C1.59413 11.9666 1.68301 7.89638 4.22663 5.35163C6.77476 2.80463 10.8506 2.71913 13.5011 5.09513Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_261">
                    <rect width="27" height="27" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="mb-5 d-flex justify-content-between align-items-center">
            <div className="my-auto d-flex gap-4">
              <a href="#">Overview</a>
              <a href="#">Episode</a>
              <a href="#">Details</a>
            </div>
            <div className="d-flex flex-row gap-1">
              <hr className="hr-1" />
              <hr className="hr-2" />
              <hr className="hr-2" />
              <hr className="hr-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
