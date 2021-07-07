import React, { Component } from "react";
import { connect } from 'react-redux';
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { SetToken, logoutPortal, checkAuthentication } from '../../actions/actions'

const CLIENT_ID =
  "849044581763-ahri2hbnkfcr6qcmv20g90kvbr89sonp.apps.googleusercontent.com";

class GoogleBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogined: false,
      accessToken: "",
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }
  componentDidMount() {
    this.checkLoggedIn();
  }
  checkLoggedIn() {
    this.props.checkAuthentication();
  }

  login(response) {
    if (response.accessToken) {
      this.props.loginToPortal(response.accessToken);
    }
  }

  logout(response) {
    this.props.logoutPortal();
  }

  handleLoginFailure(response) {
    alert("Failed to log in");
  }

  handleLogoutFailure(response) {
    alert("Failed to log out");
  }
  isLogIn() {
    const user = this.props.loginData.accessToken;
    if (user) {
      return true
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        {this.isLogIn() ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={this.handleLoginFailure}
              cookiePolicy={"single_host_origin"}
              responseType="code,token"
            />
          )}
        {this.isLogIn() ? (
          <h5>
            Your Access Token: <br />
            <br /> {this.props.loginData.accessToken}
          </h5>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginData: state.common
  };
};

const mapDispatchToProps = dispatch => ({
  loginToPortal: (data) => dispatch(SetToken(data)),
  logoutPortal: () => dispatch(logoutPortal()),
  checkAuthentication: () => dispatch(checkAuthentication()),
})

export default connect(mapStateToProps, mapDispatchToProps)(GoogleBtn);
