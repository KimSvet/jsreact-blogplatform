import React from "react";
import { useLoaderData, Link } from "react-router-dom";

import ArticlePreview from "../../components/ArticlePreview/ArticlePreview";
import ListPagination from "../../components/ListPagination/ListPagination";

export default function List() {
  const { articles, articlesCount } = useLoaderData();
  const totalPages = Math.ceil(articlesCount / 5);
  return (
    <div>
      {articles.map((article) => (
        <ArticlePreview key={article.slug} article={article} />
      ))}
      <ListPagination totalPages={totalPages} />
    </div>
  );
}

// loader function
export const articleLoader = async () => {
  const limit = 5;
  const res = await fetch(
    `https://api.realworld.io/api/articles?limit=${limit}`
  );
  const data = await res.json();
  return { articles: data.articles, articlesCount: data.articlesCount };
};
