// /* eslint-disable no-unused-vars */
// import { useEffect, useRef, useState } from "react";
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [showSignin, setShowSignin] = useState(false);


// console.log(mobile, password);

//   const handleSendOtp = () => {
//     setOtpSent(true);
//     setAlertSuccess(true);
//     setTimeout(() => setAlertSuccess(false), 3000);
//     startOtpTimer();
//   };

//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//     // Toggle Signin modal
//     const handleSigninClick = () => {
//       setShowSignin(prevState => !prevState); // Toggle the state
//     };
  
//     // Close Signin modal
//     const handleCloseSignin = () => {
//       setShowSignin(false); // Close the modal
//     };
  

//   const handleResendOtp = () => {
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   const handleSendOtp1 = async () => {
//     // Define the API endpoint URL
//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; // Replace with your actual API URL
  
//     // Data to be sent in the POST request body
//     const data = {
//       mobile_number: phoneNumber, 
//       password: password
//     };
//   console.log("data", data);
//     try {
//       // Make the POST request
//       const response = await fetch(apiUrl, {
//         method: 'POST', // HTTP method
//         headers: {
//           'Content-Type': 'application/json', 
//         },
//         body: JSON.stringify(data),
//       });
  
//       // Check if the response is successful
//       if (response.ok) {
//         const result = await response.json(); 
//         console.log('Success:', result); 
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error); 
//     }
//   };

//   const handleSubmit = () => {
//     console.log("")
//   }
  

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const dropdownRef = useRef(null);

//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Syncing mobile state
//   };
//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div
//                   className="alert alert-success position-absolute top-0 z-n1"
//                   role="alert"
//                 >
//                   OTP sent successfully!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img
//                   className="img-fluid main-logo"
//                   src="/mobilelogo.png"
//                   style={{ width: "150px" }}
//                   alt="logo"
//                 />
//                 <h4 className="head-title">Register</h4>
//               </div>
//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div
//                       className="iti iti--allow-dropdown iti--separate-dial-code"
//                       style={{ width: "100%" }}
//                     >
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-controls="iti-0__country-listbox"
//                           aria-expanded={dropdownOpen}
//                           tabIndex="0"
//                           title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
//                           onClick={handleDropdownToggle}
//                           style={{ padding: "10px" }}
//                         >
//                           <div
//                             className={`iti__flag ${selectedCountry.flagClass}`}
//                           ></div>
//                           <div className="iti__selected-dial-code">
//                             {selectedCountry.dialCode}
//                           </div>
//                           <div
//                             className={`iti__arrow ${
//                               dropdownOpen ? "iti__arrow--up" : ""
//                             }`}
//                           ></div>
//                         </div>

//                         {dropdownOpen && (
//                           <ul
//                             className="iti__country-list"
//                             id="iti-0__country-listbox"
//                             role="listbox"
//                             aria-label="List of countries"
//                           >
//                             <li
//                               className="iti_country itipreferred itiactive iti_highlight"
//                               tabIndex="-1"
//                               role="option"
//                               data-dial-code="91"
//                               data-country-code="in"
//                               aria-selected="true"
//                               onClick={() =>
//                                 handleCountrySelect(
//                                   "+91",
//                                   "India (भारत)",
//                                   "iti__in"
//                                 )
//                               }
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">
//                                 India (भारत)
//                               </span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                             {/* Add more countries here */}
//                             <li
//                               className="iti_country itipreferred itiactive iti_highlight"
//                               tabIndex="-1"
//                               role="option"
//                               data-dial-code="91"
//                               data-country-code="in"
//                               aria-selected="true"
//                               onClick={() =>
//                                 handleCountrySelect(
//                                   "+91",
//                                   "India (भारत)",
//                                   "iti__in"
//                                 )
//                               }
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">
//                                 India (भारत)
//                               </span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                           </ul>
//                         )}
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="mobile"
//                         min="10"
//                         max="10"
//                         name="mobile_number"
//                         placeholder="Mobile no"
//                         autoComplete="off"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ paddingLeft: "85px" }}
//                       />
//                       <input
//                         type="hidden"
//                         name="phone_number[full]"
//                         value={`${selectedCountry.dialCode}${phoneNumber}`}
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>
//                     (Must be alphanumeric and more than 6 characters)
//                   </small>
//                 </div>
//                 <div
//                   className="col sm-12"
//                   style={{ lineHeight: 1, padding: 0 }}
//                 >
//                   <small>
//                     By continuing, you will receive a one-time verification code
//                     to your phone number by SMS.
//                   </small>
//                 </div>
//                 {!otpSent && (
//                   <button
//                     type="button"
//                     className="btn btn-primary btn- mt-1"
//                     id="send_otp"
//                     onClick={handleSendOtp1}
//                   >
//                     Get OTP
//                   </button>
//                 )}
//                 {otpSent && (
//                   <div className="form-group" id="otp_group">
//                     <label htmlFor="otp">OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {resendOtp && (
//                       <button
//                         type="button"
//                         className="btn btn-primary mt-1"
//                         id="resend_otp"
//                         onClick={handleResendOtp}
//                       >
//                         Resend OTP
//                       </button>
//                     )}
//                     {!resendOtp && (
//                       <div id="timer-div" style={{ color: "red" }}>
//                         Resend OTP in: <span id="timer">{timer}</span> seconds
//                       </div>
//                     )}
//                   </div>
//                 )}
//                 {otpSent && (
//                   <button
//                     type="button"
//                     className="btn btn-primary mb-5"
//                     id="signup_submit"
//                     onClick={handleSubmit}
//                   >
//                     Signup
//                   </button>
//                 )}
//               </form>
//               <div
//                 className="signUpNew_info"
//                 onClick={() => console.log("Go to Login")}
//               >
//                 <span>Already have an account?</span> &nbsp;
//                 <button
//                   type="button"
//                   className="btn-login"
//                   onClick={handleSigninClick}
//                 >
//                   Login
//                 </button>
//               </div>
//               <div className="loading-div" style={{ display: "none" }}>
//                 <div className="loading"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

      
//       {/* Signin Modal */}
//       {showSignin && <SignIn onClose={handleCloseSignin} />}
//     </>
//   );
// };

