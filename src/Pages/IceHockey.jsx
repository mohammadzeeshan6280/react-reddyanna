import CouponThumbSection from "../Components/CouponThumbSection";
import styles from "../ModuleCss/page.module.css";
import BetTableHeader from "./BetTableHeader";
import BetTableRow from "./BetTableRow";
import { headerData } from "../Components/customData";
function IceHockey() {
  const iceHockeyData = headerData.filter((data) => data.category === "hockey");
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
                    <CouponThumbSection />
                    <div className="card">
                      <div className={styles.single_sport_page_wrap}>
                        <div className={styles.single_sport_page_content}>
                          <div className={styles.sport_list}>
                            <div>
                              <div
                                className={`${styles.card_body} ${styles.card_content} p-0`}
                              >
                                {iceHockeyData.map((data, index) => (
                                  <BetTableHeader
                                    key={index}
                                    id={data.id}
                                    title={data.title}
                                    img={data.img}
                                  />
                                ))}
                                <div className={styles.bet_table_body}>
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
                                  <BetTableRow />
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

export default IceHockey;
