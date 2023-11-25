import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div style={{ backgroundColor: "#E1C200", margin: 0, width: "100vw" }} className="announcement-bar">
        <a className="banner" href="https://www.tiktok.com/@bravaland.com" target="_blank">VISIT US ON TIKTOK @BRAVALAND.COM</a>
      </div>

      <div id="row" className="row">
        <div className="left-nav">
          <div>
            <nav>
              <ul className="shopping">
                <li className="nav-item"><a href="#">brands</a>
                  <div className="dropdown" style={{ position: "absolute" }}>
                    <a href="#">all brands</a>
                    <a href="#">hofsy</a>
                    <a href="#">jetsun</a>
                    <a href="#">danketsu</a>
                    <a href="#">future fest</a>
                    <a href="#">pendulum</a>
                  </div>
                </li>
                <li className="nav-item"><a href="#">shop</a>
                  <div className="dropdown" style={{ left: 0, position: "absolute" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "100vw" }}>
                      <div style={{ padding: "20px", marginLeft: "50px" }}>
                        <div>
                          <h3 style={{ color: "white" }}>apparel</h3>
                        </div>
                        <a href="#">all brands</a>
                        <a href="#">hofsy</a>
                        <a href="#">jetsun</a>
                        <a href="#">danketsu</a>
                      </div>
                      <div style={{ padding: "20px", marginRight: "50px" }}>
                        <div>
                          <h3 style={{ color: "white" }}>home</h3>
                          <a href="#">future fest</a>
                          <a href="#">pendulum</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li><a href="#">premium</a></li>
                <li><a href="#">gift cards</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="center-logo">
          <a><img src="//bravaland.com/cdn/shop/files/Artboard_1.png?v=1678787853" className="logoimage" alt="brava logo"
            width="70" /></a>
        </div>
        <div className="right-nav">
          <div>
            <nav>
              <ul className="icons">
                <li><a href="#">become an affiliate</a></li>
                <li><a href="https://twitter.com/mybravaland" title="Twitter" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512">
                    <path
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                  </svg>
                </a></li>
                <li><a href="https://tiktok.com/@bravaland.com" title="Tiktok" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512">
                    <path
                      d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                  </svg>
                </a></li>
                <li><a href="https://www.instagram.com/bravamarketplace" title="Instagram" target="_blank" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512">
                    <path
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                </a></li>
                <li><a href="/account/login" title="My Account">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 448 512">
                    <path
                      d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </a></li>
                <li><a href="/search" title="Search">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 512 512">
                    <path
                      d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                  </svg>
                </a></li>
                <li><a href="/cart" id="cart-drawer-toggle">
                  <div>

                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                      viewBox="0 0 576 512">
                      <path
                        d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    <span className="thb-item-count">(0)
                    </span>
                  </div>
                </a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="5000">
        <div className="carousel-inner" style={{ width: "100vw" }}>
          <div className="carousel-item active">
            <img className="d-block w-100" src="/images/image1.png" alt="First slide" />
            <div className="carousel-caption">
              <div>
                <h3>Premium Hoodies hoodies</h3>
              </div>
              <div style={{ paddingTop: "20px", transform: "translate(0px, 100%)" }}><a className="buybtn" href="/collections/heritage-tees" role="button" title="shop now">
                <span>shop now</span>
              </a></div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image2.png" alt="Second slide" />
            <div className="carousel-caption">
              <div>
                <h3>Premium Zip hoodies</h3>
              </div>
              <div style={{ paddingTop: "20px" }}><a className="buybtn" href="/collections/heritage-tees" role="button" title="shop now"
                style={{ transform: "translate(0px, 100%)" }}>
                <span>shop now</span>
              </a></div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image3.png" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image4.png" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="/images/image5.png" alt="Fifth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      <div className="semislideshow-container">
        <div className="semislides">
          <div className="semislide">
            <div style={{ backgroundColor: "skyblue" }} className="semislide-box">
              <div className="semislide-icon"><img className="semi-img" src="/images/captain-america.png" /></div>
              <div className="semislide-text">
                <div className="semislide-textname">
                  <h3>CapAmerica</h3>
                </div>
                <div className="semislide-shopnow">shop now</div>
              </div>
            </div>
          </div>
          <div className="semislide">
            <div style={{ backgroundColor: "lightcoral" }} className="semislide-box">
              <div className="semislide-icon"><img className="semi-img" src="/images/iron-man2.png" /></div>
              <div className="semislide-text">
                <div className="semislide-textname">
                  <h3>IronMan</h3>
                </div>
                <div className="semislide-shopnow">shop now</div>
              </div>
            </div>
          </div>
          <div className="semislide">
            <div style={{ backgroundColor: "lightgreen" }} className="semislide-box">
              <div className="semislide-icon"><img className="semi-img" src="/images/hulk.png" /></div>
              <div className="semislide-text">
                <div className="semislide-textname">
                  <h3>AngryHulk</h3>
                </div>
                <div className="semislide-shopnow">shop now</div>
              </div>
            </div>
          </div>
          <div className="semislide">
            <div style={{ backgroundColor: "gold" }} className="semislide-box">
              <div className="semislide-icon"><img className="semi-img" src="/images/thor.png" /></div>
              <div className="semislide-text">
                <div className="semislide-textname">
                  <h3>ThunderThor</h3>
                </div>
                <div className="semislide-shopnow">shop now</div>
              </div>
            </div>
          </div>
          <div className="semislide">
            <div style={{ backgroundColor: "palevioletred" }} className="semislide-box">
              <div className="semislide-icon"><img className="semi-img" src="/images/iron-man.png" /></div>
              <div className="semislide-text">
                <div className="semislide-textname">
                  <h3>FlyIronMan</h3>
                </div>
                <div className="semislide-shopnow">shop now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
