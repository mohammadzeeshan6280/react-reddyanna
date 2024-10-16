import styles from "../ModuleCss/page.module.css";
// eslint-disable-next-line react/prop-types
const SecBetHeader = ({ title, img, id }) => {


    return (
        <>
            <div className={styles.bet_table_header}>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <span className={styles.sport_title}>
                            <img
                                id={id}
                                src={img}
                                alt=""
                                className={`${styles.sport_title_icon} img-fluid `}
                            />
                            {title}
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecBetHeader;



