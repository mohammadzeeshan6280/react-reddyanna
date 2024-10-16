// import Cricket from "../Pages/Cricket";
// import Football from "../Pages/Football";
// import Tennis from "../Pages/Tennis";
// import "../home.css";

// const Home = () => {
//   return (
//     <>
//       <Cricket />
//       <Tennis />
//       <Football />
//     </>
//   );
// };

// export default Home;

import { useLocation } from "react-router-dom";
import Cricket from "../Pages/Cricket";
import Football from "../Pages/Football";
import Tennis from "../Pages/Tennis";
import "../home.css";


const Home = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  return (
    <>
      {isHomePage && (
        <>
          <Cricket />
          <Tennis />
          <Football />
        </>
      )}
    </>
  );
};

export default Home;
