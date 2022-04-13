import { Link } from 'react-router-dom'

type ArticlesProps = {
  articles: {
    name: string
    title: string
    content: string[]
  }[]
}

const ArticleList = ({ articles }: ArticlesProps) => (
  <>
    {articles.map((article, key) => (
      <Link
        className="article-list-item"
        key={key}
        to={`/my-blog-webpack/article/${article.name}`}
      >
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
)

export default ArticleList
