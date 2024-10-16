import styles from "../ModuleCss/page.module.css";

// eslint-disable-next-line react/prop-types
const BetTableHeader = ({ title, img, id }) => {
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
            <ul className={styles.mode_tag_box}>
              <li className="">
                <input id="live" className={styles.live_check} type="checkbox" />
                <label htmlFor="live" className={styles.live}>Live</label>
              </li>
              <li className="">
                <input id="virtual" type="checkbox" className={styles.virtual_check} />
                <label htmlFor="virtual">virtual</label>
              </li>
            </ul>
          </div>
          <div className="col-md-2 text-center d-none d-md-block">
            <small>1</small>
          </div>
          <div className="col-md-2 text-center d-none d-md-block">
            <small>X</small>
          </div>
          <div className="col-md-2 text-center d-none d-md-block">
            <small>2</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default BetTableHeader;
