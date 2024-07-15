import React from "react";

import "./ArticlePreview.css";

import ArticleHeader from "../ArticleHeader/ArticleHeader";

function ArticlePreview() {
  return (
    <div className="preview-container">
      <ArticleHeader />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="pagination"></div>
    </div>
  );
}

export default ArticlePreview;
