import { GoogleLogin, GoogleLogout } from "react-google-login";

const headerStyle = {
  fontSize: "3rem",
  margin: "10px",
  display: "flex",
  marginLeft: "35%",
  height: "100px",
  color: "brown",
};

const pStyle = {
  marginRight: "500px",
  marginTop: "25px",
  marginLeft: "10px",
};

const Header = ({ logged, setLogged, setAccessToken }) => {
  const CLIENT_ID =
    "612850870483-6mkno5l9a1hdje8ohons5i78rh6o0240.apps.googleusercontent.com";

  const logoutSuccess = (response) => {
    setLogged(false);
    setAccessToken("");
  };

  const logoutFailed = (response) => {
    console.log(response);
    alert("Logout Failed!");
  };

  const loginSuccess = (response) => {
    if (response.accessToken) {
      setLogged(true);
      setAccessToken(response.profileObj.googleId);
    }
  };

  const loginFailed = (response) => {
    console.log(response);
  };

  return (
    <div>
      <div className="header" style={headerStyle}>
        <header style={pStyle}>Video Streamer</header>
        {logged ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={logoutSuccess}
            onFailure={logoutFailed}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={loginSuccess}
            onFailure={loginFailed}
            cookiePolicy={"single_host_origin"}
            responseType="code,token"
            isSignedIn={true}
          ></GoogleLogin>
        )}
      </div>
      <hr />
    </div>
  );
};

export default Header;