// export default SignUp;


// import { useEffect, useRef, useState } from "react";
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [showSignin, setShowSignin] = useState(false);

//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const dropdownRef = useRef(null);

//   // OTP sending function
//   const handleSendOtp1 = async () => {
//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps';

//     const data = {
//       mobile_number: phoneNumber,
//       password: password,
//     };

//     console.log("Sending data:", data);
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('OTP sent successfully:', result);
//         setOtpSent(true); // OTP sent state
//         setAlertSuccess(true); // Show alert
//         setTimeout(() => setAlertSuccess(false), 3000);
//         startOtpTimer(); // Start timer for resend functionality
//       } else {
//         console.error('Error in sending OTP:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error in sending OTP:', error);
//     }
//   };

//   // Timer function for OTP resend
//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//   // Resend OTP
//   const handleResendOtp = () => {
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   // Signup function after OTP validation
//   const handleSubmit = async () => {
//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/signup'; // Use your actual signup API

//     const signupData = {
//       mobile_number: phoneNumber,
//       password: password,
//       otp: otp, // Include OTP in the signup request
//     };

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signupData),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('Signup successful:', result);
//         alert('Account created successfully!');
//         // Handle post-signup logic here, like redirecting to login or homepage
//       } else {
//         console.error('Signup error:', response.statusText);
//         alert('Failed to signup. Please try again.');
//       }
//     } catch (error) {
//       console.error('Signup error:', error);
//       alert('An error occurred during signup.');
//     }
//   };

//   // Handle country selection
//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   // Handle mobile number input
//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Sync mobile state
//   };

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
//                   OTP sent successfully!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img className="img-fluid main-logo" src="/mobilelogo.png" style={{ width: "150px" }} alt="logo" />
//                 <h4 className="head-title">Register</h4>
//               </div>
//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div className="iti" style={{ width: "100%" }}>
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-expanded={dropdownOpen}
//                           onClick={() => setDropdownOpen(!dropdownOpen)}
//                           style={{ padding: "10px" }}
//                         >
//                           <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
//                           <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
//                         </div>
//                         <input
//                           type="number"
//                           className="form-control"
//                           id="mobile"
//                           name="mobile_number"
//                           placeholder="Mobile no"
//                           value={phoneNumber}
//                           onChange={handlePhoneNumberChange}
//                           style={{ paddingLeft: "85px" }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>Must be alphanumeric and more than 6 characters</small>
//                 </div>

//                 {!otpSent && (
//                   <button type="button" className="btn btn-primary" onClick={handleSendOtp1}>
//                     Get OTP
//                   </button>
//                 )}

