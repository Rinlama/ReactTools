import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";

function Signup() {
  return (
    <div>
      <Header />
      <div class="sign-in-main">
        <div class="container d-flex">
          <div class="sign-in-container py-5 m-auto border">
            <div class="sign-in-header">
              <h4 class="font-weight-bold">Sign Up</h4>
              <p class="sign-in-intro">
                <span class="text-muted">New to Food Delivery App ? </span>
                <Link to="/login">
                  <span class="text-danger font-weight-bold">Sign In</span>
                </Link>
              </p>
              <div class="login-social-media py-3">
                <button class="btn btn-primary btn-block btn-sm">
                  Continue with Google
                </button>
              </div>
            </div>
            <form>
              <div class="form-group">
                <div class="form-row">
                  <div class="col">
                    <label for="InputEmail">First name</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="First name"
                    />
                  </div>
                  <div class="col">
                    <label for="InputEmail">Last name</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Last name"
                    />
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="InputEmail">Email address</label>
                <input type="email" class="form-control form-control-sm" />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="InputPassword1">Password</label>
                <input type="password" class="form-control form-control-sm" />
              </div>
              <button type="submit" class="btn btn-danger btn-sm">
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

export default Signup;
