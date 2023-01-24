import Logo from "../../images/icons/Logo-footer.svg";
import Logo1 from "../../images/icons/instagram.svg";
import Logo2 from "../../images/icons/dribble.svg";
import Logo3 from "../../images/icons/twitter.svg";
import Logo4 from "../../images/icons/youtube.svg";
import Logo5 from "../../images/icons/send.svg";


function footer(){
    return (
      <footer id="the-end">
        <div className="container flex">
          <div className="athird">
            <div className="logo" data-aos="fade-right">
              <img src={Logo} alt="LOGO" />
              wakanda
            </div>

            <nav className="socials">
              <ul className="flex" data-aos="flip-right">
                <li>
                  <a href="#">
                    <img src={Logo1} alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo2} alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo3} alt="social link" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={Logo4} alt="social link" />
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
                  <img src={Logo5} alt="Submit" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    );
    
}

export default footer