import React from "react";

const ClassItem = ({ id, coursename, duration, teacher, rating }) => {
  return (
    <div className="class-container">
      <section className="section-class">
        <h3>{coursename}</h3>
        <p>{duration} hrs</p>
        <p>Teacher: {teacher}</p>
        <p>Rating: {rating}/10</p>
      </section>
    </div>
  );
};

export default ClassItem;
