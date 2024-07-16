import React from "react";

import "./ArticleAuthor.css";

import profilePicture from "../../assets/profile-picture.png";

export default function ArticleAuthor({ author, date }) {
  const createdDate = new Date(date);
  const format = { year: "numeric", month: "long", day: "numeric" };
  const formatDate = createdDate.toLocaleDateString("en-US", format);
  return (
    <div className="article-author">
      <div className="text-container">
        <p className="author-name">{author.username}</p>
        <p className="created-date">{formatDate}</p>
      </div>
      <div className="avatar-container">
        <img
          src={author.image}
          alt="profile picture"
          className="avatar-image"
        />
      </div>
    </div>
  );
}
