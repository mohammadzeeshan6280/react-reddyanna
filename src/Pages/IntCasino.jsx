// import CouponThumbSection from "../Components/CouponThumbSection";
// import styles from "../ModuleCss/page.module.css";
// // import BetTableHeader from "./BetTableHeader";
// import { headerData } from "../Components/customData";
// import SecBetHeader from "../PageSecLayout/SecBetHeader";
// function IntCasino() {
//   const intCasinoData = headerData.filter(
//     (data) => data.category === "int-casino"
//   );
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
//                     <CouponThumbSection />
//                     <div className="card">
//                       <div className={styles.single_sport_page_wrap}>
//                         <div className={styles.single_sport_page_content}>
//                           <div className={styles.sport_list}>
//                             <div>
//                               <div
//                                 className={`${styles.card_body} ${styles.card_content} p-0`}
//                               >
//                                 {intCasinoData.map((data, index) => (
//                                   <SecBetHeader
//                                     key={index}
//                                     id={data.id}
//                                     title={data.title}
//                                     img={data.img}
//                                   />
//                                 ))}
//                                 <div className={styles.bet_table_body}></div>
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





import CouponThumbSection from "../Components/CouponThumbSection";
import styles from "../ModuleCss/page.module.css";

// import BetTableHeader from "./BetTableHeader";
import { headerData } from "../Components/customData";
import SecBetHeader from "../PageSecLayout/SecBetHeader";
import { NavLink,useLocation  } from "react-router-dom";
import { useState, useEffect } from "react";
import styless from "../ModuleCss/BottomHeader.module.css";



  


function IntCasino() {
  const intCasinoData = headerData.filter(
    (data) => data.category === "int-casino"
  );

  const [isHomeActive, setIsHomeActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Set isHomeActive to false if not on home page
    if (location.pathname !== "/") {
      setIsHomeActive(false);
    }
  }, [location.pathname]);


  

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
                                {intCasinoData.map((data, index) => (
                                  <SecBetHeader
                                    key={index}
                                    id={data.id}
                                    title={data.title}
                                    img={data.img}
                                  />
                                ))}
                                <div className={styles.bet_table_body}>
                                <ul className={`${styles.tab_header} ${styles.tab_header_second} nav nav-tab m-0`}>
                <li >
    <NavLink to="/all" className={({ isActive }) =>
      isHomeActive || isActive ? styles.active : ""
    }
    onClick={() => setIsHomeActive(false)}>
      All
    </NavLink>
  </li>
  <li>
    <NavLink to="/mac88" className={({ isActive }) => (isActive ? styles.active : "")}>
      Mac88
    </NavLink>
  </li>
  <li>
    <NavLink to="/fun-games" className={({ isActive }) => (isActive ? styles.active : "")}>
      Fun Games
    </NavLink>
  </li>
  <li>
    <NavLink to="/mac88-virtuals" className={({ isActive }) => (isActive ? styles.active : "")}>
    Mac88 Virtuals
    </NavLink>
  </li>
  <li>
    <NavLink to="/win-games" className={({ isActive }) => (isActive ? styles.active : "")}>
      Win Go Games
    </NavLink>
  </li>
  <li>
    <NavLink to="/evolution-gaming" className={({ isActive }) => (isActive ? styles.active : "")}>
      Evolution Gaming
    </NavLink>
  </li>
  <li>
    <NavLink to="/ezugi" className={({ isActive }) => (isActive ? styles.active : "")}>
     Ezugi
    </NavLink>
  </li>
  <li>
    <NavLink to="/turbo-games" className={({ isActive }) => (isActive ? styles.active : "")}>
      TurboGames
    </NavLink>
  </li>
  <li>
    <NavLink to="/spribe" className={({ isActive }) => (isActive ? styles.active : "")}>
      Spribe
    </NavLink>
  </li>
  <li className={styles["nmm-active"]}>
    <NavLink to="/jili">
   Jili
    </NavLink>
  </li>
  <li>
    <NavLink to="/king-maker" className={({ isActive }) => (isActive ? styles.active : "")}>
     KingMaker
    </NavLink>
  </li>
  <li className={styles["nmm-active"]}>
    <NavLink to="/ae-sexy">
   Ae Sexy
    </NavLink>
  </li>
  <li>
    <NavLink to="/bet-games" className={({ isActive }) => (isActive ? styles.active : "")}>
     BetGames.Tv
    </NavLink>
  </li>
  <li>
    <NavLink to="/vivo" className={({ isActive }) => (isActive ? styles.active : "")}>
      Vivo
    </NavLink>
  </li>
  <li>
    <NavLink to="/bombay-live" className={({ isActive }) => (isActive ? styles.active : "")}>
      Bombay Live
    </NavLink>
  </li>
  <li>
    <NavLink to="/virtual-sports" className={({ isActive }) => (isActive ? styles.active : "")}>
     Virtual Sports
    </NavLink>
  </li>
  <li>
    <NavLink to="/playtech" className={({ isActive }) => (isActive ? styles.active : "")}>
      PlayTech Live
    </NavLink>
  </li>
  <li>
    <NavLink to="/gamzix" className={({ isActive }) => (isActive ? styles.active : "")}>
     Gamzix
    </NavLink>
  </li>
                </ul>

