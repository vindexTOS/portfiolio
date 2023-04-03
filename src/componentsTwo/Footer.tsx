import React, { useState } from 'react'
import shuriken from '../assets/icons/shuriken.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../context/PortfolioContext'

const Footer = () => {
  const [iconImg, setIconImg] = useState<boolean>(false)
  const { dropOutMenu, setDropOutMenu } = UsePortfolioContext()
  const style = {
    footer: `w-[100vw] h-[72px] bottom-0 bg-[#245a50] boxShaddow absolute`,
    iconDiv: `flexitems-center justify-center h-[100%] w-[13rem]  p-2 px-5`,
    img: `w-[50px] cursor-pointer    ${iconImg && 'rotate-180'} `,
  }

  return (
    <footer className={style.footer}>
      <div
        className={style.iconDiv}
        onClick={() => setDropOutMenu(!dropOutMenu)}
      >
        <m.img
          onClick={() => setIconImg(!iconImg)}
          animate={{ rotate: iconImg ? 180 : 0 }}
          className={style.img}
          src={shuriken}
        />
      </div>
    </footer>
  )
}

export default Footer
