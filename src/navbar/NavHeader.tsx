import styles from "./NavHeader.module.css";

function NavHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNavContainer}>
        <div className={styles.logoCompanyName}>
          <div className={styles.logoContainer}>
            <img
              src="src\assets\gok.png"
              alt="logrl logo"
              className={styles.logo}
            />
          </div>
          <div className={styles.companyName}>
            <h6>
              <b>NYAMBARIA SCHOOL</b>
            </h6>
          </div>
        </div>
        <div className={styles.contactInfo}>
          <img className={styles.support} src="src\assets\support.png" />
          <p className={styles.contactText}>
            Need Help? call us
            <br />
            <span className={styles.phoneNo}> 0798248825 || 0798348825</span>
          </p>
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
