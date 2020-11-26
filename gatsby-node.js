// import posts from './src/data/posts'
const posts = require('./src/data/posts.json')

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  posts.forEach(post => {
    createPage({
      path: `/blog/${post.title}`,
      component: require.resolve(`./src/templates/post-template.js`),
      context: { post },
    })
  })
}
