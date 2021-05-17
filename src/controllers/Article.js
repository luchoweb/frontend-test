import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import {getArticleById} from "../api";
import ArticleView from "../views/article";
import Loading from "../components/loading";

const ArticleController = () => {
  const { id: idArticle } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getArticleById(idArticle);

      if ( response === "Error" ) {
        setArticle({});
      } else {
        setArticle(response.data);
      }
    }

    fetchData();
  }, [idArticle]);

  return article ?
    <ArticleView article={article} /> :
    <Loading text="Loading article..." />
}

export default ArticleController;
