import React, { FC, useState } from 'react'
import shuriken from '../../assets/icons/shuriken.png'
import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import PersonalInfo from '../../assets/icons/personal-information.png'
import ClipBoard from '../../assets/icons/clipboard.png'
import Skills2 from '../../assets/icons/skills2.png'
import gear from '../../assets/icons/gear.png'
import analytics from '../../assets/icons/analytics.png'
import computer from '../../assets/icons/computer.png'
import idcard from '../../assets/icons/id-card.png'
import { useLocation } from 'react-router-dom'
import gmail from '../../assets/icons/gmail.png'
const Footer = () => {
  const [iconImg, setIconImg] = useState<boolean>(false)
  const {
    dropOutMenu,
    setDropOutMenu,
    Navigate,
    layoutState,
  } = UsePortfolioContext()
  const style = {
    footer: `w-[100vw] h-[72px] bottom-0 ${
      layoutState.greenLayout
        ? 'bg-[#245a50] boxShaddow'
        : layoutState.purpleLayOut
        ? 'bg-[#2d648e]  cardBoxShaddowPurple'
        : ''
    }  absolute flex `,
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
        className={`  ${
          layoutState.greenLayout
            ? 'hover:bg-green-800 hover:border-b-2 border-orange-600'
            : layoutState.purpleLayOut
            ? 'hover:bg-purple-800 hover:border-b-2 border-purple-400'
            : ''
        } w-[5rem] flex items-center justify-center h-[100%] cursor-pointer ${
          layoutState.greenLayout
            ? location.pathname === `/${link}` && 'bg-green-900 border-b-4'
            : location.pathname === `/${link}` && 'bg-purple-900 border-b-4'
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
          src={
            layoutState.greenLayout
              ? shuriken
              : layoutState.purpleLayOut
              ? gear
              : gear
          }
        />
      </div>

      <div className={style.options}>
        <OptionsDiv
          img={
            layoutState.greenLayout
              ? PersonalInfo
              : layoutState.purpleLayOut
              ? idcard
              : PersonalInfo
          }
          title="About Me"
          link="about"
        />
        <OptionsDiv
          img={
            layoutState.greenLayout
              ? ClipBoard
              : layoutState.purpleLayOut
              ? analytics
              : ClipBoard
          }
          title="Projects"
          link="projects"
        />
        <OptionsDiv
          img={
            layoutState.greenLayout
              ? Skills2
              : layoutState.purpleLayOut
              ? computer
              : Skills2
          }
          title="Skills"
          link="skills"
        />
        <OptionsDiv img={gmail} title="Contacts" link="contact" />
      </div>
    </footer>
  )
}

export default Footer
