import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'

const BlogPostInside = () => {
  const { blogId, blogPostNav, blogData } = UsePortfolioContext()
  const singlePost = blogData.find((val: any) => String(val.id === blogId))
  return (
    <div>
      <h1 onClick={() => console.log(singlePost)}>CLIC</h1>
    </div>
  )
}

export default BlogPostInside
