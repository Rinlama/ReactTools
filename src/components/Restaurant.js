import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addRestaurant,
  restaurantActionType,
} from "../redux/actions/RestaurantAction";

function Restaurant(props) {
  const [restaurantState, setRestaurantState] = useState({
    name: "",
    location: "",
  });

  return (
    <div className="container">
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Name</label>
            <input
              type="text"
              className="form-control"
              value={restaurantState.name}
              onChange={(event) => {
                setRestaurantState({
                  ...restaurantState,
                  ...{ name: event.target.value },
                });
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Location</label>
            <input
              type="text"
              value={restaurantState.location}
              className="form-control"
              onChange={(event) => {
                setRestaurantState({
                  ...restaurantState,
                  ...{ location: event.target.value },
                });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            props.add(restaurantState);
            setRestaurantState({ name: "", location: "" });
          }}
        >
          Submit
        </button>
      </form>
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
    add: (res) => {
      dispatch({
        type: restaurantActionType.ADD,
        payload: res,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
