import React, { useState } from "react";
import { connect } from "react-redux";
import { addRestaurantAction } from "../redux/RestaurantAction";

function Restaurant(props) {
  const { restaurantList, add } = props;

  const [restaurantState, setRestaurantState] = useState({});

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          add(restaurantState);
        }}
      >
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setRestaurantState({
                ...restaurantState,
                ...{ name: event.target.value },
              });
            }}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            onChange={(event) => {
              setRestaurantState({
                ...restaurantState,
                ...{ location: event.target.value },
              });
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
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
      dispatch(addRestaurantAction(res));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
