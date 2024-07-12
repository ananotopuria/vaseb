import { Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import { useRef } from 'react';

const Navigation = () => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const handleLinkClick = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <>
      <nav>
        <div className="navigation hidden">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
            ref={checkboxRef}
          />
          <label
            htmlFor="navi-toggle"
            className="navigation__button flex flex-col"
          >
            <span className="navigation__icon">&nbsp;</span>
          </label>
          <div className="navigation__background">&nbsp;</div>
          <nav className="navigation__nav">
            <ul className="navigation__list">
              <li className="navigation__item">
                <Link
                  to="/starter_project/aboutus"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  About Us
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/starter_project/categories"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Categories
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  to="/starter_project/shop"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/starter_project/blogs"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/starter_project/reviews"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  to="/starter_project/faqs"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  to="/starter_project/contact"
                  className="navigation__link"
                  onClick={handleLinkClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      <nav className="header__nav">
        <ul className="flex gap-5 header__nav-list">
          <li>
            <Link to="/starter_project/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/starter_project/categories">Categories</Link>
          </li>
          <li>
            <Link to="/starter_project/shop">Shop</Link>
          </li>
          <li className="dropdown">
            <a href="#" className="flex flex-row gap-2">
              Pages
              <IoIosArrowDown className="mt-1" />
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link to="/starter_project/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/starter_project/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/starter_project/faqs">FAQs</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/starter_project/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
