import { useLoaderData, useParams } from "react-router-dom";

export default function Article() {
  const { slug } = useParams();
  const article = useLoaderData();
  return (
    <div className="article">
      <h2>{article.title}</h2>
      <p>{article.body}</p>
    </div>
  );
}

//loader function
export const articleDetailLoader = async ({ params }) => {
  const { slug } = params;
  const res = await fetch("https://api.realworld.io/api/articles/" + slug);
  const data = await res.json();
  return data.article;
};
