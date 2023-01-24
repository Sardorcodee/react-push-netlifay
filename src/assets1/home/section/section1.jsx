import Img1 from "../../../images/icons/award.svg";
import Img2 from "../../../images/icons/verified_user.svg";
function sec1(){
    return (
      <section id="feature">
        <div className="container">
          <h5 data-aos="zoom-in">feature</h5>
          <h2 data-aos="zoom-in">The benefit of using our platform</h2>
          <div className="flex">
            <article className="feature" data-aos="flip-up">
              <span className="icon-wraper">
                <img src={Img1} alt="Feature icons" className="icon" />
              </span>
              <h3>Professional & Fast</h3>
              <p>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </article>
            <article className="feature" data-aos="flip-up">
              <span className="icon-wraper">
                <img
                  src="src/images/icons/headphones.svg"
                  alt="Feature icons"
                  className="icon"
                />
              </span>
              <h3>Professional & Fast</h3>
              <p>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </article>
            <article className="feature" data-aos="flip-up">
              <span className="icon-wraper">
                <img src={Img2} alt="Feature icons" className="icon" />
              </span>
              <h3>Professional & Fast</h3>
              <p>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </article>
          </div>
        </div>
      </section>
    );
}
export default sec1