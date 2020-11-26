import React from "react"
import { Link } from "gatsby"
import posts from '../data/posts'

const Blog = () => (
  <div>
    <h1>Posts</h1>

    <ul>
      {posts.map(post => <li><Link to={`/blog/${post.title}`}>{post.title}</Link></li>)}
    </ul>
  </div>
)

export default Blog
