import React from 'react';

const Cards = ({ title, value, secondtitle, secondvalue }) => {
  return (
    <div className="custom-card-container">
      <div className="card-content">
        <div className="row-line">
          <span className="label">{title}</span>
          <span className="value">{value}</span>
        </div>
        <div className="row-line">
          <span className="label">{secondtitle}</span>
          <span className="value">{secondvalue}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
