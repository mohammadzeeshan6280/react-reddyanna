/* eslint-disable react/prop-types */
// /* eslint-disable react/prop-types */
// import { NavLink } from "react-router-dom";
// import BottomHeader from "./BottomHeader";

// const Header = ({ openSidebar }) => {
//   return (
//     <>
//       <header className="d-flex align-items-center">
//         {/* <nav> */}
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-6">
//               <div className="header-left d-flex align-items-center justify-content-center">
//                 <div>
//                   <NavLink to="/" className="logo-box">
//                     <img src="/logo-text.png" alt="" className="logo" />
//                     <img src="/mobilelogo.png" alt="" className="mobile-logo" />
//                   </NavLink>
//                   <i
//                     className="menu_icon bi bi-list-nested  "
//                     onClick={openSidebar}
//                   ></i>
//                 </div>
//                 <div className="search-box position-relative">
//                   <input
//                     type="search"
//                     name=""
//                     id=""
//                     placeholder="Search Events"
//                     className="form-control search-bar"
//                   />
//                   <button className="search-icon-btn">
//                     <i className="search-icon bi bi-search"></i>
//                   </button>
//                 </div>
//                 <NavLink to="/rules" className="rules">RULES</NavLink>
//               </div>
//             </div>

//             <div className="col-6 d-flex justify-content-end">
//               <div className="action-btns">
//                 <NavLink
//                   to="/sign-up"
//                   type="button"
//                   className="btn-login"
//                   href=""
//                 >
//                   Signup
//                 </NavLink>
//                 <NavLink type="button" className="btn-login" to="/sign-in">
//                   Signin
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* </nav> */}
//       </header>
//       <BottomHeader />
//     </>
//   );
// };

// export default Header;


// import { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import BottomHeader from './BottomHeader';
// import Signin from './Signin'; // Import the Signin component

// const Header = ({ openSidebar }) => {
//   const [showSignin, setShowSignin] = useState(false);

//   // Handle signin modal open/close toggle
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the modal state
//   };

//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = sessionStorage.getItem("token");
//     setIsLoggedIn(!!token); // Check if token exists in session storage
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("token"); // Remove token on logout
//     setIsLoggedIn(false);
//     navigate("/signin"); // Redirect to SignIn page after logout
//   };

//   return (
//     <>
//       <header className="d-flex align-items-center">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-6">
//               <div className="header-left d-flex align-items-center justify-content-center">
//                 <div>
//                   <NavLink to="/" className="logo-box">
//                     <img src="/logo-text.png" alt="" className="logo" />
//                     <img src="/mobilelogo.png" alt="" className="mobile-logo" />
//                   </NavLink>
//                   <i
//                     className="menu_icon bi bi-list-nested"
//                     onClick={openSidebar}
//                   ></i>
//                 </div>
//                 <div className="search-box position-relative">
//                   <input
//                     type="search"
//                     placeholder="Search Events"
//                     className="form-control search-bar"
//                   />
//                   <button className="search-icon-btn">
//                     <i className="search-icon bi bi-search"></i>
//                   </button>
//                 </div>
//                 <NavLink to="/rules" className="rules">RULES</NavLink>
//               </div>
//             </div>

//             <div className="col-6 d-flex justify-content-end">
//               {/* <div className="action-btns">
//                 <NavLink
//                   to="/sign-up"
//                   className="btn-login"
//                 >
//                   Signup
//                 </NavLink>
//                 <button
//                   type="button"
//                   className="btn-login"
//                   onClick={handleSigninClick} // Toggle modal
//                 >
//                   Login
//                 </button>
//               </div> */}
//               {isLoggedIn ? (
//         <>
//           <NavLink to="/dashboard" className="btn btn-primary">Dashboard</NavLink>
//           <button onClick={handleLogout} className="btn btn-danger">Logout</button>
//         </>
//       ) : (
//         <div className="action-btns">
//                 <NavLink
//                   to="/sign-up"
//                   className="btn-login"
//                 >
//                   Signup
//                 </NavLink>
//                 <button
//                   type="button"
//                   className="btn-login"
//                   onClick={handleSigninClick} // Toggle modal
//                 >
//                   Login
//                 </button>
//               </div>
//       )}
//             </div>
//           </div>
//         </div>
//       </header>
//       <BottomHeader />

//       {/* Modal only opens if showSignin is true */}
//       {showSignin && <Signin onClose={handleSigninClick} />}
//     </>
//   );
// };

// export default Header;






// import { useEffect, useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import BottomHeader from './BottomHeader';
// import Signin from './Signin'; // Import the Signin component
// import DropdownMenu from './DropdownMenu';
// // import AccountInfo from '../Accounts/AccountInfo';

// const Header = ({ openSidebar }) => {
//   const [showSignin, setShowSignin] = useState(false); // State to control modal visibility
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const navigate = useNavigate();