//                 {otpSent && (
//                   <div className="form-group" id="otp_group">
//                     <label htmlFor="otp">OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {resendOtp ? (
//                       <button type="button" className="btn btn-primary mt-1" onClick={handleResendOtp}>
//                         Resend OTP
//                       </button>
//                     ) : (
//                       <div style={{ color: "red" }}>
//                         Resend OTP in: <span>{timer}</span> seconds
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {otpSent && (
//                   <button type="button" className="btn btn-primary" onClick={handleSubmit}>
//                     Signup
//                   </button>
//                 )}
//               </form>
//               <div className="signUpNew_info">
//                 <span>Already have an account?</span> &nbsp;
//                 <button type="button" className="btn-login" onClick={() => setShowSignin(true)}>
//                   Login
//                 </button>
//               </div>
//               {showSignin && <SignIn onClose={() => setShowSignin(false)} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

// import { useEffect, useRef, useState } from "react";
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [showSignin, setShowSignin] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });

//   const dropdownRef = useRef(null);

//   // Send OTP function
//   const handleSendOtp = async () => {
//     if (!phoneNumber || !password) {
//       alert("Please enter both mobile number and password");
//       return;
//     }

//     setOtpSent(true);
//     setAlertSuccess(true);
//     setTimeout(() => setAlertSuccess(false), 3000);
//     startOtpTimer();

//     // Mock API call for sending OTP
//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; 
//     const data = { mobile_number: phoneNumber, password: password };

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('OTP Sent:', result);
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   // Resend OTP function
//   const handleResendOtp = () => {
//     handleSendOtp(); // Resend the OTP
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   // Start OTP timer
//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//   // Handle signup submission
//   const handleSubmit = () => {
//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }
//     // Proceed with signup process
//     console.log("Signup successful");
//   };

//   // Toggle Signin modal
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the state
//   };

//   // Close Signin modal
//   const handleCloseSignin = () => {
//     setShowSignin(false); // Close the modal
//   };

//   // Handle dropdown toggle
//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle country select
//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   // Handle phone number change
//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Syncing mobile state
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
//                   OTP sent successfully!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img
//                   className="img-fluid main-logo"
//                   src="/mobilelogo.png"
//                   style={{ width: "150px" }}
//                   alt="logo"
//                 />
//                 <h4 className="head-title">Register</h4>
//               </div>

//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-controls="iti-0__country-listbox"
//                           aria-expanded={dropdownOpen}
//                           tabIndex="0"
//                           title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
//                           onClick={handleDropdownToggle}
//                           style={{ padding: "10px" }}
//                         >
//                           <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
//                           <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
//                           <div className={`iti__arrow ${dropdownOpen ? "iti__arrow--up" : ""}`}></div>
//                         </div>

//                         {dropdownOpen && (
//                           <ul
//                             className="iti__country-list"
//                             id="iti-0__country-listbox"
//                             role="listbox"
//                             aria-label="List of countries"
//                           >
//                             {/* Example: Add India */}
//                             <li
//                               className="iti_country"
//                               onClick={() => handleCountrySelect("+91", "India (भारत)", "iti__in")}
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">India (भारत)</span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                             {/* Add more countries here */}
//                           </ul>
//                         )}
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="mobile"
//                         name="mobile_number"
//                         placeholder="Mobile no"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ paddingLeft: "85px" }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>(Must be alphanumeric and more than 6 characters)</small>
//                 </div>

//                 {!otpSent && (
//                   <button type="button" className="btn btn-primary btn- mt-1" onClick={handleSendOtp}>
//                     Get OTP
//                   </button>
//                 )}

//                 {otpSent && (
//                   <div className="form-group" id="otp_group">
//                     <label htmlFor="otp">OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {resendOtp && (
//                       <button type="button" className="btn btn-primary mt-1" onClick={handleResendOtp}>
//                         Resend OTP
//                       </button>
//                     )}
//                     {!resendOtp && (
//                       <div id="timer-div" style={{ color: "red" }}>
//                         Resend OTP in: <span id="timer">{timer}</span> seconds
//                       </div>
//                     )}
//                   </div>
//                 )}

//                 {otpSent && (
//                   <button type="button" className="btn btn-primary mb-5" onClick={handleSubmit}>
//                     Signup
//                   </button>
//                 )}
//               </form>

//               <div className="signUpNew_info" onClick={() => console.log("Go to Login")}>
//                 <span>Already have an account?</span> &nbsp;
//                 <button type="button" className="btn-login" onClick={handleSigninClick}>
//                   Login
//                 </button>
//               </div>

