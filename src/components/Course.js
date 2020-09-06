import React from "react";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import CourseItem from "./CourseItem";

function Course() {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/programming`}>Programming</Link>
        </li>
        <li>
          <Link to={`${url}/networking`}>Networking</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${path}/:course`}>
          <CourseItem></CourseItem>
        </Route>
      </Switch>
    </div>
  );
}

export default Course;
