import React from "react";
import PropTypes from "prop-types";
import "./FriendList.css";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className="avatar-item">
      <span
        className={`status-circle ${isOnline ? "online" : "offline"}`}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="100" />
      <p className="avatar-user-name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
