import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ArticleList from '../components/ArticleList'
import CommentsList from '../components/CommentsList'
import UpvotesSection from '../components/UpvotesSection'
import AddCommentForm from '../components/AddCommentForm'
import articleContent from './article-content'
import NotFound from './NotFound'
import { ArticleInfo } from '../types/articles-types'

const ArticlePage = () => {
  const params = useParams()
  const name = params.name
  const article = articleContent.find((article) => article.name === name)

  const [articleInfo, setArticleInfo] = useState<ArticleInfo>({
    upvotes: 1,
    comments: [],
  })

  useEffect(() => {
    const fethcData = async () => {
      const res = await fetch(
        `http://ec2-18-170-107-111.eu-west-2.compute.amazonaws.com/api/articles/${name}`,
        {
          headers: { Origin: window.location.host },
        }
      )
      const data = await res.json()
      console.log(data)
      setArticleInfo(data)
    }
    fethcData()
  }, [name])

  if (!article) return <NotFound />

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  )

  return (
    <>
      <h1>{article?.title}</h1>
      {article?.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <div className="activities">
        <UpvotesSection
          articleName={name}
          upvotes={articleInfo.upvotes}
          setArticleInfo={setArticleInfo}
        />
        <div>{articleInfo.comments?.length} comments</div>
      </div>

      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  )
}

export default ArticlePage
