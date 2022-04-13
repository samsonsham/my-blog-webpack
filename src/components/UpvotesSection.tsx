import { ArticleInfo } from '../types/articles-types'
import { BiLike } from 'react-icons/bi'

type UpvoteProps = {
  articleName?: string
  upvotes: number
  setArticleInfo: React.Dispatch<React.SetStateAction<ArticleInfo>>
}

const UpvotesSection = ({
  articleName,
  upvotes,
  setArticleInfo,
}: UpvoteProps) => {
  const upvoteArticle = async () => {
    const res = await fetch(`/api/articles/${articleName}/upvote`, {
      method: 'post',
    })
    const body = await res.json()
    setArticleInfo(body)
  }

  return (
    <div className="upvotes-section">
      <p className="upvotes__number">{upvotes}</p>
      <button className="upvotes__btn" onClick={() => upvoteArticle()}>
        <BiLike className="upvotes__like-icon" />
      </button>
    </div>
  )
}

export default UpvotesSection