//   // Handle signin modal open/close toggle
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the modal state
//   };

//   useEffect(() => {
//     // Check if token exists in session storage to determine login status
//     const token = sessionStorage.getItem("token");
//     setIsLoggedIn(!!token); // If token exists, set as logged in
//   }, []);

//   const handleLogout = () => {
//     sessionStorage.removeItem("token");
//     setIsLoggedIn(false);
//     navigate("/signin");
//   };

//   return (
//     <>
//       <header className="d-flex align-items-center">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-6">
//               <div className="header-left d-flex align-items-center justify-content-center">
//                 <div>
//                   <NavLink to="/" className="logo-box">
//                     <img src="/logo-text.png" alt="Logo" className="logo" />
//                     <img src="/mobilelogo.png" alt="Mobile Logo" className="mobile-logo" />
//                   </NavLink>
//                   <i className="menu_icon bi bi-list-nested" onClick={openSidebar}></i>
//                 </div>
//                 <div className="search-box position-relative">
//                   <input type="search" placeholder="Search Events" className="form-control search-bar" />
//                   <button className="search-icon-btn">
//                     <i className="search-icon bi bi-search"></i>
//                   </button>
//                 </div>
//                 <NavLink to="/rules" className="rules">RULES</NavLink>
//                 <NavLink className="deposit">
//                   <img src="/deposit-icon.png" alt="" />
//                   Deposit
//                 </NavLink>
//                 <NavLink className="withdrawal">
//                   <img src="/withdrawal-icon.png" alt="" />
//                   Withdrawal</NavLink>
//               </div>
//             </div>

//             <div className="col-6 d-flex justify-content-end">
//               {/* Conditionally render based on login status */}
//               {isLoggedIn ? (
//                 <>
//                   {/* <NavLink to="/dashboard" className="btn btn-primary">Dashboard</NavLink>
//                   <button onClick={handleLogout} className="btn btn-danger">Logout</button> */}
//                   <DropdownMenu/>
//                   {/* <AccountInfo/> */}
                
//                 </>
//               ) : (
//                 <div className="action-btns">
//                   <NavLink to="/sign-up" className="btn-login">Signup</NavLink>
//                   <button type="button" className="btn-login" onClick={handleSigninClick}>
//                     Login
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </header>
      
//       {/* Show Signin modal when showSignin is true */}
//       {showSignin && <Signin onClose={handleSigninClick} />}
      
//       <BottomHeader />
//     </>
//   );
// };

// export default Header;



import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import BottomHeader from './BottomHeader';
import Signin from './Signin'; // Import the Signin component
import DropdownMenu from './DropdownMenu';
// import AccountInfo from '../Accounts/AccountInfo';

const Header = ({ openSidebar }) => {
  const [showSignin, setShowSignin] = useState(false); // State to control modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handle signin modal open/close toggle
  const handleSigninClick = () => {
    setShowSignin((prevState) => !prevState); // Toggle the modal state
  };

  useEffect(() => {
    // Check if token exists in session storage to determine login status
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token); // If token exists, set as logged in
  }, []);

 

  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-8">
              <div className="header-left d-flex align-items-center justify-content-center">
                <div>
                  <NavLink to="/" className="logo-box">
                    <img src="/logo-text.png" alt="Logo" className="logo" />
                    <img src="/mobilelogo.png" alt="Mobile Logo" className="mobile-logo" />
                  </NavLink>
                  <i className="menu_icon bi bi-list-nested" onClick={openSidebar}></i>
                </div>
                <div className="search-box position-relative">
                  <input type="search" placeholder="Search Events" className="form-control search-bar" />
                  <button className="search-icon-btn">
                    <i className="search-icon bi bi-search"></i>
                  </button>
                </div>
                <NavLink to="/rules" className="rules">RULES</NavLink>

                {/* Conditionally render Deposit and Withdrawal if logged in */}
                {isLoggedIn && (
                  <>
                    <NavLink to="#" className="deposit">
                      <img src="/deposit-icon.png" alt="ttt" />
                      Deposit
                    </NavLink>
                    <NavLink to="#" className="withdrawal">
                      <img src="/withdrawal-icon.png" alt="ttt" />
                      Withdrawal
                    </NavLink>
                  </>
                )}
              </div>
            </div>

            <div className="col-4 d-flex justify-content-end">
              {/* Conditionally render based on login status */}
              {isLoggedIn ? (
                <>
                  <DropdownMenu />
                </>
              ) : (
                <div className="action-btns">
                  <NavLink to="/sign-up" className="btn-login">Signup</NavLink>
                  <button type="button" className="btn-login" onClick={handleSigninClick}>
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Show Signin modal when showSignin is true */}
      {showSignin && <Signin onClose={handleSigninClick} />}

      <BottomHeader />
    </>
  );
};

export default Header;
