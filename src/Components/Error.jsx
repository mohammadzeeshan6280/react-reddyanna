import { NavLink, useRouteError } from "react-router-dom";
import styled from "styled-components";


function Error() {
  const Wrapper = styled.figure`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Img = styled.img({});

  const boxName = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const error = useRouteError();
  // const navigate = useNavigate();

  // const handleGoBack = () => {
  //   // navigate("/");
  //   navigate(-1);
  // };

  if (error.status === 404) {
    return (
      <section className=" error-section">
        <div id="error-text">
          <Wrapper>
            <Img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </Wrapper>
          <div className="box-div" style={boxName}>
            <div className="text-center">
              <p className="p-a">
                . The page you were looking for could not be found
              </p>
              <p className="p-b">... Back to previous page</p>
            </div>
            <NavLink to="/" className="btn">
            Go Back To HomePage
          </NavLink>
            {/* <button className="btn" onClick={handleGoBack}>
              Go Back
            </button> */}
          </div>
        </div>
      </section>
    );
  }
  console.log(error);
  return (
    <>
      <h2>404 Error Page</h2>
    </>
  );
}

export default Error;