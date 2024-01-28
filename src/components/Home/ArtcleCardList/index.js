import axios from "axios";
import { useEffect, useState } from "react";
import ArticleCard from "../ArticleCard";

function ArticleCardList({ currentPage }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = `https://api.realworld.io/api/articles?limit=10&offset=${
      (currentPage - 1) * 10
    }`;

    // Make an Axios GET request
    axios
      .get(apiUrl)
      .then((response) => {
        // Handle the successful response here
        setArticles(response.data.articles);
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error("Error fetching data:", error);
      });
  }, [currentPage]);

  const articleList = articles.map((article) => (
    <ArticleCard
      slug={article.slug}
      title={article.title}
      description={article.description}
      body={article.body}
      tagList={article.tagList}
      createdAt={article.createdAt}
      updatedAt={article.updatedAt}
      favorited={article.favorited}
      favoritesCount={article.favoritesCount}
      author={article.author}
    ></ArticleCard>
  ));

  return <div>{articleList}</div>;
}

export default ArticleCardList;