//               {showSignin && <SignIn onClose={handleCloseSignin} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;




// import { useEffect, useRef, useState } from "react";
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [alertError, setAlertError] = useState(false); // New state for error alert
//   const [showSignin, setShowSignin] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });

//   const dropdownRef = useRef(null);

//   // Send OTP function
//   const handleSendOtp = async () => {
//     if (!phoneNumber || !password) {
//       alert("Please enter both mobile number and password");
//       return;
//     }

//     // Show success message
//     setOtpSent(true);
//     setAlertSuccess(true);
//     setTimeout(() => setAlertSuccess(false), 3000);
//     startOtpTimer();

//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; 
//     const data = { mobile_number: phoneNumber, password: password };

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('OTP Sent:', result);
//         if (result.status !== "success") {
//           throw new Error(result.message);
//         }
//       } else {
//         throw new Error('Failed to send OTP, please check the API response.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertError(true); // Show error alert
//       setTimeout(() => setAlertError(false), 3000); // Hide after 3 seconds
//     }
//   };

//   // Resend OTP function
//   const handleResendOtp = () => {
//     handleSendOtp(); // Resend the OTP
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   // Start OTP timer
//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//   // Handle signup submission
//   const handleSubmit = () => {
//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }
//     // Proceed with signup process
//     console.log("Signup successful");
//   };

//   // Toggle Signin modal
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the state
//   };

//   // Close Signin modal
//   const handleCloseSignin = () => {
//     setShowSignin(false); // Close the modal
//   };

//   // Handle dropdown toggle
//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle country select
//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   // Handle phone number change
//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Syncing mobile state
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
//                   OTP sent successfully!
//                 </div>
//               )}
//               {alertError && (
//                 <div className="alert alert-danger position-absolute top-0 z-n1" role="alert">
//                   Error sending OTP. Please try again!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img
//                   className="img-fluid main-logo"
//                   src="/mobilelogo.png"
//                   style={{ width: "150px" }}
//                   alt="logo"
//                 />
//                 <h4 className="head-title">Register</h4>
//               </div>

//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-controls="iti-0__country-listbox"
//                           aria-expanded={dropdownOpen}
//                           tabIndex="0"
//                           title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
//                           onClick={handleDropdownToggle}
//                           style={{ padding: "10px" }}
//                         >
//                           <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
//                           <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
//                           <div className={`iti__arrow ${dropdownOpen ? "iti__arrow--up" : ""}`}></div>
//                         </div>

//                         {dropdownOpen && (
//                           <ul
//                             className="iti__country-list"
//                             id="iti-0__country-listbox"
//                             role="listbox"
//                             aria-label="List of countries"
//                           >
//                             <li
//                               className="iti_country"
//                               onClick={() => handleCountrySelect("+91", "India (भारत)", "iti__in")}
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">India (भारत)</span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                           </ul>
//                         )}
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="mobile"
//                         name="mobile_number"
//                         placeholder="Mobile no"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ paddingLeft: "85px" }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>(Must be alphanumeric and more than 6 characters)</small>
//                 </div>

//                 {!otpSent && (
//                   <button type="button" className="btn btn-primary btn- mt-1" onClick={handleSendOtp}>
//                     Get OTP
//                   </button>
//                 )}

//                 {otpSent && (
//                   <div className="form-group" id="otp_group">
//                     <label htmlFor="otp">OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {resendOtp && (
//                       <button type="button" className="btn btn-primary mt-2" onClick={handleResendOtp}>
//                         Resend OTP
//                       </button>
//                     )}
//                     {!resendOtp && (
//                       <button className="btn btn-secondary mt-2" disabled>
//                         Resend OTP in {timer}s
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 <button type="button" className="btn btn-primary btn- mt-3" onClick={handleSubmit}>
//                   Sign Up
//                 </button>
//               </form>

//               <div className="col-12 text-center py-3">
//                 <p className="signIn text-dark">
//                   Already have an account?{" "}
//                   <span className="text-primary" style={{ cursor: "pointer" }} onClick={handleSigninClick}>
//                     Signin
//                   </span>
//                 </p>
//               </div>

//               {showSignin && <SignIn onClose={handleCloseSignin} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;



// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";  // Import useNavigate
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [alertError, setAlertError] = useState(false); // New state for error alert
//   const [showSignin, setShowSignin] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });

//   const dropdownRef = useRef(null);
  
//   const navigate = useNavigate();  // Initialize useNavigate

