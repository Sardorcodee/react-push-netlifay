


function footer(){
    return (
      <footer id="the-end">
        <div className="container flex">
          <div className="athird">
            <div className="logo" data-aos="fade-right">
              <img src="src/images/icons/Logo-footer.svg" alt="LOGO" />
              wakanda
            </div>

            <nav className="socials">
              <ul className="flex" data-aos="flip-right">
                <li>
                  <a href="#">
                    <img src="src/images/icons/instagram.svg" alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="src/images/icons/dribble.svg" alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="src/images/icons/twitter.svg" alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="src/images/icons/youtube.svg" alt="social link" />
                  </a>
                </li>
              </ul>
            </nav>
            <p>Copyright © 2022 Wakanda. All rights reserved</p>
          </div>
          <div className="portion " data-aos="flip-right">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
            </ul>
          </div>
          <div className="portion" data-aos="flip-right">
            <h2>Company</h2>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
            </ul>
          </div>
          <div className="aquater">
            <h2>Subscribe to our newsletter</h2>
            <form action="/newsletter">
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Your email address"
                  name="email"
                />
                <button type="submit">
                  <img src="src/images/icons/send.svg" alt="Submit" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    )
    
}

export default footer