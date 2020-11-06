import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Restaurant from "./component/Restaurant";
import { connect } from "react-redux";
import { deleteRestaurantAction } from "./redux/RestaurantAction";

function App(props) {
  const { restaurantList, remove } = props;
  return (
    <div className="container">
      <Restaurant />

      <ul className="list-group">
        {restaurantList.map((d, i) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={i}
          >
            <span>
              {d.name}-{d.location}
            </span>
            <span>
              <button
                className="btn btn-danger"
                onClick={() => {
                  remove(i);
                }}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove: (index) => {
      dispatch(deleteRestaurantAction(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
