import React from 'react'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { Link } from 'react-router-dom'
const Menu = () => {
  const { dropOutMenu, layoutDispatch, layoutState } = UsePortfolioContext()
  const style = {
    section: ` ${
      layoutState.greenLayout
        ? ' bg-[#245a50] boxShaddow '
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  menuBoxShaddowPurple rounded-[16px] '
        : ' '
    }  w-[380px] h-[350px] ml-1 bottom-20 left-0  absolute z-10 flex items-center justify-center gap-5`,

    layout1: `w-[44%] h-[120px] outline outline-[1px] outline-orange-600   bg-img  flex  flex-col items-center justify-between hover:outline-orange-300 cursor-pointer`,
    layout2: `w-[44%] h-[120px] outline outline-[1px]  outline-purple-500  bg-purple-img flex  flex-col items-center justify-between hover:outline-purple-300 cursor-pointer`,
  }
  return (
    <m.section
      initial={{ x: -400 }}
      animate={{ x: dropOutMenu ? 0 : -400 }}
      className={style.section}
    >
      <h1 className="absolute z-10 text-center mb-[13rem] text-[2rem] text-red-500 font-medium blacktextshaddow ">
        Because of netlfy's static nature this feature is not working on this
        domane{' '}
        <Link
          className="text-blue-300"
          target="_blank"
          to="https://github.com/vindexTOS/portfiolio"
        >
          Check This Portfolio On Git Hub
        </Link>
      </h1>

      <div
        className={style.layout1}
        onClick={() => layoutDispatch({ type: 'green' })}
      >
        <div className="flex gap-2 mt-10">
          {new Array(3).fill('').map((val: any, index: number) => (
            <div
              key={String(val + index)}
              className="w-[40px] h-[40px] bg-[#245a50] border-[1px] border-orange-600"
            ></div>
          ))}
        </div>
        <div className="w-[100%] h-[10px] bg-[#245a50] border-t-[1px] border-orange-700"></div>
      </div>
      <div
        className={style.layout2}
        onClick={() => layoutDispatch({ type: 'purple' })}
      >
        <div className="flex gap-2 mt-10">
          {new Array(3).fill('').map((val: any, index: number) => (
            <div
              key={String(val + index)}
              className="w-[40px] h-[40px] bg-[#2d648e] rounded-[10px] cardBoxShaddowPurple  border-[1px] border-purple-500  "
            ></div>
          ))}
        </div>
        <div className="w-[100%] h-[10px]  bg-[#2d648e] cardBoxShaddowPurple  border-t-[1px] border-purple-500  "></div>
      </div>
    </m.section>
  )
}

export default Menu
