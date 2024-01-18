import React from "react";
import PropTypes from "prop-types";
import "./TransactionHistory.css";

function TransactionHistory({ items }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th className="table-header">Type</th>
          <th className="table-header">Amount</th>
          <th className="table-header">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="table-row">
            <td className="table-data">{item.type}</td>
            <td className="table-data">{item.amount}</td>
            <td className="table-data">{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
