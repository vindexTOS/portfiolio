import React from 'react'
import book from '../../assets/icons/book.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import BlogMap from './BlogMap'
import BlogPostInside from './BlogPostInside'
function BlogMain() {
  const { blogData, blogId, blogPostNav } = UsePortfolioContext()
  const [zoom, setZoom] = React.useState<boolean>(false)
  const style = {
    mainDiv: 'bg-gray-300  w-[100%] h-[100%] flex',
    sideNav: `h-[100%] py-5 w-[250px] bg-white flex  flex-col  `,
    blogPost: ` flex  justify-start flex-col  w-[100%]`,
  }
  const NavLinks = ({ title }: { title: string }) => {
    return (
      <div className="flex cursor-pointer gap-13 items-center px-10 hover:bg-gray-500 hover:text-white w-[250px] gap-5 text-[1.3rem] font-bold text-gray-500">
        <img className="w-[26px]" src={book} />
        <h1>{title}</h1>
      </div>
    )
  }
  return (
    <div className={style.mainDiv}>
      <div className={style.sideNav}>
        <NavLinks title="#General" />
        <NavLinks title="Dev Diary" />
      </div>
      {blogId == '' ? (
        <div className={style.blogPost}>
          {blogData.map((val: any) => (
            <BlogMap
              key={val.id}
              date={val.time}
              id={val.id}
              title={val.title}
              dec={val.dec}
            />
          ))}
        </div>
      ) : (
        <BlogPostInside />
      )}
    </div>
  )
}

export default BlogMain
