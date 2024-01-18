import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <div className="profile-card">
      <div>
        <img className="avatar-profile" src={avatar} alt="" />
        <p className="avatar-name">{username}</p>
        <p className="avatar-tag">{tag} </p>
        <p className="avatar-location">{location} </p>
      </div>
      <ul className="metrics">
        <li className="metrics-item">
          <span>Followers</span>
          <span>{followers} </span>
        </li>
        <li className="metrics-item">
          <span>Views</span>
          <span>{views} </span>
        </li>
        <li className="metrics-item">
          <span>Likes</span>
          <span>{likes} </span>
        </li>
      </ul>
    </div>
  );
}
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};

export default Profile;
