import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { TbSquareRoundedArrowLeftFilled } from 'react-icons/tb'
const BlogPostInside = () => {
  const { blogId, blogPostNav, blogData } = UsePortfolioContext()
  const singlePost = blogData.find(
    (val: any) => String(val.id) === String(blogId),
  )
  return (
    <div className="bg-gray-100 h-[100%]  pt-[34rem] max_sm:pt-0   overflow-y-scroll mb-[4px] flex flex-col max_lg:justify-start max_lg:pb-20   items-center justify-center gap-5">
      <div
        onClick={() => blogPostNav('')}
        className="w-[100%] max_lg:ml-20  text-[2rem] flex items-center text-center gap-2 cursor-pointer text-gray-800 hover:text-blue-500 font-light"
      >
        <TbSquareRoundedArrowLeftFilled className="text-[2.4rem]" />
        <p className="mb-1">Go Back</p>
      </div>
      <h1 className="text-[2.3rem]  max_smm1:text-[1rem] w-[100%]  font-bold text-gray-500   ">
        {singlePost?.title}
      </h1>
      {/* <h1 onClick={() => console.log(singlePost)}>click</h1> */}

      <img
        className="h-[400px] w-[100%] generalBoxShaddow"
        src={singlePost?.img}
      />
      <p className="bg-white generalBoxShaddow p-5 rounded-[20px]  max_smm1:text-[14px] text-gray-500 font-bold">
        {singlePost?.dec}
      </p>
      <p className="text-[2rem] w-[100%] px-2 font-light text-gray-400  max_smm1:text-[12px]">
        {singlePost?.time}
      </p>
    </div>
  )
}

export default BlogPostInside
