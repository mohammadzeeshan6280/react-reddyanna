// import styles from "../ModuleCss/page.module.css";
// import BetTableHeader from "./BetTableHeader";
// import BetTableRow from "./BetTableRow";
// import { headerData } from "../Components/customData";
// function Football() {
//   const footballData = headerData.filter(
//     (data) => data.category === "football"
//   );
//   return (
//     <>
//       <main>
//         <div className={`${styles.page_dashboard} page_dashboard`}>
//           <section className={styles.table_page} id={styles["main"]}>
//             <div className="row">
//               <div className="col-12 commentary-box">
//                 <div className={`${styles.commentary} commentary`}>
//                   <img src="/commentary.png" alt="" />
//                   <marquee direction=""></marquee>
//                 </div>
//               </div>
//               <div className={`${styles.listing_page} col-lg-12`}>
//                 <div className={`${styles.game_slider} mb-2 game-slider`}>
//                   <div className={styles.coupon_card}>
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div
//                                 className={`${styles.card_body} ${styles.card_content} p-0`}
//                               >
//                                 {footballData.map((data, index) => (
//                                   <BetTableHeader
//                                     key={index}
//                                     id={data.id}
//                                     title={data.title}
//                                     img={data.img}
//                                   />
//                                 ))}
//                                 <div className={styles.bet_table_body}>
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                   <BetTableRow />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Football;

// import { useEffect, useState } from "react";
// import styles from "../ModuleCss/page.module.css";
// import BetTableHeader from "./BetTableHeader";
// import BetTableRow from "./BetTableRow";
// import { headerData } from "../Components/customData";

// function Football() {
//   const [matches, setMatches] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  

//   const fetchMatches = async () => {
//     try {
//       const response = await fetch("https://api.soccersapi.com/v2.2/leagues/?user=khanarsh9898&token=b9d0b0e8abad0666c578a8b7ab530a64&t=list");
//       const data = await response.json();
//       setMatches(data.data);
//       setLoading(false)
//     } catch (error) {
//       console.error("Error fetching the matches:", error);
//       setLoading(false);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchMatches();
//   }, []);

//   const footballData = headerData.filter(
//     (data) => data.category === "football"
//   );

//   if (loading) {
//     return (
//       <div className="loader" style={{display : "flex", justifyContent : "center"}}>
//         <img src="Loading.gif" alt="Loading..." style={{width : "50px",}}/>
//       </div>
//     );
//   }

//   if(error){
//     return (
//       <>
//         <h3>Error : {error}</h3>
//       </>
//     )
//   }

//   return (
//     <>
//       <main>
//         <div className={`${styles.page_dashboard} page_dashboard`}>
//           <section className={styles.table_page} id={styles["main"]}>
//             <div className="row">
//               <div className="col-12 commentary-box">
//                 <div className={`${styles.commentary} commentary`}>
//                   <img src="/commentary.png" alt="" />
//                   <marquee direction=""></marquee>
//                 </div>
//               </div>
//               <div className={`${styles.listing_page} col-lg-12`}>
//                 <div className={`${styles.game_slider} mb-2 game-slider`}>
//                   <div className={styles.coupon_card}>
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div
//                                 className={`${styles.card_body} ${styles.card_content} p-0`}
//                               >
//                                 {footballData.map((data, index) => (
//                                   <BetTableHeader
//                                     key={index}
//                                     id={data.id}
//                                     title={data.title}
//                                     img={data.img}
//                                   />
//                                 ))}
//                                 <div className={styles.bet_table_body}>
//                                   {loading ? (
//                                     <p>Loading matches...</p>
//                                   ) : (
//                                     matches.map((match, index) => (
//                                       <BetTableRow
//                                         key={index}
//                                         matchName={match.name} // Pass match name
//                                         matchDate={"N/A"} // Update with real date if available
//                                       />
//                                     ))
//                                   )}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// }

// export default Football;


import { useEffect, useState } from "react";
import styles from "../ModuleCss/page.module.css";
import BetTableHeader from "./BetTableHeader";
import BetTableRow from "./BetTableRow";
import { headerData } from "../Components/customData";

function Football() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(
          "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=0b1358d6c732de88d0f12ef593c5c656faab02beb49fe35cca2a849eaea4fe09"
        );
        const data = await response.json();

        // Check if the data and matches exist before setting it
        if (data && data.result && data.result.length > 0) {
          setMatches(data.result);
        } else {
          console.error("No matches data found!");
        }
      } catch (error) {
        console.error("Error fetching the matches:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  const footballData = headerData.filter((data) => data.category === "football");

  return (
    <>
      <main>
        <div className={`${styles.page_dashboard} page_dashboard`}>
          <section className={styles.table_page} id={styles["main"]}>
            <div className="row">
              <div className="col-12 commentary-box">
                <div className={`${styles.commentary} commentary`}>
                  <img src="/commentary.png" alt="" />
                  <marquee direction=""></marquee>
                </div>
              </div>
              <div className={`${styles.listing_page} col-lg-12`}>
                <div className={`${styles.game_slider} mb-2 game-slider`}>
                  <div className={styles.coupon_card}>
                    <div className="card">
                      <div className={styles.single_sport_page_wrap}>
                        <div className={styles.single_sport_page_content}>
                          <div className={styles.sport_list}>
                            <div>
                              <div
                                className={`${styles.card_body} ${styles.card_content} p-0`}
                              >
                                {footballData.map((data, index) => (
                                  <BetTableHeader
                                    key={index}
                                    id={data.id}
                                    title={data.title}
                                    img={data.img}
                                  />
                                ))}
                                <div className={styles.bet_table_body}>
                                  {loading ? (
                                    <p>Loading matches...</p>
                                  ) : (
                                    matches.length > 0 ? (
                                      matches.map((match, index) => (
                                        <BetTableRow
                                          key={index}
                                          matchName={`${match.event_home_team} vs ${match.event_away_team}`}
                                          matchDate={match.event_date}
                                          matchTime={match.event_time}
                                          homeTeam={match.event_home_team}
                                          awayTeam={match.event_away_team}
                                          score={match.event_final_result || match.score}
                                          stadium={match.event_stadium}
                                        />
                                      ))
                                    ) : (
                                      <p>No matches available.</p>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default Football;