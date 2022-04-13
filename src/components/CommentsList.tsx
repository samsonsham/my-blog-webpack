type CommentsProps = {
  comments?: {
    username: string
    text: string
  }[]
}

const CommentsList = ({ comments }: CommentsProps) => (
  <>
    <h4 className="comment__header">Comments:</h4>
    {comments ? (
      comments.map((comment, key) => (
        <div className="comment" key={key}>
          <h4>{comment.username}</h4>
          <p>{comment.text}</p>
        </div>
      ))
    ) : (
      <h3>No Comments</h3>
    )}
  </>
)

export default CommentsList
