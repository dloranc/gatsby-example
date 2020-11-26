import React from "react"
import { graphql, Link } from 'gatsby'

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>Hello world!</h2>

      <ul>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Home
