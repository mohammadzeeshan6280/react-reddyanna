// import { useState, useEffect, useRef } from 'react';
// import '../ModuleCss/DropdownMenu.css'; 
// import { NavLink } from 'react-router-dom';

// const DropdownMenu = () => {
//   const [isOpen, setIsOpen] = useState(false); // Manage dropdown state
//   const menuRef = useRef(null);

//   // Toggle dropdown visibility
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   // Close dropdown if clicked outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="dropdown" ref={menuRef}>
//       {/* Dropdown button */}
//       <button onClick={toggleMenu} className="dropdown-button">
//         HI, DEMO123
//       </button>

//       {/* Dropdown menu - only rendered when isOpen is true */}
//       {isOpen && (
//         <div className="sidebar">
//             <div className="sidebar-header">
//                 <h3>HI, DEMO123</h3>
//             </div>
//             <ul className="sidebar-menu">
//                 <li>
//                     <NavLink to="/home">
//                         <i className="fa fa-home"></i> Home
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/profile">
//                         <i className="fa fa-user"></i> My Profile
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/account-statement">
//                         <i className="fa fa-file-text"></i> Account Statement
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/stake-settings">
//                         <i className="fa fa-cog"></i> Stake Settings
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/profit">
//                         <i className="fa fa-line-chart"></i> Profit & Loss
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/unsettled">
//                         <i className="fa fa-hourglass-half"></i> Unsettled Bets
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/change-password">
//                         <i className="fa fa-lock"></i> Change Password
//                     </NavLink>
//                 </li>
//                 <li>
//                     <NavLink to="/sign-out" className="sign-out">
//                         <i className="fa fa-sign-out"></i> Sign Out
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;


import { useState, useEffect, useRef } from 'react';
import '../ModuleCss/DropdownMenu.css'; 
import { NavLink } from 'react-router-dom';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage dropdown state
  const menuRef = useRef(null);

  // Toggle dropdown visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close the dropdown when any NavLink is clicked
  const handleNavLinkClick = () => {
    setIsOpen(false); // Close the dropdown
  };

  return (
    <div className="dropdown" ref={menuRef}>
      {/* Dropdown button */}
      <button onClick={toggleMenu} className="dropdown-button">
        HI, DEMO123
      </button>

      {/* Dropdown menu - only rendered when isOpen is true */}
      {isOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <h3>HI, DEMO123</h3>
          </div>
          <ul className="sidebar-menu">
            <li>
              <NavLink to="/home" onClick={handleNavLinkClick}>
                <i className="fa fa-home"></i> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile" onClick={handleNavLinkClick}>
                <i className="fa fa-user"></i> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/account-statement" onClick={handleNavLinkClick}>
                <i className="fa fa-file-text"></i> Account Statement
              </NavLink>
            </li>
            <li>
              <NavLink to="/stake-settings" onClick={handleNavLinkClick}>
                <i className="fa fa-cog"></i> Stake Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/profit" onClick={handleNavLinkClick}>
                <i className="fa fa-line-chart"></i> Profit & Loss
              </NavLink>
            </li>
            <li>
              <NavLink to="/unsettled" onClick={handleNavLinkClick}>
                <i className="fa fa-hourglass-half"></i> Unsettled Bets
              </NavLink>
            </li>
            <li>
              <NavLink to="/change-password" onClick={handleNavLinkClick}>
                <i className="fa fa-lock"></i> Change Password
              </NavLink>
            </li>
            <li>
              <NavLink to="/sign-out" className="sign-out" onClick={handleNavLinkClick}>
                <i className="fa fa-sign-out"></i> Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;



