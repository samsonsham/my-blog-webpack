import { useState } from 'react'
import { ArticleInfo } from '../types/articles-types'

type AddCommentProps = {
  articleName?: string
  setArticleInfo: React.Dispatch<React.SetStateAction<ArticleInfo>>
}

const AddCommentForm = ({ articleName, setArticleInfo }: AddCommentProps) => {
  const [username, setUsername] = useState('')
  const [commentText, setCommentText] = useState('')

  const addComment = async () => {
    const res = await fetch(`/api/articles/${articleName}/add-comment`, {
      method: 'post',
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const body = await res.json()
    setArticleInfo(body)
    setUsername('')
    setCommentText('')
  }

  return (
    <div className="add-comment-form">
      <h3>Add a Comment</h3>
      <label>
        Name:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:
        <textarea
          rows={4}
          cols={50}
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button className="add-comment__btn" onClick={() => addComment()}>
        Add Comment
      </button>
    </div>
  )
}

export default AddCommentForm
