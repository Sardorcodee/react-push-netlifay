function Header(){
    return (
      <header id="main-header" data-aos="fade-down">
        <div className="container flex">
          <div className="logo">
            <img src="src/images/icons/Logo.svg" alt="LOGO" />
            wakand
          </div>
          <div className="sm-menu">
            <a href="#smmenu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>

          <nav className="main-nav" id="smmenu">
            <ul className="flex">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">How it works</a>
              </li>
              <li>
                <a href="#">For freelancers</a>
              </li>
              <li>
                <a href="#" className="main-btn">
                  get started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
}
export default Header