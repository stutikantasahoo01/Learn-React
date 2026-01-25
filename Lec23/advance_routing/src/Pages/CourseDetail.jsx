import React from "react";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const param = useParams();

  return (
    <div>
      <h2>{param.Courseid}</h2>
    </div>
  );
};

export default CourseDetail;
