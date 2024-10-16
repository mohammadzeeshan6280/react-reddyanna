import { NavLink,useLocation  } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../ModuleCss/BottomHeader.module.css";

function BottomHeader() {
    const [isHomeActive, setIsHomeActive] = useState(true);
    const location = useLocation();
  
    useEffect(() => {
      // Set isHomeActive to false if not on home page
      if (location.pathname !== "/") {
        setIsHomeActive(false);
      }
    }, [location.pathname]);



  return (
    <>
      <div className={styles.bottom_header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className={styles.MainHeader}>
                <ul className="m-0">
                  <li >
                    <NavLink to="/home" className={({ isActive }) =>
                      isHomeActive || isActive ? styles.active : ""
                    }
                    onClick={() => setIsHomeActive(false)}>
                    
                      <img src="/menu-home.png" alt="" />
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/in-play" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/menu-inplay.png" alt="" />
                      In-Play
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cricket" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/cricket.png" alt="" />
                      Cricket
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/tennis" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/tennis.png" alt="" />
                      Tennis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/football" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/fatbool.png" alt="" />
                      Football
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/politics" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/politics.png" alt="" />
                      Politics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/horse" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/horse.png" alt="" />
                      Horse Racing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/racing" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/racing.png" alt="" />
                      Greyhound Racing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/kabaddi" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/kabaddi.png" alt="" />
                      Kabaddi
                    </NavLink>
                  </li>
                  <li className={styles["nmm-active"]}>
                    <NavLink to="/casino">
                      <img src="/casino.png" alt="" />
                      Casino
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sport" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/sport.png" alt="" />
                      Sport Book
                    </NavLink>
                  </li>
                  <li className={styles["nmm-active"]}>
                    <NavLink to="/int-casino">
                      <img src="/int-casino.png" alt="" />
                      Int Casino
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/binary" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/binary.png" alt="" />
                      Binary
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/arts" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/arts.png" alt="" />
                      Mixed Martial Arts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/volleyball" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/volleybol.png" alt="" />
                      VolleyBall
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/ice-hockey" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/hockey.png" alt="" />
                      Ice Hockey
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/basketball" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/basket.png" alt="" />
                      BasketBall
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/baseball" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/baseball.png" alt="" />
                      BaseBall
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="darts" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/darts.png" alt="" />
                      Darts
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="futsal" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/putsal.png" alt="" />
                      Futsal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/table-tennis" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/table-tennis.png" alt="" />
                      Table Tennis
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rugby" className={({ isActive }) => (isActive ? styles.active : "")}>
                      <img src="/rugby.png" alt="" />
                      Rugby
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomHeader;
