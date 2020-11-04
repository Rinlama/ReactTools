import React from "react";
import Restaurant from "./components/Restaurant";
import { connect } from "react-redux";
import { restaurantActionType } from "./redux/actions/RestaurantAction";

function App(props) {
  const { restaurantList, remove } = props;
  return (
    <div className="container">
      <Restaurant />

      {/* Store state */}
      <ul class="list-group my-3">
        {restaurantList.map((d, index) => (
          <li className="list-group-item d-flex justify-content-between">
            <span>
              {d.name}-{d.location}
            </span>
            <span>
              <button
                className="btn btn-danger"
                onClick={(event) => {
                  remove(index);
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
      dispatch({
        type: restaurantActionType.DELETE,
        payload: index,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
