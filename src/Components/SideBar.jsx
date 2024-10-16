// import styles from "../ModuleCss/SideBar.module.css";
// import "../App.css";
// import { NavLink } from "react-router-dom";
// import CricketNavigation from "./Navigation/CricketNavigation";
// import { useState } from "react";
// import TennisNavigation from "./Navigation/TennisNavigation";
// import FootballNavigation from "./Navigation/FootballNavigation";
// import PoliticsNavigation from "./Navigation/PoliticsNavigation";

// // eslint-disable-next-line react/prop-types
// const SideBar = ({ sidebarVisible }) => {
//   const [isCricketNavOpen, setIsCricketNavOpen] = useState(false);
//   const [isTennisNavOpen, setIsTennisNavOpen] = useState(false);
//   const [isFootballNavOpen, setIsFootballNavOpen] = useState(false);
//   const [isPoliticsNavOpen, setIsPoliticsNavOpen] = useState(false);

//   const toggleCricketNav = () => {
//     setIsCricketNavOpen(!isCricketNavOpen);
//   };
//   const toggleTennisNav = () => {
//     setIsTennisNavOpen(!isTennisNavOpen);
//   };
//   const toggleFootballNav = () => {
//     setIsFootballNavOpen(!isFootballNavOpen);
//   };
//   const togglePoliticsNav = () => {
//     setIsPoliticsNavOpen(!isPoliticsNavOpen);
//   };
//   return (
//     <>
//       <div className={styles.app_sidebar_wrap}>
//         <aside
//           className={`${styles.app_sidebar} ${sidebarVisible ? "show" : ""}`}
//         >
//           <ul className={`${styles.sidebar_nav} sidebar-nav`} id="sidebar_nav">
//             <img src="/mobilelogo.png" alt="" className={styles.mobile_logo} />

//             <li className={styles.nav_item}>{/*  */}</li>

//             {/* <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/cricket.png" alt="" />
//                 <span>Cricket</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//               <CricketNavigation />
//             </li> */}

//             <li className={`${styles.nav_item} nav_item`}>
//               <div onClick={toggleCricketNav} className={styles.nav_link}>
//                 <img src="/cricket.png" alt="Cricket Icon" className={styles.nav_icon} />
//                 <span>Cricket</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto arrow ${isCricketNavOpen ? "rotate-180" : ""}`}
//                 ></i>
//               </div>

//               {/* Conditionally render CricketNavigation based on the state */}
//               {isCricketNavOpen && <CricketNavigation />}
//             </li>
//             {/*TENNIS */}
//             <li className={styles.nav_item}>
//               <NavLink onClick={toggleTennisNav} className={styles.nav_link}>
//                 <img src="/tennis.png" alt="" className={styles.nav_icon} />
//                 <span>tennis</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto arrow ${isTennisNavOpen ? "rotate-180" : ""}`}
//                 ></i>
//               </NavLink>
//               {isTennisNavOpen && <TennisNavigation />}
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink onClick={toggleFootballNav} className={styles.nav_link}>
//                 <img src="/fatbool.png" alt="" className={styles.nav_icon} />
//                 <span>football</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto arrow ${isFootballNavOpen ? "rotate-180" : ""}`}
//                 ></i>
//               </NavLink>
//               {isFootballNavOpen && <FootballNavigation />}
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink onClick={togglePoliticsNav} className={styles.nav_link}>
//                 <img src="/politics.png" alt="" className={styles.nav_icon} />
//                 <span>politics</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto arrow ${isPoliticsNavOpen ? "rotate-180" : ""}`}
//                 ></i>
//               </NavLink>
//               {isPoliticsNavOpen && <PoliticsNavigation />}
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/horse.png" alt="" className={styles.nav_icon} />
//                 <span>horse racing</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/racing.png" alt="" className={styles.nav_icon} />
//                 <span>greyhound racing</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/kabaddi.png" alt="" className={styles.nav_icon} />
//                 <span>kabaddi</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/casino.png" alt="casino" className={styles.nav_icon} />
//                 <span>casino</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/sport.png" alt="" className={styles.nav_icon} />
//                 <span>sports book</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/int-casino.png" alt="" className={styles.nav_icon} />
//                 <span>int casino</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/binary.png" alt="" className={styles.nav_icon} />
//                 <span>binary</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/arts.png" alt="" className={styles.nav_icon} />
//                 <span>mixed martial arts</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/volleybol.png" alt="" className={styles.nav_icon} />
//                 <span>volleyball</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/hockey.png" alt="" className={styles.nav_icon} />
//                 <span>ice hockey</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/basket.png" alt="" className={styles.nav_icon} />
//                 <span>basketball</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/darts.png" alt="" className={styles.nav_icon} />
//                 <span>darts</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/putsal.png" alt="" className={styles.nav_icon} />
//                 <span>Futsal</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/table-tennis.png" alt="" className={styles.nav_icon} />
//                 <span>table tennis</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/rugby.png" alt="" className={styles.nav_icon} />
//                 <span>rugby</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>

//             <li className={styles.nav_item}>
//               <NavLink to="" className={styles.nav_link}>
//                 <img src="/menu-rules.png" alt="" className={styles.nav_icon} />
//                 <span>rules</span>
//                 <i
//                   className={`${styles.angle_down} bi bi-caret-down ms-auto`}
//                 ></i>
//               </NavLink>
//             </li>
//           </ul>
//         </aside>
//       </div>
//     </>
//   );
// };

// export default SideBar;





import styles from "../ModuleCss/SideBar.module.css";
import "../App.css";
import { useState } from "react";
import { navItems } from "./customData";
import SideBarSlider from "./SideBarSlider";


// eslint-disable-next-line react/prop-types
const SideBar = ({ sidebarVisible }) => {

  const [openNav, setOpenNav] = useState({});

  const toggleNav = (category) => {
    setOpenNav((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <>
      <div className={styles.app_sidebar_wrap}>
        <aside className={`${styles.app_sidebar} ${sidebarVisible ? "show" : ""}`}>
          <ul className={`${styles.sidebar_nav} sidebar-nav`} id="sidebar_nav">
            <img src="/mobilelogo.png" alt="" className={styles.mobile_logo} />

            {navItems.map((item) => {
              const hasSubNav = item.component;
              const IconPath = item.icon;

              return (
                <li className={styles.nav_item} key={item.id}>
                  <div
                    onClick={() => hasSubNav && toggleNav(item.id)}
                    className={styles.nav_link}
                  >
                    <img src={IconPath} alt={`${item.label} Icon`} className={styles.nav_icon} />
                    <span>{item.label}</span>
                    {hasSubNav && (
                      <i
                        className={`${styles.angle_down} bi bi-caret-down ms-auto arrow ${openNav[item.id] ? "rotate-180" : ""
                          }`}
                      ></i>
                    )}
                  </div>
                  {hasSubNav && openNav[item.id] && <item.component />}
                </li>
              );
            })}
          <li>  <SideBarSlider/></li>
         
          </ul>
        </aside>
      </div>
        
    </>
  );
};
export default SideBar;















