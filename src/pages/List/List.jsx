import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";

export default function List() {
  const articles = useLoaderData();
  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
      <div className="pagination"></div>
    </div>
  );
}

// loader function
export const articleLoader = async () => {
  const res = await fetch("https://api.realworld.io/api/articles");
  const data = await res.json();
  return data.articles;
};
