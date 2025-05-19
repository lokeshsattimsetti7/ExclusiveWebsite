import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.UpperBar}>
        <div className={styles.MainTxt}>
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link to="/shop" className={styles.shopLink}>
            Shop Now
          </Link>
        </div>
        <div className={styles.lang}>
          <p>English</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>

      <div className={styles.LowerBar}>
        <h1>Exclusive</h1>

        <ul className={styles.NavLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>

        <div className={styles.SearchBar}>
          <input
            type="text"
            placeholder="What are you looking for?"
            className={styles.searchBox}
          />
          <i
            className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}
          ></i>
        </div>

        <div className={styles.Icons}>
          <ul>
            <li>
              <Link to="/Cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
            <li>
              <Link to="/Whishlist">
                <i className="fa-regular fa-heart"></i>
              </Link>
            </li>
            <li>
              <Link to="/Account">
                <i className="fa-solid fa-user"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
