type ArticleInfo = {
  upvotes: number
  comments?: {
    username: string
    text: string
  }[]
}

export type { ArticleInfo }
