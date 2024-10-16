// import { Carousel } from "react-bootstrap";
// import { useState } from "react";
// import "../ModuleCss/SignIn.css";
// import { NavLink } from "react-router-dom";

// const SignIn = () => {
//   const [showModal, setShowModal] = useState(true);
//   const handleClose = () => setShowModal(false);

//   return (
//     <div
//       className={`modal fade login-popup ${showModal ? "in show" : ""}`}
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="dialog-login-name"
//       aria-hidden={!showModal}
//       style={{ display: showModal ? "block" : "none" }}
//     >
//       <div className="modal-dialog modal-lg modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-body">
//             <button
//               type="button"
//               aria-label="Close"
//               className="btn-close close pull-right"
//               onClick={handleClose}
//             >
//               <span aria-hidden="true">×</span>
//             </button>
//             <section className="login-block">
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-lg-6 col-md-6 col-12  login-sec">
//                     <h2 className="text-center text-white formText position-relative mb-4">
//                       Login Now
//                     </h2>
//                     <form noValidate className="login-form">
//                       <div className="form-group">
//                         <label
//                           htmlFor="exampleInputEmail1"
//                           className="text-uppercase"
//                         >
//                           Username / Mobile Number
//                         </label>
//                         <input
//                           type="text"
//                           name="username"
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label
//                           htmlFor="exampleInputPassword1"
//                           className="text-uppercase"
//                         >
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           name="password"
//                           className="form-control"
//                         />
//                       </div>
//                       <div className="form-check">
//                         <label className="form-check-label">
//                           <input type="checkbox" className="form-check-input" />
//                           <span>Remember Me?</span>
//                         </label>
//                       </div>
//                       <div className="form-group text-center">
//                         <a href="" className="fp">
//                           Forgot Password
//                         </a>
//                       </div>
//                       <button
//                         type="submit"
//                         className="btn button-login btn-login"
//                       >
//                         Log In
//                       </button>
//                       <NavLink to="/demo"
//                         type="button"
//                         className="btn button-login btn-login"
//                       >
//                         Login with Demo ID
//                       </NavLink>
//                     </form>
//                     <div className="copy-text">
//                       Powered by <a href="">reddybook</a>
//                       <p>
//                         <a href="mailto:reddybook.clubofficial@gmail.com">
//                           reddyanna@gmail.com
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 col-md-6 col-12 banner-sec d-none d-sm-block">
//                     <div className="banner-sec-content">
//                       <Carousel
//                         id="carouselExampleIndicators2"
//                         interval={3000}
//                         controls
//                       >
//                         <Carousel.Item>
//                           <img
//                             src="/log_one.png"
//                             className="img-fluid"
//                             alt="Slide 1"
//                           />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img
//                             src="/log_two.png"
//                             className="img-fluid"
//                             alt="Slide 2"
//                           />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img
//                             src="/log_three.png"
//                             className="img-fluid"
//                             alt="Slide 3"
//                           />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img
//                             src="/log_four.png"
//                             className="img-fluid"
//                             alt="Slide 4"
//                           />
//                         </Carousel.Item>
//                       </Carousel>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



// import { Carousel } from "react-bootstrap";
// import { useState } from "react";
// import "../ModuleCss/SignIn.css";
// import { NavLink, useNavigate } from "react-router-dom";  // Updated import

// const SignIn = () => {
//   const [showModal, setShowModal] = useState(true);
//   const [username, setUsername] = useState("");  // To store the mobile number/username
//   const [password, setPassword] = useState("");  // To store the password
//   const [error, setError] = useState(""); // To store error message if login fails
//   const [isLoading, setIsLoading] = useState(false); // To show loading state
//   const navigate = useNavigate(); // Use navigate instead of useHistory

//   const handleClose = () => setShowModal(false);

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission

//     if (!username || !password) {
//       setError("Please enter both username and password.");
//       return;
//     }

//     setIsLoading(true); // Show loading state

