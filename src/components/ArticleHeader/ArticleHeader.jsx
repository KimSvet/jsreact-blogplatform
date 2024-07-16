import React from "react";
import { Link } from "react-router-dom";

import "./ArticleHeader.css";

import ArticleTag from "../ArticleTag/ArticleTag";
import ArticleAuthor from "../ArticleAuthor/ArticleAuthor";

export default function ArticleHeader({ article }) {
  return (
    <div className="article-header">
      <div className="article-header_name">
        <div className="name-container">
          <Link to="/">
            <h5 className="name">{article.title}</h5>
          </Link>
          <p className="likes-count">♡ {article.favoritesCount}</p>
        </div>
        <div className="tag-list">
          {article.tagList.map((tag) => (
            <ArticleTag key={tag} tag={tag}></ArticleTag>
          ))}
        </div>
      </div>
      <ArticleAuthor author={article.author} date={article.createdAt} />
    </div>
  );
}