//   // Send OTP function
//   const handleSendOtp = async () => {
//     if (!phoneNumber || !password) {
//       alert("Please enter both mobile number and password");
//       return;
//     }

//     // Show success message
//     setOtpSent(true);
//     setAlertSuccess(true);
//     setTimeout(() => setAlertSuccess(false), 3000);
//     startOtpTimer();

//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; 
//     const data = { mobile_number: phoneNumber, password: password };


//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('OTP Sent:', result);
//         if (result.status !== "success") {
//           throw new Error(result.message);
//         }
//       } else {
//         throw new Error('Failed to send OTP, please check the API response.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertError(true); // Show error alert
//       setTimeout(() => setAlertError(false), 3000); // Hide after 3 seconds
//     }
//   };

//   // Resend OTP function
//   const handleResendOtp = () => {
//     handleSendOtp(); // Resend the OTP
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   // Start OTP timer
//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//   // Handle signup submission
//   const handleSubmit = async () => {
//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }

//     // Proceed with signup process
//     console.log("Signup successful");

//     // Redirect to home page after signup
//     navigate("/home");  // Redirect to the homepage
//   };

//   // Toggle Signin modal
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the state
//   };

//   // Close Signin modal
//   const handleCloseSignin = () => {
//     setShowSignin(false); // Close the modal
//   };

//   // Handle dropdown toggle
//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle country select
//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   // Handle phone number change
//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Syncing mobile state
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
//                   OTP sent successfully!
//                 </div>
//               )}
//               {alertError && (
//                 <div className="alert alert-danger position-absolute top-0 z-n1" role="alert">
//                   Error sending OTP. Please try again!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img
//                   className="img-fluid main-logo"
//                   src="/mobilelogo.png"
//                   style={{ width: "150px" }}
//                   alt="logo"
//                 />
//                 <h4 className="head-title">Register</h4>
//               </div>

//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-controls="iti-0__country-listbox"
//                           aria-expanded={dropdownOpen}
//                           tabIndex="0"
//                           title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
//                           onClick={handleDropdownToggle}
//                           style={{ padding: "10px" }}
//                         >
//                           <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
//                           <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
//                           <div className={`iti__arrow ${dropdownOpen ? "iti__arrow--up" : ""}`}></div>
//                         </div>

//                         {dropdownOpen && (
//                           <ul
//                             className="iti__country-list"
//                             id="iti-0__country-listbox"
//                             role="listbox"
//                             aria-label="List of countries"
//                           >
//                             <li
//                               className="iti_country"
//                               onClick={() => handleCountrySelect("+91", "India (भारत)", "iti__in")}
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">India (भारत)</span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                           </ul>
//                         )}
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="mobile"
//                         name="mobile_number"
//                         placeholder="Mobile no"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ paddingLeft: "85px" }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>(Must be alphanumeric and more than 6 characters)</small>
//                 </div>

//                 {!otpSent && (
//                   <button type="button" className="btn btn-primary btn- mt-1" onClick={handleSendOtp}>
//                     Get OTP
//                   </button>
//                 )}

//                 {otpSent && (
//                   <div className="form-group" id="otp_group">
//                     <label htmlFor="otp">OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="otp"
//                       name="otp"
//                       placeholder="Enter OTP"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {resendOtp ? (
//                       <button className="btn btn-warning mt-2" onClick={handleResendOtp}>
//                         Resend OTP
//                       </button>
//                     ) : (
//                       <button className="btn btn-secondary mt-2" disabled>
//                         Resend OTP in {timer}s
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 <button type="button" className="btn btn-primary btn- mt-3" onClick={handleSubmit}>
//                   Sign Up
//                 </button>
//               </form>

//               <div className="col-12 text-center py-3">
//                 <p className="signIn text-dark">
//                   Already have an account?{" "}
//                   <span className="text-primary" style={{ cursor: "pointer" }} onClick={handleSigninClick}>
//                     Signin
//                   </span>
//                 </p>
//               </div>

//               {showSignin && <SignIn onClose={handleCloseSignin} />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;






// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";  // Import useNavigate
// import "../ModuleCss/Signup.css";
// import SignIn from "./Signin";

