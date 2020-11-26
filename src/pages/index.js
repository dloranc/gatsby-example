import React from "react"
import { graphql, Link } from 'gatsby'

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>Hello world!</h2>

      <Link to="/about">About</Link>
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
