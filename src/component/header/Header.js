import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import AuthAction from "../../redux/actions/AuthAction";

function Header(props) {
  const history = useHistory();
  const { isLoggedIn, logout } = props;

  return (
    <div className="header d-flex py-2 shadow-sm">
      <h5 className="font-weight-bold text-danger ml-4">Food Delivery App</h5>
      <div className="ml-auto">
        {!isLoggedIn ? (
          <React.Fragment>
            <Link to="login">
              <button className="btn btn-primary btn-sm mx-2">Login</button>
            </Link>
            <Link to="signup">
              <button className="btn btn-primary btn-sm mr-5">Sign up</button>
            </Link>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <button
              className="btn btn-primary btn-sm mx-2"
              onClick={() => {
                logout(history);
              }}
            >
              Log Out
            </button>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (history) => {
      dispatch(AuthAction().LogOut(history));
    },
  };
};
export default connect((state) => state, mapDispatchToProps)(Header);