<div className={styless.bottom_header}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <div className={`${styless.MainHeader} ${styless.MainHeader_Second}`}>
                <ul className="m-0">
                  <li >
                    <NavLink to="/rng-dragon-tiger" className={({ isActive }) =>
                      isHomeActive || isActive ? styless.active : ""
                    }
                    onClick={() => setIsHomeActive(false)}>
                    
                      <img src="/rng-dragon-tiger.webp" alt="" />
                      Dragon Tiger
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/baccarat" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/baccarat.webp" alt="" />
                      Baccarat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sicbo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/sicbo.webp" alt="" />
                      Sicbo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/roulette" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/roulette.webp" alt="" />
                      Roulette
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/poker.webp" alt="" />
                      Poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lucky7" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lucky7.webp" alt="" />
                      Politics
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/andarbahar" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/andarbahar.webp" alt="" />
                      Andarbahar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/teenpatti" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/teenpatti.webp" alt="" />
                      Teenpatti
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/32cards" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/32cards.webp" alt="" />
                      32cards
                    </NavLink>
                  </li>
                  <li className={styless["nmm-active"]}>
                    <NavLink to="/others">
                      <img src="/others.webp" alt="" />
                      Others
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lottery" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lottery.webp" alt="" />
                      Lottery
                    </NavLink>
                  </li>
                  <li className={styless["nmm-active"]}>
                    <NavLink to="/cricketwar">
                      <img src="/cricketwar.webp" alt="" />
                      Cricketwar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/hi-low" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/hi-low.webp" alt="" />
                      Hi-low
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/aviators" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/aviators.webp" alt="" />
                      Aviator
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/crash" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/crash.webp" alt="" />
                      Crash
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/slots" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/slots.webp" alt="" />
                      Slots
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/win-go" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/win-go.webp" alt="" />
                      Win-go
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/double-hand" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/double-hand-casino-holdem-poker.webp" alt="" />
                      Double-Hand-Casino-Holdem-Poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="roulettes" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/roulette.webp" alt="" />
                      Roulette
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="slingshot" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/slingshot.webp" alt="" />
                      Slingshot
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bac-bo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/bac-bo.webp" alt="" />
                      Bac-bo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/baccarats" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/baccarat.webp" alt="" />
                      Baccarat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/balloon-race" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/balloon-race.webp" alt="" />
                      Balloon-race
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/blackjack.webp" alt="" />
                      Blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/caribbean-stud-poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/caribbean-stud-poker.webp" alt="" />
                      Caribbean-Stud-Poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/cash-or-crash" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/cash-or-crash.webp" alt="" />
                      Cash-Or-Crash
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/casino-holdem" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/casino-holdem.webp" alt="" />
                      Casino-Holdem
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/craps" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/craps.webp" alt="" />
                      Craps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/crazy-coin-flip" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/crazy-coin-flip.webp" alt="" />
                      Crazy Coin Flip
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/crazy-pachinko" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/crazy-pachinko.webp" alt="" />
                      Crazy Pachinko
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/crazy-time" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/crazy-time.webp" alt="" />
                      crazy time
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dead" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/crazy-time.webp" alt="" />
                      Dead or Alive: Saloon 
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/deal-or-no-deal" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/deal-or-no-deal.webp" alt="" />
                      deal or no deal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dragon-tiger" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/dragon-tiger.webp" alt="" />
                      dragon tiger
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/money-wheel" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/money-wheel.webp" alt="" />
                      money wheel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/sic-bo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/sic-bo.webp" alt="" />
                      sic-bo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/extra-chilli-epic-spins" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/extra-chilli-epic-spins.webp" alt="" />
                      extra chilli epic spins
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/extreme-texas-holdem" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/extreme-texas-holdem.webp" alt="" />
                      extreme texas holdem
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/fan-tan" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/fan-tan.webp" alt="" />
                      fan tan
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-american-roulette" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-american-roulette.webp" alt="" />
                      rng american roulette
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-baccarat" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-baccarat.webp" alt="" />
                      rng baccarat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-blackjack.webp" alt="" />
                      rng blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-craps" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-craps.webp" alt="" />
                      rng craps
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-deal-or-no-deal" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-deal-or-no-deal.webp" alt="" />
                      first person deal or no deal
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-dragon-tiger" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-dragon-tiger.webp" alt="" />
                      rng dragon tiger
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-money-wheel" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-money-wheel.webp" alt="" />
                      rng money wheel
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-hilo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-hilo.webp" alt="" />
                      first person hilo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-lightning-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-lightning-blackjack.webp" alt="" />
                      rng lightning blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-roulette" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-roulette.webp" alt="" />
                      rng roulette
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-bingo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-bingo.webp" alt="" />
                      first person bingo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-super-sic-bo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-super-sic-bo.webp" alt="" />
                      first person super sic bo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rng-top-card" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rng-top-card.webp" alt="" />
                      rng top card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-video-poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-video-poker.webp" alt="" />
                      first person video poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/top-card" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/top-card.webp" alt="" />
                    top card
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/top-dice" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/top-dice.webp" alt="" />
                      top dice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/funky-time" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/funky-time.webp" alt="" />
                      funky time
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/gonzos-treasure-map" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/gonzos-treasure-map.webp" alt="" />
                      gonzos treasure map
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/scalable-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/scalable-blackjack.webp" alt="" />
                      scalable blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/freebet-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/freebet-blackjack.webp" alt="" />
                      freebet blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lightning-ball" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lightning-ball.webp" alt="" />
                      lightning ball
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lightning-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lightning-blackjack.webp" alt="" />
                      lightning blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lightning-dice" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lightning-dice.webp" alt="" />
                      lightning dice
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/lightning-storm" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/lightning-storm.webp" alt="" />
                      lightning storm
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bingo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/bingo.webp" alt="" />
                      bingo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/monopoly-big-baller" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/monopoly-big-baller.webp" alt="" />
                      monopoly-big-baller
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/monopoly" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/monopoly.webp" alt="" />
                      monopoly
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/power-infinite-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/power-infinite-blackjack.webp" alt="" />
                      power infinite blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/stock-market" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/stock-market.webp" alt="" />
                      stock market
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/first-person-stock-market" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/first-person-stock-market.webp" alt="" />
                      first person stock market
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/super-andar-bahar" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/super-andar-bahar.webp" alt="" />
                      super andar bahar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/teen-patti" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/teen-patti.webp" alt="" />
                      teen patti
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/texas-holdem-bonus-poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/texas-holdem-bonus-poker.webp" alt="" />
                      texas holdem bonus poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/triple card poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/triple-card-poker.webp" alt="" />
                      triple card poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/video-poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/video-poker.webp" alt="" />
                      video poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/blackjack.webp" alt="" />
                      blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/video-slots" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/video-slots.webp" alt="" />
                      video slots
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/scratch-cards" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/scratch-cards.webp" alt="" />
                      scratch cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/rummy" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/rummy.webp" alt="" />
                      rummy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/bingo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/bingo.webp" alt="" />
                      bingo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/monopoly" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/monopoly.webp" alt="" />
                      monopoly
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-blackjack" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-blackjack.webp" alt="" />
                      live blackjack
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-dragon-tiger" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-dragon-tiger.webp" alt="" />
                      live dragon tiger
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-baccarat" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-baccarat.webp" alt="" />
                      live baccarat
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-sic-bo" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-sic-bo.webp" alt="" />
                      live sic bo
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/game-show" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/game-show.webp" alt="" />
                      game show
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-poker" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-poker.webp" alt="" />
                      live poker
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-roulette" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-roulette.webp" alt="" />
                      live roulette
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/live-lobby" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/live-lobby.webp" alt="" />
                    live lobby
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/others" className={({ isActive }) => (isActive ? styless.active : "")}>
                      <img src="/others.webp" alt="" />
                      others
                    </NavLink>
                  </li>
                </ul>
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

export default IntCasino;
