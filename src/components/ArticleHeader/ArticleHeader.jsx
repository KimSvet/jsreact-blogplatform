import React from "react";

import "./ArticleHeader.css";

import ArticleTag from "../ArticleTag/ArticleTag";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";

export default function ArticleHeader() {
  return (
    <div className="article-header">
      <div className="article-header_name">
        <div className="name-container">
          <h5 className="name">Article Name</h5>
          <p className="likes-count">♡ 12</p>
        </div>
        <div className="tag-list">
          <ArticleTag />
        </div>
      </div>
      <ArticleAuthor />
    </div>
  );
}
