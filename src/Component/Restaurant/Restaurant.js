import React from "react";
import { connect } from "react-redux";
import { restaurantGETAction } from "../../redux/actions/RestaurantAction";

function Restaurant(props) {
  return (
    <div className="container">
      <h4>GET</h4>
      <button
        className=""
        onClick={() => {
          props.get();
        }}
      >
        Get
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: () => {
      dispatch(restaurantGETAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
