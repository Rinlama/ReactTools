import React from "react";
import { Link, useParams } from "react-router-dom";

function CourseItem() {
  const { course } = useParams();

  return <div>{course}</div>;
}

export default CourseItem;
