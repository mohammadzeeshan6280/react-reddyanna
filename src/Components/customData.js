// src/Components/customData.js
import CricketNavigation from "./Navigation/CricketNavigation";
import TennisNavigation from "./Navigation/TennisNavigation";
import FootballNavigation from "./Navigation/FootballNavigation";
import PoliticsNavigation from "./Navigation/PoliticsNavigation";
import HorseRacingNavigation from "./Navigation/HorseRacingNavigation";
import GreyhoundRacingNavigation from "./Navigation/GreyhoundRacingNavigation";
import KabaddiNaviagtion from "./Navigation/KabaddiNaviagtion";
import CasinoNavigation from "./Navigation/CasinoNavigation";
import BinaryNavigation from "./Navigation/BinaryNavigation";
import MixedMartialArtsNavigation from "./Navigation/MixedMartialArtsNavigation";
import VolleyballNavigation from "./Navigation/VolleyballNavigation";
import IceHockeyNavigation from "./Navigation/IceHockeyNavigation";
import BasketBallNavigation from "./Navigation/BasketBallNavigation";
import DartsNavigation from "./Navigation/DartsNavigation";
import FutsalNavigation from "./Navigation/FutsalNavigation";
import TableTennisNavigation from "./Navigation/TableTennisNavigation";
import RugbyNavigation from "./Navigation/RugbyNavigation";

export const headerData = [
  { id: 1, title: "Cricket", img: "/cricket.png", category: "cricket" },
  { id: 2, title: "Tennis", img: "/tennis.png", category: "tennis" },
  { id: 3, title: "Football", img: "/fatbool.png", category: "football" },
  { id: 4, title: "Politics", img: "/politics.png", category: "politics" },
  { id: 5, title: "Horse Racing", img: "/horse.png", category: "horse" },
  { id: 6, title: "Greyhound Racing", img: "/racing.png", category: "racing" },
  { id: 7, title: "Kabaddi", img: "/kabaddi.png", category: "kabaddi" },
  { id: 8, title: "Casino", img: "/casino.png", category: "casino" },
  { id: 9, title: "Sport Book", img: "/sport.png", category: "sport" },
  {
    id: 10,
    title: "Int Casino",
    img: "/int-casino.png",
    category: "int-casino",
  },
  { id: 11, title: "Binary", img: "/binary.png", category: "binary" },
  { id: 12, title: "Mixed Martial Arts", img: "/arts.png", category: "arts" },
  { id: 13, title: "VolleyBall", img: "/volleybol.png", category: "volley" },
  { id: 14, title: "Ice Hockey", img: "/hockey.png", category: "hockey" },
  { id: 15, title: "BasketBall", img: "/basket.png", category: "basket" },
  { id: 16, title: "BaseBall", img: "/baseball.png", category: "baseball" },
  { id: 17, title: "Darts", img: "/darts.png", category: "darts" },
  { id: 18, title: "Futsal", img: "/putsal.png", category: "futsal" },
  {
    id: 19,
    title: "Table Tennis",
    img: "/table-tennis.png",
    category: "table-tennis",
  },
  { id: 20, title: "Rugby", img: "/rugby.png", category: "rugby" },
];

export const navItems = [
  {
    id: "cricket",
    label: "Cricket",
    icon: "/cricket.png",
    component: CricketNavigation,
  },
  {
    id: "tennis",
    label: "Tennis",
    icon: "/tennis.png",
    component: TennisNavigation,
  },
  {
    id: "football",
    label: "Football",
    icon: "/fatbool.png",
    component: FootballNavigation,
  },
  {
    id: "politics",
    label: "Politics",
    icon: "/politics.png",
    component: PoliticsNavigation,
  },
  {
    id: "horse_racing",
    label: "Horse Racing",
    icon: "/horse.png",
    component: HorseRacingNavigation,
  },
  {
    id: "greyhound_racing",
    label: "Greyhound Racing",
    icon: "/racing.png",
    component: GreyhoundRacingNavigation,
  },
  {
    id: "kabaddi",
    label: "Kabaddi",
    icon: "/kabaddi.png",
    component: KabaddiNaviagtion,
  },
  {
    id: "casino",
    label: "Casino",
    icon: "/casino.png",
    component: CasinoNavigation,
  },
  { id: "sports_book", label: "Sports Book", icon: "/sport.png", static: true },
  {
    id: "int_casino",
    label: "Int Casino",
    icon: "/int-casino.png",
    static: true,
  },
  {
    id: "binary",
    label: "Binary",
    icon: "/binary.png",
    component: BinaryNavigation,
  },
  {
    id: "mma",
    label: "Mixed Martial Arts",
    icon: "/arts.png",
    component: MixedMartialArtsNavigation,
  },
  {
    id: "volleyball",
    label: "Volleyball",
    icon: "/volleybol.png",
    component: VolleyballNavigation,
  },
  {
    id: "ice_hockey",
    label: "Ice Hockey",
    icon: "/hockey.png",
    component: IceHockeyNavigation,
  },
  {
    id: "basketball",
    label: "Basketball",
    icon: "/basket.png",
    component: BasketBallNavigation,
  },
  {
    id: "darts",
    label: "Darts",
    icon: "/darts.png",
    component: DartsNavigation,
  },
  {
    id: "futsal",
    label: "Futsal",
    icon: "/putsal.png",
    component: FutsalNavigation,
  },
  {
    id: "table_tennis",
    label: "Table Tennis",
    icon: "/table-tennis.png",
    component: TableTennisNavigation,
  },
  {
    id: "rugby",
    label: "Rugby",
    icon: "/rugby.png",
    component: RugbyNavigation,
  },
  { id: "rules", label: "Rules", icon: "/menu-rules.png", static: true },
];
