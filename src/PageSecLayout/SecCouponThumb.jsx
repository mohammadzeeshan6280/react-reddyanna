
import styles from "../ModuleCss/page.module.css";

const SecCouponThumb = () => {
    const ctsImages = [
        "../../src/assets/aviator-new-blue.webp",
        "../../src/assets/fungames_500-299.webp",
        "../../src/assets/lottery-games-500-299.webp",
        "../../src/assets/lankesh.jpeg",
        "../../src/assets/andarbahar.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontigerlion.webp",
        "../../src/assets/dragontigeroneday.webp",
        "../../src/assets/baccarat.webp",
        "../../src/assets/aviator-new-blue.webp",
        "../../src/assets/fungames_500-299.webp",
        "../../src/assets/lottery-games-500-299.webp",
        "../../src/assets/lankesh.jpeg",
        "../../src/assets/andarbahar.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontigerlion.webp",
        "../../src/assets/dragontigeroneday.webp",
        "../../src/assets/baccarat.webp",
        "../../src/assets/aviator-new-blue.webp",
        "../../src/assets/fungames_500-299.webp",
        "../../src/assets/lottery-games-500-299.webp",
        "../../src/assets/lankesh.jpeg",
        "../../src/assets/andarbahar.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontigerlion.webp",
        "../../src/assets/dragontigeroneday.webp",
        "../../src/assets/baccarat.webp",
        "../../src/assets/aviator-new-blue.webp",
        "../../src/assets/fungames_500-299.webp",
        "../../src/assets/lottery-games-500-299.webp",
        "../../src/assets/lankesh.jpeg",
        "../../src/assets/andarbahar.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontigerlion.webp",
        "../../src/assets/dragontigeroneday.webp",
        "../../src/assets/baccarat.webp",
        "../../src/assets/aviator-new-blue.webp",
        "../../src/assets/fungames_500-299.webp",
        "../../src/assets/lottery-games-500-299.webp",
        "../../src/assets/lankesh.jpeg",
        "../../src/assets/andarbahar.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontiger.webp",
        "../../src/assets/dragontigerlion.webp",
        "../../src/assets/dragontigeroneday.webp",
        "../../src/assets/baccarat.webp",
    ];
    return (
        <>
            <div className={styles.sec_coupon_thumb_section}>
                {ctsImages.map((img, index) => (
                    <div
                        className={`${styles.cts_img} ${styles.popular_game}`}
                        key={index}
                    >
                        <img src={img} className="img-fluid" alt="" />
                    </div>
                ))}
            </div>
        </>
    );
};

export default SecCouponThumb;
