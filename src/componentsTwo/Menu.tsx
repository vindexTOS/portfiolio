import React from 'react'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../context/PortfolioContext'
const Menu = () => {
  const { dropOutMenu } = UsePortfolioContext()
  const style = {
    section: ` bg-[#245a50]  w-[350px] h-[350px] ml-1 boxShaddow bottom-20 absolute`,
  }
  return (
    <m.section
      animate={{ x: dropOutMenu ? 0 : -400 }}
      className={style.section}
    ></m.section>
  )
}

export default Menu
