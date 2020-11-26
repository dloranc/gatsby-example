import React from "react"

export const PostTemplate = ({ pageContext: { post } }) => {
  return (
    <div>
      <h1>{post.title}</h1>

      <div>{post.content}</div>
    </div>
  )
}

export default PostTemplate
