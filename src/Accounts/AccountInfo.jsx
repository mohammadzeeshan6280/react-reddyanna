// import { NavLink } from 'react-router-dom';
// import "../ModuleCss/AccountInfo.css"; // Create a CSS file for custom styles

// const AccountInfo = () => {
//     return (
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
//     );
// };

// export default AccountInfo;


// import { useNavigate } from 'react-router-dom';
import { NavLink, useNavigate } from "react-router-dom";
import "../ModuleCss/AccountInfo.css"; // Create a CSS file for custom styles

const AccountInfo = () => {
    const navigate = useNavigate();

    // Logout function
    const handleLogout = () => {
        sessionStorage.removeItem("token"); // Remove the token
        navigate("/signin"); // Redirect to signin page
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>HI, DEMO123</h3>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <NavLink to="/home">
                        <i className="fa fa-home"></i> Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile">
                        <i className="fa fa-user"></i> My Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/account-statement">
                        <i className="fa fa-file-text"></i> Account Statement
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/stake-settings">
                        <i className="fa fa-cog"></i> Stake Settings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profit">
                        <i className="fa fa-line-chart"></i> Profit & Loss
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/unsettled">
                        <i className="fa fa-hourglass-half"></i> Unsettled Bets
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/change-password">
                        <i className="fa fa-lock"></i> Change Password
                    </NavLink>
                </li>
                <li>
                    <button className="sign-out" onClick={handleLogout}>
                        <i className="fa fa-sign-out"></i> Sign Out
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AccountInfo;

