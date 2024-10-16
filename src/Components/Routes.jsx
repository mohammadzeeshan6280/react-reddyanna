import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayoutOutlet from "./AppLayoutOutlet";
import Home from "./Home";
import InPlay from "../Pages/InPlay";
import Cricket from "../Pages/Cricket";
import Tennis from "../Pages/Tennis";
import Football from "../Pages/Football";
import Politics from "../Pages/Politics";
import Horse from "../Pages/Horse";
import Racing from "../Pages/Racing";
import Kabaddi from "../Pages/Kabaddi";
import Casino from "../Pages/Casino";
import Sport from "../Pages/Sport";
import IntCasino from "../Pages/IntCasino";
import SignUp from "./SignUp";
import Binary from "../Pages/Binary";
import MixedMartialArts from "../Pages/MixedMartialArts";
import Volleyball from "../Pages/Volleyball";
import IceHockey from "../Pages/IceHockey";
import Basketball from "../Pages/Basketball";
import Baseball from "../Pages/Baseball";
import Darts from "../Pages/Darts";
import Futsal from "../Pages/Futsal";
import TableTennis from "../Pages/TableTennis";
import Rugby from "../Pages/Rugby";
import AccountInfo from "../Accounts/AccountInfo";
import MyProfile from "../Accounts/MyProfile";
import Profit from "../Accounts/Profit";
import Unsettled from "../Accounts/Unsettled";
import MatchDetail from "./MatchDetail";
import Error from "./Error";
import Dashboard from "./Dashboard";
// import StackSettings from "../Accounts/StackSettings";
// import ChangePassword from "../Accounts/ChangePassWord";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayoutOutlet />,
      errorElement : <Error/>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },

        {
          path: "/in-play",
          element: <InPlay />,
        },
        {
          path: "/cricket",
          element: <Cricket />,
        },
        {
          path: "/tennis",
          element: <Tennis />,
        },
        {
          path: "/football",
          element: <Football />,
        },
        {
          path: "/politics",
          element: <Politics />,
        },
        {
          path: "/horse",
          element: <Horse />,
        },
        {
          path: "/racing",
          element: <Racing />,
        },
        {
          path: "/kabaddi",
          element: <Kabaddi />,
        },
        {
          path: "/casino",
          element: <Casino />,
        },
        {
          path: "/sport",
          element: <Sport />,
        },
        {
          path: "/int-casino",
          element: <IntCasino />,
        },
        {
          path: "/binary",
          element: <Binary />,
        },
        {
          path: "/arts",
          element: <MixedMartialArts />,
        },
        {
          path: "/volleyball",
          element: <Volleyball />,
        },
        {
          path: "/ice-hockey",
          element: <IceHockey />,
        },
        {
          path: "/basketball",
          element: <Basketball />,
        },
        {
          path: "/baseball",
          element: <Baseball />,
        },
        {
          path: "/darts",
          element: <Darts />,
        },
        {
          path: "/futsal",
          element: <Futsal />,
        },
        {
          path: "/table-tennis",
          element: <TableTennis />,
        },
        {
          path: "/rugby",
          element: <Rugby />,
        },
        {
          path: "/demo",
          element: <AccountInfo />,
        },
        {
          path: "/profile",
          element: <MyProfile/>,
        },
        {
          path: "/profit",
          element: <Profit/>,
        },
        {
          path: "/unsettled",
          element: <Unsettled/>,
        },
        // Cricket Score
        {
          path: "/match/:id",
          element: <MatchDetail />
        },
        {
          path: "/dashboard",
          element: <Dashboard/>
        },
        // {
        //   path: "/stack-setting",
        //   element: <StackSettings/>,
        // },
        // {
        //   path: "/change-password",
        //   element: <ChangePassword/>,
        // },
       
      ],
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Routes;