//     try {
//       const response = await fetch("https://dev.hub2technologies.com/reddybookbackend/public/api/logins", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           mobile_number: username,
//           password: password,
//         }),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         // If login successful, store token in session storage
//         sessionStorage.setItem("token", result.token);
//         setError(""); // Clear any previous errors
//         navigate("/dashboard"); // Redirect to the dashboard
//       } else {
//         // If login failed, show error message
//         setError(result.message || "Login failed, please check your credentials.");
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again later.", error);
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div
//       className={`modal fade login-popup ${showModal ? "in show" : ""}`}
//       tabIndex="-1"
//       role="dialog"
//       aria-labelledby="dialog-login-name"
//       aria-hidden={!showModal}
//       style={{ display: showModal ? "block" : "none" }}
//     >
//       <div className="modal-dialog modal-lg modal-dialog-centered">
//         <div className="modal-content">
//           <div className="modal-body">
//             <button
//               type="button"
//               aria-label="Close"
//               className="btn-close close pull-right"
//               onClick={handleClose}
//             >
//               <span aria-hidden="true">×</span>
//             </button>
//             <section className="login-block">
//               <div className="container">
//                 <div className="row align-items-center">
//                   <div className="col-lg-6 col-md-6 col-12 login-sec">
//                     <h2 className="text-center text-white formText position-relative mb-4">
//                       Login Now
//                     </h2>
//                     <form noValidate className="login-form" onSubmit={handleSubmit}>
//                       <div className="form-group">
//                         <label htmlFor="exampleInputEmail1" className="text-uppercase">
//                           Username / Mobile Number
//                         </label>
//                         <input
//                           type="text"
//                           name="username"
//                           className="form-control"
//                           value={username}
//                           onChange={(e) => setUsername(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="exampleInputPassword1" className="text-uppercase">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           name="password"
//                           className="form-control"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                         />
//                       </div>
//                       <div className="form-check">
//                         <label className="form-check-label">
//                           <input type="checkbox" className="form-check-input" />
//                           <span>Remember Me?</span>
//                         </label>
//                       </div>
//                       <div className="form-group text-center">
//                         <a href="" className="fp">
//                           Forgot Password
//                         </a>
//                       </div>
//                       <button type="submit" className="btn button-login btn-login" disabled={isLoading}>
//                         {isLoading ? "Logging in..." : "Log In"}
//                       </button>
//                       <NavLink to="/demo" type="button" className="btn button-login btn-login">
//                         Login with Demo ID
//                       </NavLink>
//                     </form>
//                     {error && <p className="text-danger text-center">{error}</p>} {/* Error message */}
//                     <div className="copy-text">
//                       Powered by <a href="">reddybook</a>
//                       <p>
//                         <a href="mailto:reddybook.clubofficial@gmail.com">
//                           reddyanna@gmail.com
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-lg-6 col-md-6 col-12 banner-sec d-none d-sm-block">
//                     <div className="banner-sec-content">
//                       <Carousel id="carouselExampleIndicators2" interval={3000} controls>
//                         <Carousel.Item>
//                           <img src="/log_one.png" className="img-fluid" alt="Slide 1" />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img src="/log_two.png" className="img-fluid" alt="Slide 2" />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img src="/log_three.png" className="img-fluid" alt="Slide 3" />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                           <img src="/log_four.png" className="img-fluid" alt="Slide 4" />
//                         </Carousel.Item>
//                       </Carousel>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;


import { Carousel } from "react-bootstrap";
import { useState } from "react";
import "../ModuleCss/SignIn.css";
import { NavLink, useNavigate } from "react-router-dom";  // Updated import

const SignIn = () => {
  const [showModal, setShowModal] = useState(true);
  const [username, setUsername] = useState("");  // To store the mobile number/username
  const [password, setPassword] = useState("");  // To store the password
  const [error, setError] = useState(""); // To store error message if login fails
  const [isLoading, setIsLoading] = useState(false); // To show loading state
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const handleClose = () => setShowModal(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setIsLoading(true); // Show loading state

    try {
      const response = await fetch("https://dev.hub2technologies.com/reddybookbackend/public/api/logins", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile_number: username,
          password: password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // If login successful, store token in session storage
        sessionStorage.setItem("token", result.token);
        setError(""); // Clear any previous errors
        setShowModal(false); // Close the modal on successful login
        navigate("/home"); // Redirect to the dashboard
      } else {
        // If login failed, show error message
        setError(result.message || "Login failed, please check your credentials.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div
      className={`modal fade login-popup ${showModal ? "in show" : ""}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="dialog-login-name"
      aria-hidden={!showModal}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <button
              type="button"
              aria-label="Close"
              className="btn-close close pull-right"
              onClick={handleClose}
            >
              <span aria-hidden="true">×</span>
            </button>
            <section className="login-block">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 col-12 login-sec">
                    <h2 className="text-center text-white formText position-relative mb-4">
                      Login Now
                    </h2>
                    <form noValidate className="login-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className="text-uppercase">
                          Username / Mobile Number
                        </label>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className="text-uppercase">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check">
                        <label className="form-check-label">
                          <input type="checkbox" className="form-check-input" />
                          <span>Remember Me?</span>
                        </label>
                      </div>
                      <div className="form-group text-center">
                        <a href="" className="fp">
                          Forgot Password
                        </a>
                      </div>
                      <button type="submit" className="btn button-login btn-login" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Log In"}
                      </button>
                      <NavLink to="/demo" type="button" className="btn button-login btn-login">
                        Login with Demo ID
                      </NavLink>
                    </form>
                    {error && <p className="text-danger text-center">{error}</p>} {/* Error message */}
                    <div className="copy-text">
                      Powered by <a href="">reddybook</a>
                      <p>
                        <a href="mailto:reddybook.clubofficial@gmail.com">
                          reddyanna@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12 banner-sec d-none d-sm-block">
                    <div className="banner-sec-content">
                      <Carousel id="carouselExampleIndicators2" interval={3000} controls>
                        <Carousel.Item>
                          <img src="/log_one.png" className="img-fluid" alt="Slide 1" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src="/log_two.png" className="img-fluid" alt="Slide 2" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src="/log_three.png" className="img-fluid" alt="Slide 3" />
                        </Carousel.Item>
                        <Carousel.Item>
                          <img src="/log_four.png" className="img-fluid" alt="Slide 4" />
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
