import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

function Statistics({ title, stats }) {
  return (
    <section className="statistics-wrapper">
      <h2 className="statistics-title">{title} </h2>
      <ul className="statistics-container">
        {stats.map((item) => (
          <li className="statistics-item" key={item.id} type={stats}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default Statistics;
