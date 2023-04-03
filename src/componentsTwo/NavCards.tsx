import React, { FC } from 'react'
import { motion as m } from 'framer-motion'
import me from '../assets/me.jpg'
import { UsePortfolioContext } from '../context/PortfolioContext'
type NavCardProsp = {
  img: string
  title: string
  styling: string
  link: string
}
const NavCards: FC<NavCardProsp> = ({ img, title, styling, link }) => {
  const { Navigate, navRelocation } = UsePortfolioContext()
  const style = {
    mainDiv: `   ${
      navRelocation
        ? 'w-[370px] h-[320px] max_md:h-[220px] max_md:w-[320px] flex items-center justify-center'
        : ''
    }    `,
    content: ` gap-2 items-center justify-center  flex flex-col  bg-[#245a50] cardBoxShaddow  cursor-pointer hover:cardBoxHover  ${
      navRelocation
        ? 'w-[340px] h-[300px]   max_md:h-[200px] max_md:w-[300px] '
        : 'w-[120px] h-[120px]'
    }`,
    img: `w-[50%]   ${styling}`,
    header: ` text-white  flex items-center justify-center font-bold ${
      navRelocation ? 'text-[1.5rem] w-[9rem]' : ''
    }`,
  }
  return (
    <div onClick={() => Navigate(link)} className={style.mainDiv}>
      <m.div
        whileHover={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className={style.content}
      >
        <img className={style.img} src={img} />
        <h1 className={style.header}>{title}</h1>
      </m.div>
    </div>
  )
}

export default NavCards
