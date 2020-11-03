import React, { useState } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import ActionType from "../../../redux/actions/ActionType";
import AuthAction from "../../../redux/actions/AuthAction";

function LogIn(props) {
  const { login } = props;
  const [userRequest, setuserRequest] = useState({});
  const history = useHistory();

  const isValidate = () => {
    if (userRequest.email && userRequest.password) {
      return true;
    }
    return false;
  };

  return (
    <div>
      <Header />
      <div className="sign-in-main">
        <div className="container d-flex">
          <div className="sign-in-container py-5 m-auto border">
            <div className="sign-in-header">
              <h4 className="font-weight-bold">Sign In</h4>
              <p className="sign-in-intro">
                <span className="text-muted">New to Food Delivery App ? </span>
                <Link to="/signup">
                  <span className="text-danger font-weight-bold">Sign Up</span>
                </Link>
              </p>
              <div className="login-social-media py-3">
                <button className="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </div>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                login(userRequest.email, userRequest.password, history);
              }}
            >
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  onChange={(event) => {
                    setuserRequest({
                      ...userRequest,
                      ...{ email: event.target.value },
                    });
                  }}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword1">Password</label>
                <input
                  type="password"
                  onChange={(event) => {
                    setuserRequest({
                      ...userRequest,
                      ...{ password: event.target.value },
                    });
                  }}
                  className="form-control form-control-sm"
                />
              </div>
              <button
                type="submit"
                className="btn btn-danger btn-sm"
                disabled={!isValidate()}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password, history) => {
      dispatch(AuthAction().Login(email, password, history));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
