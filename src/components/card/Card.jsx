import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, image, description }) => {
  const [showTitle, setShowTitle] = useState(true);

  return (
    <div className="card">
      {showTitle && <h2 className="card-title">{title}</h2>}
      <img src={image} alt={title} className="card-image" />
      <p className="card-description">{description}</p>
      <button
        className="card-button"
        onClick={() => setShowTitle((prev) => !prev)}
      >
        Toggle Title
      </button>
    </div>
  );
};

export default Card;
