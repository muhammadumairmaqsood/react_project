import "./navbar.css";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} className="" />
          <a href="">
            Hacker <span>Jutt</span>
          </a>
        </div>
        <ul className="menu">
          <li>
            <a href="">Home</a>
          </li>
          <li className="submenu">
            <a href="">Products</a>
            <ul className="submenu-item">
              <li>
                <a href="">Fashion</a>
              </li>
              <li>
                <a href="">Kitchen</a>
              </li>
              <li>
                <a href="">Electronics</a>
              </li>
              <li>
                <a href="">Beauty & Personal Care</a>
              </li>
              <li>
                <a href="">Grocery</a>
              </li>
              <li>
                <a href="">Kids</a>
              </li>
              <li>
                <a href="">Sports & Fitness</a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="">Services</a>
            <ul className="submenu-item">
              <li>
                <a href="">Web Development</a>
              </li>
              <li>
                <a href="">UI/UX Designe</a>
              </li>
              <li>
                <a href="">Grapic Designe</a>
              </li>
              <li>
                <a href="">App Development</a>
              </li>
              <li>
                <a href="">Software Developemnt</a>
              </li>
              <li>
                <a href="">Marketing</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Blogs</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
        </ul>
        {/* Mobile Menu Start */}
        <div className="mobile-menu">
          <i className="bi bi-list"></i>
        </div>
        {/* Mobile Menu End */}
      </nav>
    </header>
  );
};

export default Header;