// const SignUp = () => {
//   const [mobile, setMobile] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpSent, setOtpSent] = useState(false);
//   const [resendOtp, setResendOtp] = useState(false);
//   const [timer, setTimer] = useState(30);
//   const [alertSuccess, setAlertSuccess] = useState(false);
//   const [alertError, setAlertError] = useState(false); // New state for error alert
//   const [showSignin, setShowSignin] = useState(false);
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState({
//     dialCode: "+91",
//     countryName: "India (भारत)",
//     flagClass: "iti__in",
//   });

//   const dropdownRef = useRef(null);
  
//   const navigate = useNavigate();  // Initialize useNavigate

//   // Send OTP function
//   const handleSendOtp = async () => {
//     if (!phoneNumber || !password) {
//       alert("Please enter both mobile number and password");
//       return;
//     }

//     // Validate phone number
//     const phonePattern = /^[0-9]{10}$/;
//     if (!phonePattern.test(phoneNumber)) {
//       alert("Please enter a valid 10-digit mobile number.");
//       return;
//     }

//     // Validate password
//     const passwordPattern = /^([A-Za-z])/;
//     if (!passwordPattern.test(password)) {
//       alert("Password must be alphanumeric and at least 6 characters long.");
//       return;
//     }

//     // Show success message
//     setOtpSent(true);
//     setAlertSuccess(true);
//     setTimeout(() => setAlertSuccess(false), 3000);
//     startOtpTimer();

//     const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; 
//     const data = { mobile_number: phoneNumber, password: password };
    
//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         console.log('OTP Sent:', result);
//         if (result.status !== "success") {
//           throw new Error(result.message);
//         }
//       } else {
//         throw new Error('Failed to send OTP, please check the API response.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setAlertError(true); // Show error alert
//       setTimeout(() => setAlertError(false), 3000); // Hide after 3 seconds
//     }
//   };

//   // Resend OTP function
//   const handleResendOtp = () => {
//     handleSendOtp(); // Resend the OTP
//     setResendOtp(false);
//     setTimer(30);
//     startOtpTimer();
//   };

//   // Start OTP timer
//   const startOtpTimer = () => {
//     let time = 30;
//     const interval = setInterval(() => {
//       time -= 1;
//       setTimer(time);
//       if (time === 0) {
//         clearInterval(interval);
//         setResendOtp(true);
//       }
//     }, 1000);
//   };

//   // Handle signup submission
//   const handleSubmit = async () => {
//     if (!otp) {
//       alert("Please enter the OTP");
//       return;
//     }

//     // Proceed with signup process
//     console.log("Signup successful");

//     // Redirect to home page after signup
//     navigate("/home");  // Redirect to the homepage
//   };

//   // Toggle Signin modal
//   const handleSigninClick = () => {
//     setShowSignin((prevState) => !prevState); // Toggle the state
//   };

//   // Close Signin modal
//   const handleCloseSignin = () => {
//     setShowSignin(false); // Close the modal
//   };

//   // Handle dropdown toggle
//   const handleDropdownToggle = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   // Handle country select
//   const handleCountrySelect = (dialCode, countryName, flagClass) => {
//     setSelectedCountry({ dialCode, countryName, flagClass });
//     setDropdownOpen(false);
//   };

//   // Handle phone number change
//   const handlePhoneNumberChange = (e) => {
//     const value = e.target.value;
//     setPhoneNumber(value);
//     setMobile(value); // Syncing mobile state
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (
//     <>
//       <div className="sign-up-page-wrap">
//         <div className="signUpUi">
//           <div className="container-fluid">
//             <div className="row">
//               {alertSuccess && (
//                 <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
//                   OTP sent successfully!
//                 </div>
//               )}
//               {alertError && (
//                 <div className="alert alert-danger position-absolute top-0 z-n1" role="alert">
//                   Error sending OTP. Please try again!
//                 </div>
//               )}
//               <div className="col-12 text-center pt-3">
//                 <img
//                   className="img-fluid main-logo"
//                   src="/mobilelogo.png"
//                   style={{ width: "150px" }}
//                   alt="logo"
//                 />
//                 <h4 className="head-title">Register</h4>
//               </div>

//               <form className="col-sm-12 mx-auto" id="signup_form">
//                 <div className="form-group">
//                   <label htmlFor="mobile">Mobile</label>
//                   <div className="input-group">
//                     <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>
//                       <div className="iti__flag-container" ref={dropdownRef}>
//                         <div
//                           className="iti__selected-flag"
//                           role="combobox"
//                           aria-controls="iti-0__country-listbox"
//                           aria-expanded={dropdownOpen}
//                           tabIndex="0"
//                           title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
//                           onClick={handleDropdownToggle}
//                           style={{ padding: "10px" }}
//                         >
//                           <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
//                           <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
//                           <div className={`iti__arrow ${dropdownOpen ? "iti__arrow--up" : ""}`}></div>
//                         </div>

//                         {dropdownOpen && (
//                           <ul
//                             className="iti__country-list"
//                             id="iti-0__country-listbox"
//                             role="listbox"
//                             aria-label="List of countries"
//                           >
//                             <li
//                               className="iti_country"
//                               onClick={() => handleCountrySelect("+91", "India (भारत)", "iti__in")}
//                             >
//                               <div className="iti__flag-box">
//                                 <div className="iti_flag iti_in"></div>
//                               </div>
//                               <span className="iti__country-name">India (भारत)</span>
//                               <span className="iti__dial-code">+91</span>
//                             </li>
//                           </ul>
//                         )}
//                       </div>
//                       <input
//                         type="number"
//                         className="form-control"
//                         id="mobile"
//                         name="mobile_number"
//                         placeholder="Mobile no"
//                         value={phoneNumber}
//                         onChange={handlePhoneNumberChange}
//                         style={{ paddingLeft: "85px" }}
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="password">Password</label>
//                   <input
//                     type="password"
//                     className="form-control"
//                     id="password"
//                     name="password"
//                     placeholder="Choose your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <small style={{ color: "red" }}>(Must be alphanumeric and more than 6 characters)</small>
//                 </div>

//                 {!otpSent && (
//                   <button type="button" className="btn btn-primary btn- mt-1" onClick={handleSendOtp}>
//                     Get OTP
//                   </button>
//                 )}

//                 {otpSent && (
//                   <div className="otp-section">
//                     <label>Enter OTP</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                     />
//                     {timer > 0 && <p>Resend OTP in {timer} seconds</p>}
//                     {resendOtp && (
//                       <button type="button" className="btn btn-link" onClick={handleResendOtp}>
//                         Resend OTP
//                       </button>
//                     )}
//                   </div>
//                 )}

//                 {/* Conditionally render Submit button */}
//                 {otpSent && (
//                   <div className="form-group">
//                     <button type="button" className="btn btn-success" onClick={handleSubmit}>
//                       Submit
//                     </button>
//                   </div>
//                 )}
//               </form>

//               <button className="btn btn-link" onClick={handleSigninClick}>
//                 Already have an account? Sign in here
//               </button>
//               {showSignin && <SignIn />}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;




import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../ModuleCss/Signup.css";
import SignIn from "./Signin";

const SignUp = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [resendOtp, setResendOtp] = useState(false);
  const [timer, setTimer] = useState(30);
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertError, setAlertError] = useState(false); // New state for error alert
  const [showSignin, setShowSignin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    dialCode: "+91",
    countryName: "India (भारत)",
    flagClass: "iti__in",
  });

  const dropdownRef = useRef(null);
  
  const navigate = useNavigate();  // Initialize useNavigate

  // Send OTP function
  const handleSendOtp = async () => {
    if (!phoneNumber || !password) {
      alert("Please enter both mobile number and password");
      return;
    }

    // Validate phone number
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Validate password
    const passwordPattern = /^([A-Za-z])/;
    if (!passwordPattern.test(password)) {
      alert("Password must be alphanumeric and at least 6 characters long.");
      return;
    }

    // Show success message
    setOtpSent(true);
    setAlertSuccess(true);
    setTimeout(() => setAlertSuccess(false), 3000);
    startOtpTimer();

    const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/send-otps'; 
    const data = { mobile_number: phoneNumber, password: password };
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('OTP Sent:', result);
        if (result.status !== "success") {
          throw new Error(result.message);
        }
      } else {
        throw new Error('Failed to send OTP, please check the API response.');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertError(true); // Show error alert
      setTimeout(() => setAlertError(false), 3000); // Hide after 3 seconds
    }
  };

  // Verify OTP function
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    const apiUrl = 'https://dev.hub2technologies.com/reddybookbackend/public/api/verify-otps';
    const data = { mobile_number: phoneNumber, otp: otp };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        if (result.status === "success") {
          // Save the token to the session
          sessionStorage.setItem('token', result.token);
          sessionStorage.setItem('user', JSON.stringify(result.user));

          // Redirect to home page after successful OTP verification
          navigate("/home");
        } else {
          throw new Error(result.message);
        }
      } else {
        throw new Error('Failed to verify OTP, please check the API response.');
      }
    } catch (error) {
      console.error('Error:', error);
      setAlertError(true); // Show error alert
      setTimeout(() => setAlertError(false), 3000); // Hide after 3 seconds
    }
  };

  // Resend OTP function
  const handleResendOtp = () => {
    handleSendOtp(); // Resend the OTP
    setResendOtp(false);
    setTimer(30);
    startOtpTimer();
  };

  // Start OTP timer
  const startOtpTimer = () => {
    let time = 30;
    const interval = setInterval(() => {
      time -= 1;
      setTimer(time);
      if (time === 0) {
        clearInterval(interval);
        setResendOtp(true);
      }
    }, 1000);
  };

  // Handle signup submission
  const handleSubmit = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }

    // Proceed with signup process
    console.log("Signup successful");

    // Redirect to home page after signup
    navigate("/home");  // Redirect to the homepage
  };

  // Toggle Signin modal
  const handleSigninClick = () => {
    setShowSignin((prevState) => !prevState); // Toggle the state
  };

  // Close Signin modal
  const handleCloseSignin = () => {
    setShowSignin(false); // Close the modal
  };

  // Handle dropdown toggle
  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Handle country select
  const handleCountrySelect = (dialCode, countryName, flagClass) => {
    setSelectedCountry({ dialCode, countryName, flagClass });
    setDropdownOpen(false);
  };

  // Handle phone number change
  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    setPhoneNumber(value);
    setMobile(value); // Syncing mobile state
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <>
      <div className="sign-up-page-wrap">
        <div className="signUpUi">
          <div className="container-fluid">
            <div className="row">
              {alertSuccess && (
                <div className="alert alert-success position-absolute top-0 z-n1" role="alert">
                  OTP sent successfully!
                </div>
              )}
              {alertError && (
                <div className="alert alert-danger position-absolute top-0 z-n1" role="alert">
                  Error sending OTP. Please try again!
                </div>
              )}
              <div className="col-12 text-center pt-3">
                <img
                  className="img-fluid main-logo"
                  src="/mobilelogo.png"
                  style={{ width: "150px" }}
                  alt="logo"
                />
                <h4 className="head-title">Register</h4>
              </div>

              <form className="col-sm-12 mx-auto" id="signup_form">
                <div className="form-group">
                  <label htmlFor="mobile">Mobile</label>
                  <div className="input-group">
                    <div className="iti iti--allow-dropdown iti--separate-dial-code" style={{ width: "100%" }}>
                      <div className="iti__flag-container" ref={dropdownRef}>
                        <div
                          className="iti__selected-flag"
                          role="combobox"
                          aria-controls="iti-0__country-listbox"
                          aria-expanded={dropdownOpen}
                          tabIndex="0"
                          title={`${selectedCountry.countryName}: ${selectedCountry.dialCode}`}
                          onClick={handleDropdownToggle}
                          style={{ padding: "10px" }}
                        >
                          <div className={`iti__flag ${selectedCountry.flagClass}`}></div>
                          <div className="iti__selected-dial-code">{selectedCountry.dialCode}</div>
                          <div className={`iti__arrow ${dropdownOpen ? "iti__arrow--up" : ""}`}></div>
                        </div>

                        {dropdownOpen && (
                          <ul
                            className="iti__country-list"
                            id="iti-0__country-listbox"
                            role="listbox"
                            aria-label="List of countries"
                          >
                            <li
                              className="iti_country"
                              onClick={() =>
                                handleCountrySelect("+91", "India (भारत)", "iti__in")
                              }
                            >
                              <div className="iti__flag-container">
                                <div className="iti__flag iti__in"></div>
                                <span className="iti__country-name">India (भारत)</span>
                                <span className="iti__dial-code">+91</span>
                              </div>
                            </li>
                          </ul>
                        )}
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Mobile Number"
                        onChange={handlePhoneNumberChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  {otpSent ? (
                    <>
                      <label htmlFor="otp">OTP</label>
                      <input
                        type="text"
                        className="form-control"
                        id="otp"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleVerifyOtp}
                      >
                        Verify OTP
                      </button>
                      {timer === 0 ? (
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleResendOtp}
                        >
                          Resend OTP
                        </button>
                      ) : (
                        <span className="otp-timer">Resend OTP in {timer} seconds</span>
                      )}
                    </>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleSendOtp}
                    >
                      Get OTP
                    </button>
                  )}
                </div>
              </form>
              <div className="form-group">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleSigninClick}
                >
                  {showSignin ? "Close SignIn" : "SignIn"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
