import styles from "../../styles/Home.module.scss";
import { HiMenuAlt4 } from "react-icons/hi";
import { useState } from "react";
import MenuBody from "../../components/MenuBody/MenuBody";
import { MdClose } from "react-icons/md";
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [previousmenuStage, setPreviousmenuStage] = useState(false);
  const menuOnClick = () => {
    console.log("click");
    setPreviousmenuStage(menuOpen);
    setMenuOpen(!menuOpen);
  };
  const reset = () => {
    setPreviousmenuStage(false);
    setMenuOpen(false);
  };
  return (
    <header className={styles.myheader}>
      <div
        className={`is-flex p-4 pb-5 is-justify-content-center is-align-items-center	${
          menuOpen
            ? styles.headerbgBlack
            : previousmenuStage
            ? styles.headerbgWhite
            : ""
        }`}
      >
        <div
          onClick={menuOnClick}
          className="has-text-weight-bold pl-3 is-flex is-align-items-center is-justify-content-center"
        >
          {menuOpen ? <MdClose color="white"  /> : <HiMenuAlt4  />}

          <p
            className={`ml-2 has-text-weight-bold is-size-6 is-uppercase   ${
              styles.headerMenu
            } ${
              menuOpen
                ? "has-text-white"
                : previousmenuStage
                ? "has-text-black"
                : ""
            }`}
          >
            Menu
          </p>
        </div>
        <div
          className={`is-flex is-flex-direction-row  ml-auto mr-auto is-align-items-center is-justify-content-center ${styles.headerLogo}	`}
        >
          <h2
            className={`is-family-primary is-size-4 has-text-weight-bold has-text-centered ${
              menuOpen
                ? "has-text-white"
                : previousmenuStage
                ? "has-text-black"
                : ""
            }`}
          >
            REAL Rodies
          </h2>
          <div
            className={`has-text-grey pl-2 has-text-centered ${
              menuOpen
                ? "has-text-white"
                : previousmenuStage
                ? "has-text-grey"
                : ""
            }`}
          >
            <p>TRAVEL</p>
            <p>AGENCY</p>
          </div>
        </div>
      </div>
      <div
        className={`${styles.menuBody} ${
          menuOpen
            ? styles.menuBodyActive
            : previousmenuStage
            ? styles.menuBodyDeactivate
            : ""
        }`}
      >
        <MenuBody
          onClickedLink={() => {
            reset();
          }}
        />
      </div>
    </header>
  );
}

export default Header;
