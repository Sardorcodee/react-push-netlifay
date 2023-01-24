import Img1 from "../../../images/window.png";
function sec2(){
    return (
      <section id="steps">
        <div className="container flex">
          <div className="portion">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src={Img1}
              alt="Window"
            />
          </div>
          <div className="portion">
            <h2>Wakanda is an easy platform to find talent</h2>
            <ol>
              <li>
                <span className="counter">1</span>Lorem ipsum dolor sit amet.
              </li>
              <li>
                <span className="counter">2</span>Atque ipsa a non aspernatur.
              </li>
              <li>
                <span className="counter">3</span>Voluptas quidem porro a omnis.
              </li>
              <li>
                <span className="counter">4</span>Porro tenetur dolorem
                architecto inventore?
              </li>
              <li>
                <span className="counter">5</span>Laborum voluptatibus
                cupiditate fugiat fugit?
              </li>
            </ol>
          </div>
        </div>
      </section>
    );
}
export default sec2