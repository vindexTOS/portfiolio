import React, { FC, useState } from 'react'
import shuriken from '../assets/icons/shuriken.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../context/PortfolioContext'
import PersonalInfo from '../assets/icons/personal-information.png'
import ClipBoard from '../assets/icons/clipboard.png'
import Skills2 from '../assets/icons/skills2.png'
import { useLocation } from 'react-router-dom'
const Footer = () => {
  const [iconImg, setIconImg] = useState<boolean>(false)
  const { dropOutMenu, setDropOutMenu, Navigate } = UsePortfolioContext()
  const style = {
    footer: `w-[100vw] h-[72px] bottom-0 bg-[#245a50] boxShaddow absolute flex `,
    iconDiv: `flex items-center justify-center h-[100%] w-[5rem] rounded-[50%]   `,
    img: `w-[50px] cursor-pointer    ${iconImg && 'rotate-180'} `,
    options: `flex items-center justify-center   `,
  }

  const location = useLocation()
  type OptionDivProps = {
    img: string

    title: string
    link: string
  }
  const OptionsDiv: FC<OptionDivProps> = ({ img, title, link }) => {
    return (
      <div
        onClick={() => Navigate(link)}
        title={title}
        className={`hover:bg-green-800 hover:border-b-2 border-orange-600  w-[5rem] flex items-center justify-center h-[100%] cursor-pointer ${
          location.pathname === `/${link}` && 'bg-green-900 border-b-4'
        } `}
      >
        <img src={img} className={`w-[50px] cursor-pointer  `} />
      </div>
    )
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
      <div className={style.options}>
        <OptionsDiv img={PersonalInfo} title="About Me" link="about" />
        <OptionsDiv img={ClipBoard} title="Projects" link="projects" />
        <OptionsDiv img={Skills2} title="Skills" link="skills" />
      </div>
    </footer>
  )
}

export default Footer
