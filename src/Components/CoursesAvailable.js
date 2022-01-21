import React from "react";
import classdata from "../coursesavailabledata";
import ClassItem from "./ClassItem";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CoursesAvailable = () => {
  return (
    <div className="courses-container">
      <Carousel breakPoints={breakPoints}>
        {classdata.map((classitem) => {
          const { id, coursename, duration, teacher, rating } = classitem;
          return <ClassItem {...classitem} />;
        })}
      </Carousel>
    </div>
  );
};

export default CoursesAvailable;
