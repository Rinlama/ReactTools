// const restaurantAddAction = (restaurant) => {
//   return {
//     type: "add",
//     payload: { id: restaurant.id },
//   };
// };

const restaurantGETAction = () => {
  return (dispatch) => {
    fetch("http://localhost:8080/api/v1/restaurants")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "get",
          payload: { id: data[0].id },
        });
      });
  };
};
export { restaurantGETAction };
