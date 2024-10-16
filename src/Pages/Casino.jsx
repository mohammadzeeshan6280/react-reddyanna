
import styles from "../ModuleCss/page.module.css";
import BetTableHeader from "./BetTableHeader";
import { headerData } from "../Components/customData";
import SecCouponThumb from "../PageSecLayout/SecCouponThumb";
function Casino() {
  const casinoData = headerData.filter((data) => data.category === "casino");

  return (
    <>
      <main>
        <div className={styles.page_dashboard}>
          <section className={styles.table_page} id={styles["main"]}>
            <div className="row">
              <div className="col-12">
                <div className={styles.commentary}>
                  <img src="/commentary.png" alt="" />
                  <marquee direction=""></marquee>
                </div>
              </div>
              <div className={`${styles.listing_page} col-lg-12`}>
                <div className={`${styles.game_slider} mb-2`}>
                  <div className={styles.coupon_card}>
                    <div className="card">
                      <div className={styles.single_sport_page_wrap}>
                        <div className={styles.single_sport_page_content}>
                          <div className={styles.sport_list}>
                            <div>
                              <div
                                className={`${styles.card_body} ${styles.card_content} p-0`}
                              >
                                {casinoData.map((data, index) => (
                                  <BetTableHeader
                                    key={index}
                                    id={data.id}
                                    title={data.title}
                                    img={data.img}
                                  />
                                ))}
                                <div className={styles.bet_table_body}>
                                  <SecCouponThumb />
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

export default Casino;


// import styles from "../ModuleCss/page.module.css";
// import { useEffect, useState } from "react";

// function Casino() {

//   const [update, setUpdate] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const res = await fetch("https://tezcdn.com/mac88-casino-blue");
//       if (!res.ok) {
//         throw new Error(`HTTP error! status: ${res.status}`);
//       }
//       const data = await res.json();
//       setUpdate(data);
//       setLoading(false)
//     } catch (err) {
//       console.error("Fetch error: ", err);
//       setLoading(false)
//       setError(err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="loader" style={{display : "flex", justifyContent : "center"}}>
//         <img src="/Loading.gif" alt="Loading..." style={{width : "50px",}}/>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <>
//         <h3>Error: {error}</h3>
//       </>
//     );
//   }

//   return (
//     <>
//       <main>
//         <div className={styles.page_dashboard}>
//           <section className={styles.table_page} id={styles["main"]}>
//             <div className="row">
//               <div className="col-12">
//                 <div className={styles.commentary}>
//                   <img src="/commentary.png" alt="" />
//                   <marquee direction=""></marquee>
//                 </div>
//               </div>
//               <div className={`${styles.listing_page} col-lg-12`}>
//                 <div className={`${styles.game_slider} mb-2`}>
//                   <div className={styles.coupon_card}>
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div className={`${styles.card_body} ${styles.card_content} p-0`}>
//                                   <div className={`${styles.bet_table_body} ${styles["bet-table"]}`}>
//                                     {update.map((item, index) => (
//                                       <div key={index}>
//                                        <img src={item.image} alt="" />
//                                       </div>
//                                     ))}
//                                   </div>
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

// export default Casino;


