import { NavLink } from "react-router-dom"
import styles from "../ModuleCss/page.module.css"

const SecBetRow = () => {
    return (
        <>
            <div className={styles.bet_table_row}>
                <div className="row align-items-center">
                    <div className="col-md-3 col-12">
                        <div className={styles.game_box}>
                            <div className={styles.game_left_col}>
                                <div className={styles.game_name}>
                                    <NavLink to="">
                                        <p className={`${styles.team_name} ${styles.text_left}`}>
                                            Ipswich (AUS) 19th Sep
                                        </p>
                                        <p className={`${styles.team_name} ${styles.text_left} ${styles.team_event}`}>

                                        </p>
                                    </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-9 col-12 text-start">
                        <div className={styles.racing_listing}>
                            <NavLink className={styles.rl_box}>
                                <span className={`${styles.bet_button_price} d-block`}>11:12</span>
                            </NavLink>
                            <NavLink className={styles.rl_box}>
                                <span className={`${styles.bet_button_price} d-block`}>11:47</span>
                            </NavLink>
                            <NavLink className={styles.rl_box}>
                                <span className={`${styles.bet_button_price} d-block`}>12:27</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecBetRow