import React from 'react'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { Link } from 'react-router-dom'
import Blog from '../../assets/icons/blogMenu.png'
import contact from '../../assets/icons/contact-book.png'
import MenuComponent from './MenuComponent'
const Menu = () => {
  const { dropOutMenu, layoutDispatch, layoutState } = UsePortfolioContext()
  const style = {
    section: ` ${
      layoutState.greenLayout
        ? ' bg-[#245a50] boxShaddow '
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  menuBoxShaddowPurple rounded-[16px] '
        : ' '
    }  w-[350px] h-[350px] ml-1 bottom-20 left-0  absolute z-10 flex flex-col items-center justify-start py-5  `,

    layout1: `w-[44%] h-[120px] outline outline-[1px] outline-orange-600   bg-img  flex  flex-col items-center justify-between hover:outline-orange-300 cursor-pointer`,
    layout2: `w-[44%] h-[120px] outline outline-[1px]  outline-purple-500  bg-purple-img flex  flex-col items-center justify-between hover:outline-purple-300 cursor-pointer`,
  }
  return (
    <m.section
      initial={{ x: -400 }}
      animate={{ x: dropOutMenu ? 0 : -400 }}
      className={style.section}
    >
      <MenuComponent title={'Contact Me'} img={contact} link={'contact'} />
      <MenuComponent title={'Personal Blog'} img={Blog} link={'blog'} />
    </m.section>
  )
}

export default Menu
