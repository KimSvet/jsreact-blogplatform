import React from "react";

import "./ArticleAuthor.css";

import profilePicture from "../../assets/profile-picture.png";

export default function ArticleAuthor() {
  return (
    <div className="article-author">
      <div className="text-container">
        <p className="author-name">John Doe</p>
        <p className="created-date">March 5, 2020</p>
      </div>
      <div className="avatar-container">
        <img src={profilePicture} alt="profile picture" />
      </div>
    </div>
  );
}
