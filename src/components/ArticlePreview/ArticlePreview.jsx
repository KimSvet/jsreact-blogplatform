import React from "react";

import "./ArticlePreview.css";

import ArticleHeader from "../ArticleHeader/ArticleHeader";

function ArticlePreview({ article }) {
  return (
    <div className="preview-container">
      <ArticleHeader article={article} />
      <p>{article.description}</p>
    </div>
  );
}

export default ArticlePreview;
