import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import styles from "./NavMenu.module.css";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { RiSearchLine } from "react-icons/ri";

function NavMenu() {
  const [toggleAboutSubMenu, setToggleAboutSubMenu] = useState(false);
  const [toggleStudentSubMenu, setToggleStudentSubMenu] = useState(false);
  const [toggleMediaSubMenu, setToggleMediaSubMenu] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.navMenu}>
      <div className={styles.navToggleBtn}>
        <div
          className={styles.menuBurger}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          {toggleMenu ? <AiOutlineClose /> : <AiOutlineMenuUnfold />}
        </div>
        <div className={styles.searchIcon}>
          <RiSearchLine />
        </div>
      </div>
      <ul
        className={[
          styles.navList,
          toggleMenu ? styles.navList : styles.navListHide,
        ].join(" ")}
      >
        <li>
          <a href="#" className={styles.navLink}>
            Home
          </a>
        </li>
        <li className="dropDownItem">
          <div
            className={styles.navLink}
            onClick={() => {
              setToggleAboutSubMenu(!toggleAboutSubMenu);
              setToggleMediaSubMenu(false);
              setToggleStudentSubMenu(false);
            }}
          >
            About us <GoChevronDown />
          </div>
          {toggleAboutSubMenu && (
            <ul className={styles.dropDownMenu}>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Governance
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Vision, Mission & Core Values
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Awards & Achievements
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Customer Service Delivery Charter
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Jobs
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Contacts
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Academics
          </a>
        </li>
        <li className="dropDownItem">
          <div
            className={styles.navLink}
            onClick={() => {
              setToggleStudentSubMenu(!toggleStudentSubMenu);
              setToggleAboutSubMenu(false);
              setToggleMediaSubMenu(false);
            }}
          >
            Student Life <GoChevronDown />
          </div>
          {toggleStudentSubMenu && (
            <ul className={styles.dropDownMenu}>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Student Council
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Health & Wellness
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Games & Sports
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Accomodation
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Clubs & Societies
                </a>
              </li>
            </ul>
          )}
        </li>
        <li className="dropDownItem">
          <div
            className={styles.navLink}
            onClick={() => {
              setToggleMediaSubMenu(!toggleMediaSubMenu);
              setToggleAboutSubMenu(false);
              setToggleStudentSubMenu(false);
            }}
          >
            Media Desk <GoChevronDown />
          </div>
          {toggleMediaSubMenu && (
            <ul className={styles.dropDownMenu}>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className={styles.dropDownLink}>
                  Media Releases
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#" className={styles.navLink}>
            Downloads
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
