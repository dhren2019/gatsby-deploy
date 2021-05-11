
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/dhren/Documents/PROGRAMACIÓN/gatsby-deploy/.cache/dev-404-page.js")),
  "component---src-pages-blog-tsx": preferDefault(require("/Users/dhren/Documents/PROGRAMACIÓN/gatsby-deploy/src/pages/blog.tsx")),
  "component---src-pages-index-tsx": preferDefault(require("/Users/dhren/Documents/PROGRAMACIÓN/gatsby-deploy/src/pages/index.tsx")),
  "component---src-pods-post-post-template-tsx": preferDefault(require("/Users/dhren/Documents/PROGRAMACIÓN/gatsby-deploy/src/pods/post/post.template.tsx"))
}

