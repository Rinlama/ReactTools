import React, { useState } from "react";
import { connect } from "react-redux";
import { addFoodBazzarAction } from "../redux/FoodBazzarAction";
import { addRestaurantAction } from "../redux/RestaurantAction";

function Restaurant(props) {
  const { restaurantList, addRestaurant, addFoodBazzar } = props;

  const [restaurantState, setRestaurantState] = useState({});

  return (
    <div>
      <form>
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
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            addRestaurant(restaurantState);
          }}
        >
          Save Restaurant
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(event) => {
            event.preventDefault();
            addFoodBazzar(restaurantState);
          }}
        >
          Save FoodBazzar
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    restaurantList: state.restaurant,
    foodBazzarList: state.foodBazzar,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRestaurant: (res) => {
      dispatch(addRestaurantAction(res));
    },
    addFoodBazzar: (res) => {
      dispatch(addFoodBazzarAction(res));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
