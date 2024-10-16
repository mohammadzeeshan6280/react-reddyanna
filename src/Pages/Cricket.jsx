// import CouponThumbSection from "../Components/CouponThumbSection";
// import styles from "../ModuleCss/page.module.css";
// import BetTableHeader from "./BetTableHeader";
// import BetTableRow from "./BetTableRow";
// import { headerData } from "../Components/customData";
// function Cricket() {
//   const cricketData = headerData.filter((data) => data.category === "cricket");
//   return (
//     <>
//       <main>
//         <div className={`${styles.page_dashboard} page_dashboard`}>
//           <section className={styles.table_page} id={styles["main"]}>
//             <div className="row">
//               <div className="col-12">
//                 <div className={styles.commentary}>
//                   <img src="/commentary.png" alt="" />
//                   <marquee direction=""></marquee>
//                 </div>
//               </div>
//               <div className={`${styles.listing_page} col-lg-12`}>
//                 <div className={`${styles.game_slider} game-slider mb-2 `}>
//                   <div className={styles.coupon_card}>
//                     <CouponThumbSection />
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div
//                                 className={`${styles.card_body} ${styles.card_content} p-0`}
//                               >
                              
//                                 {cricketData.map((data, index) => (
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

// export default Cricket;

// import { useEffect, useState } from "react";
// import CouponThumbSection from "../Components/CouponThumbSection";
// import styles from "../ModuleCss/page.module.css";
// import BetTableHeader from "./BetTableHeader";
// import BetTableRow from "./BetTableRow";
// import { headerData } from "../Components/customData";

// function Cricket() {
//   const [matchData, setMatchData] = useState([]);
//   const cricketData = headerData.filter((data) => data.category === "cricket");

//   const fetchData = () => {
//     fetch('https://api.cricapi.com/v1/currentMatches?apikey=3b25de51-8538-4074-96b9-f0ecf29d2196&offset=0')
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.status === "success") {
//           setMatchData(data.data);
//           console.log()
//         } else {
//           console.error("Failed to fetch matches", data.message);
//         }
//       })
//       .catch((error) => console.error("Error fetching matches", error));
//   }


//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <>
//       <main>
//         <div className={`${styles.page_dashboard} page_dashboard`}>
//           <section className={styles.table_page} id={styles["main"]}>
//             <div className="row">
//               <div className="col-12">
//                 <div className={styles.commentary}>
//                   <img src="/commentary.png" alt="" />
//                   <marquee direction=""></marquee>
//                 </div>
//               </div>
//               <div className={`${styles.listing_page} col-lg-12`}>
//                 <div className={`${styles.game_slider} game-slider mb-2 `}>
//                   <div className={styles.coupon_card}>
//                     <CouponThumbSection />
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div
//                                 className={`${styles.card_body} ${styles.card_content} p-0`}
//                               >
//                                 {cricketData.map((data, index) => (
//                                   <BetTableHeader
//                                     key={index}
//                                     id={data.id}
//                                     title={data.title}
//                                     img={data.img}
//                                   />
//                                 ))}
//                                 <div className={styles.bet_table_body}>
//                                   {matchData.length > 0 ? (
//                                     matchData.map((match, index) => (
//                                       <BetTableRow
//                                         key={index}
//                                         matchName={match.name}
//                                         matchDate={match.dateTimeGMT}
//                                       />
//                                     ))
//                                   ) : (
//                                     <p>No match data available</p>
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

// export default Cricket;


import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"; // Import Link for navigation
import CouponThumbSection from "../Components/CouponThumbSection";
import styles from "../ModuleCss/page.module.css";
import BetTableHeader from "./BetTableHeader";
import BetTableRow from "./BetTableRow";
import { headerData } from "../Components/customData";

function Cricket() {
  const [matchData, setMatchData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const cricketData = headerData.filter((data) => data.category === "cricket");


  const fetchData = async () => {
   try {
  const res = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=3b25de51-8538-4074-96b9-f0ecf29d2196&offset=0')
   const data =  await res.json()
   setMatchData(data)
      if (data.status === "success") {
        setMatchData(data.data);
        setLoading(false)
      } else {
        console.error("Failed to fetch matches", data.message);
        setLoading(false)
      }
     } catch (error) {
    console.error("Error fetching matches", error)
      setError(error.message);
   }
  }

  useEffect(() => {
    fetchData()
      
  }, []);

  if (loading) {
    return (
      // <div className="loader" style={{display : "flex", justifyContent : "center"}}>
      //   <img src="Loading.gif" alt="Loading..." style={{width : "50px",}}/>
      // </div>
      <div className={styles.loading}></div>
    );
  }

  if(error){
    return (
      <>
        <h3>Error: {error}</h3>
      </>
    )
  }

  return (
    <>
      <main>
        <div className={`${styles.page_dashboard} page_dashboard`}>
          <section className={styles.table_page} id={styles["main"]}>
            <div className="row">
              <div className="col-12">
                <div className={styles.commentary}>
                  <img src="/commentary.png" alt="" />
                  <marquee direction=""></marquee>
                </div>
              </div>
              <div className={`${styles.listing_page} col-lg-12`}>
                <div className={`${styles.game_slider} game-slider mb-2 `}>
                  <div className={styles.coupon_card}>
                    <CouponThumbSection />
                    <div className="card">
                      <div className={styles.single_sport_page_wrap}>
                        <div className={styles.single_sport_page_content}>
                          <div className={styles.sport_list}>
                            <div>
                              <div
                                className={`${styles.card_body} ${styles.card_content} p-0`}
                              >
                                {cricketData.map((data, index) => (
                                  <BetTableHeader
                                    key={index}
                                    id={data.id}
                                    title={data.title}
                                    img={data.img}
                                  />
                                ))}
                                <div className={styles.bet_table_body}>
                                  {matchData.length > 0 ? (
                                    matchData.map((match, index) => (
                                      <NavLink
                                        key={index}
                                        to={`/match/${match.id}`} // Dynamically navigate to match detail page
                                      >
                                        <BetTableRow
                                          matchName={match.name}
                                          matchDate={match.dateTimeGMT}
                                        />
                                      </NavLink>
                                    ))
                                  ) : (
                                    <p>No match data available</p>
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

export default Cricket;

