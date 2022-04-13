import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <h1>Articles</h1>
    <ArticleList articles={articleContent} />
  </>
);

export default ArticlesListPage;
