import React from "react";
import { connect } from "react-redux";
import Header from "../header/Header";

function MyStore(props) {
  const { user } = props;
  return (
    <div>
      <Header />
      <div className="sign-in-main">Store</div>
      <div>Welcome {user.name}</div>
    </div>
  );
}

export default connect((state) => state)(MyStore);
