import { useEffect, useState } from "react";
import { getArticles } from "../api";
import { LIMIT_PAGE } from "../constants";
import Loading from "../components/loading";
import BlogView from "../views/blog";

const BlogController = ({
  page = 1,
  limit = LIMIT_PAGE
}) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticles(page, limit);

      if ( response === "Error" ) {
        setArticles([]);
      } else {
        setArticles(response);
      }
    }

    fetchData();
  }, []);

  return articles ?
    <BlogView articles={articles} /> :
    <Loading text="Loading articles..." />
}

export default  BlogController;
