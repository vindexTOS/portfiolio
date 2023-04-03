import React from 'react'
import { UsePortfolioContext } from '../context/PortfolioContext'
import { motion as m } from 'framer-motion'
import me2 from '../assets/me.jpg'
import { MdCancelPresentation, MdZoomOutMap, MdZoomInMap } from 'react-icons/md'
import { GiBulletBill } from 'react-icons/gi'
import {
  AiOutlineCopy,
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { portfolioData } from '../context/PortfolioContext'
const AboutMe = () => {
  const InfoData = [
    {
      title: `vindexTOS`,
      icon: <AiFillGithub className="text-[2rem] text-orange-700" />,
      link: `https://github.com/vindexTOS`,
    },
    {
      title: `giorgi kutateladze`,
      icon: <AiFillLinkedin className="text-[2rem] text-blue-500" />,
      link: `https://www.linkedin.com/in/giorgi-kutateladze-65a83919a/`,
    },
    {
      title: `vindexTOS`,
      icon: <AiFillYoutube className="text-[2rem] text-red-500" />,
      link: `https://www.youtube.com/@VindexTOS/featured`,
    },
  ]
  const { CloseWindow } = UsePortfolioContext()
  const style = {
    mainDiv: `w-[70%] h-[80%] max_lg:w-[100%] max_lg:h-[100%] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,
    section: `bg-gray-100 w-[100%] h-[100%]   `,
    mainContent: ` flex w-[100%] h-[93%] p-2 gap-5 justify-between overflow-y-scroll  max_md:flex-col `,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] `,
    btnDiv: `gap-2 flex `,
    photoDiv: `w-[500px] max_md:w-[100%] bg-white h-[93%] flex flex-col  justify-center  items-center gap-5 py-4 `,
    img: `w-[270px] h-[270px]`,
    infoBtn: `flex items-center text-[1rem]  font-bold w-[270px] gap-5 outline outline-[1px] p-2 py-3 cursor-pointer hover:bg-gray-800 text-gray-500 hover:text-white`,
    infoDiv: `flex flex-col gap-2 max_md:flex-row max_md:flex-wrap max_md:items-center max_md:justify-center`,
    copySpan: `absolute w-[5rem] h-[2.3rem] bg-green-300 text-white rounded-[20px] flex items-center text-center justify-center font-bold text-[1.2rem] mt-10 ml-[8rem]`,
    textDiv: `  w-[80%] h-[100%] px-10   max_md:px-5 flex flex-col gap-5 max_md:w-[100%]`,
    headerDiv: `flex flex-col max_md:text-center `,
    InreleventDiv: `flex flex-col  `,
  }
  const [copy, setCopy] = React.useState<string>('')
  function copyToClipboard() {
    navigator.clipboard
      .writeText('giorgikutateladze1998@gmail.com')
      .then(() => setCopy('Copied!'))
      .catch((error) =>
        console.error('Error copying text to clipboard:', error),
      )
    setTimeout(() => {
      setCopy('')
    }, 2000)
  }
  return (
    <div className={style.mainDiv}>
      <m.section
        initial={{ y: -2800 }}
        animate={{ y: -70 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className={style.section}
      >
        <div className={style.topDiv}>
          <h1 className={style.header}>About Me</h1>
          <div className={style.btnDiv}>
            <button className={style.iconZoom}>
              <MdZoomOutMap />
            </button>
            <button onClick={CloseWindow}>
              <p className={style.icon}>X</p>
            </button>
          </div>
        </div>
        <section className={style.mainContent}>
          {/* photo div */}

          <div className={style.photoDiv}>
            <img className={style.img} src={me2} />
            <div className={style.infoDiv}>
              <div
                title="Copy To ClickBoard"
                onClick={copyToClipboard}
                className={style.infoBtn}
              >
                <AiOutlineCopy className="text-[2rem]" />
                <div className="flex flex-col text-[12px]  ">
                  <p>giorgikutateladze1998@gmail.com </p>

                  <m.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: copy !== '' ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                    className={style.copySpan}
                  >
                    {copy}
                  </m.span>
                </div>
              </div>
              {InfoData.map((val: any) => (
                <div className={style.infoBtn}>
                  {val.icon}
                  <Link to={val.link} className="text-[1.2rem] ">
                    {val.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* Text area  */}
          <div className={style.textDiv}>
            <div className={style.headerDiv}>
              <h1 className="text-[3rem] text-gray-500">
                Hi, My Name Is <span className="text-orange-500">Giorgi</span>
              </h1>
              <p className="text-gray-500  text-[1.1rem]">
                I am a front-end web developer
              </p>
            </div>
            <p className="text-gray-500  text-[1.1rem] ">
              {portfolioData.aboutMe}
            </p>
            <div className={style.InreleventDiv}>
              <h1 className="text-[1.6rem] text-blue-900  max_md:text-center ">
                Some Inrelevent Infomration About Me
              </h1>
              <ol className="text-gray-600 flex flex-col gap-5 text-[1.1rem]  max_md:text-[1.1rem]   max_xl:text-[14px]">
                {portfolioData.InreleventInfo.map((val: any) => (
                  <li className="flex items-center gap-2 ">{val.point}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </m.section>
    </div>
  )
}

export default AboutMe
