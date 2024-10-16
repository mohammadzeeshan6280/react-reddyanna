// import { NavLink } from "react-router-dom";
// import styles from "../ModuleCss/page.module.css";

// const BetTableRow = () => {
//   return (
//     <>
//       <div className={styles.bet_table_row}>
//         <div className="row">
//           <div className="col-md-6">
//             <div className={styles.game_box}>
//               <div className={styles.game_left_col}>
//                 <div className={styles.game_name}>
//                   <NavLink to="">
//                     <p className={`${styles.team_name} ${styles.text_left}`}>
//                       Caribbean Premier League
//                     </p>
//                     <p
//                       className={`${styles.team_name} ${styles.text_left} ${styles.team_event}`}
//                     >
//                       (Caribbean Premier League)
//                     </p>
//                   </NavLink>
//                 </div>
//                 <div className={`${styles.inplay} ${styles.game_date}`}>
//                   <span>Live</span>
//                 </div>

//                 <div className={styles.game_date}>
//                   <p className={`mb-0 ${styles.day} ${styles.text_left}`}>
//                     29 Aug
//                   </p>
//                   <p className={`mb-0 ${styles.day} ${styles.text_left}`}>
//                     04:30 AM
//                   </p>
//                 </div>
//               </div>
//               <div className={styles.game_icons}>
//                 <div className={styles.icon_tv}>
//                   <span className={styles.game_bm}>BM</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-6 text-center">
//             <div className="row g-0">
//               {/* Column 1 */}
//               <div className="col-md-4 col-4">
//                 <div className={styles.h_backLay}>
//                   <div className={`${styles.back} ${styles.bl_box}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                   <div className={`${styles.bl_box} ${styles.lay}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* Column 2 */}
//               <div className="col-md-4 col-4">
//                 <div className={styles.h_backLay}>
//                   <div className={`${styles.back} ${styles.bl_box}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                   <div className={`${styles.bl_box} ${styles.lay}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* Column 3 */}
//               <div className="col-md-4 col-4">
//                 <div className={styles.h_backLay}>
//                   <div className={`${styles.back} ${styles.bl_box}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                   <div className={`${styles.bl_box} ${styles.lay}`}>
//                     <span className="d-block bet-button-price">
//                       -<em>-</em>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BetTableRow;


import { NavLink } from "react-router-dom";
import styles from "../ModuleCss/page.module.css";

const BetTableRow = ({ matchName, matchDate }) => {
  return (
    <>
      <div className={styles.bet_table_row}>
        <div className="row">
          <div className="col-md-6">
            <div className={styles.game_box}>
              <div className={styles.game_left_col}>
                <div className={styles.game_name}>
                  <NavLink to="">
                    <p className={`${styles.team_name} ${styles.text_left}`}>
                      {matchName}
                    </p>
                    <p
                      className={`${styles.team_name} ${styles.text_left} ${styles.team_event}`}
                    >
                      {/* ({match.series?.name || "No series info"}) */}
                    </p>
                  </NavLink>
                </div>
                <div className={`${styles.inplay} ${styles.game_date}`}>
                  <span>Live</span>
                </div>

                <div className={styles.game_date}>
                  <p className={`mb-0 ${styles.day} ${styles.text_left}`}>
                    {new Date(matchDate).toLocaleDateString()}
                  </p>
                  <p className={`mb-0 ${styles.day} ${styles.text_left}`}>
                    {new Date(matchDate).toLocaleTimeString()}
                  </p>
                </div>
              </div>
              <div className={styles.game_icons}>
                <div className={styles.icon_tv}>
                  <span className={styles.game_bm}>BM</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="row g-0">
              {/* Column 1 */}
              <div className="col-md-4 col-4">
                <div className={styles.h_backLay}>
                  <div className={`${styles.back} ${styles.bl_box}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                  <div className={`${styles.bl_box} ${styles.lay}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                </div>
              </div>
              {/* Column 2 */}
              <div className="col-md-4 col-4">
                <div className={styles.h_backLay}>
                  <div className={`${styles.back} ${styles.bl_box}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                  <div className={`${styles.bl_box} ${styles.lay}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                </div>
              </div>
              {/* Column 3 */}
              <div className="col-md-4 col-4">
                <div className={styles.h_backLay}>
                  <div className={`${styles.back} ${styles.bl_box}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                  <div className={`${styles.bl_box} ${styles.lay}`}>
                    <span className="d-block bet-button-price">
                      -<em>-</em>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetTableRow;