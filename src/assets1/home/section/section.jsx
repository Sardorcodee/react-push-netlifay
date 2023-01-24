import Img1 from "../../../images/showcase.png";
import Img2 from "../../../images/icons/Airbnb.svg";
import Img3 from "../../../images/icons/Google.svg";
import Img4 from "../../../images/icons/Slack.svg";
import Img6 from "../../../images/icons/Netflix.svg";
import Img5 from "../../../images/icons/Amazon.svg";
function Sec(){
    return (
      <>
        <section id="showcase">
          <div className="container flex">
            <div className="portion" data-aos="fade-right">
              <h1>Recruit top talented freelancer for your business</h1>
              <p>
                Connect you to thoudsands of talented freelancer from any
                industry. You can have the best people in just few simple steps.
              </p>
              <a href="#" className="main-btn">
                get started
              </a>
            </div>
            <div className="portion" data-aos="fade-left" data-aos-delay="400">
              <img src={Img1} alt="Showcase" />
            </div>
          </div>
        </section>
        <section id="partners">
          <div className="container flex">
            <img src={Img2} alt="Partner" />
            <img src={Img3} alt="Partner" />
            <img src={Img4} alt="Partner" />
            <img src={Img6} alt="Partner" />
            <img src={Img5} alt="Partner" />
          </div>
        </section>
      </>
    );
}
export default Sec