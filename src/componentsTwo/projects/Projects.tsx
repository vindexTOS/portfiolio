import React from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import { motion as m } from 'framer-motion'
import { MdCancelPresentation, MdZoomOutMap, MdZoomInMap } from 'react-icons/md'
import MainProjectContent from './MainProjectContent'
const Projects = () => {
  const { CloseWindow } = UsePortfolioContext()
  const [zoom, setZoom] = React.useState<boolean>(false)

  const style = {
    mainDiv: `${
      zoom ? 'w-[100%] h-[100%] mt-[4rem]' : 'w-[70%] h-[80%] '
    } max_lg:w-[100%] max_lg:h-[100%] flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 `,
    topDiv: `w-[100%]  flex items-center justify-between px-5 h-[50px]  bg-gray-800`,

    section: `bg-gray-100 w-[100%] h-[100%]   `,
    header: `text-white text-[1.5rem] `,
    icon: `w-[2rem] h-[2rem] flex  items-center  justify-center font-bold text-[1.5rem] hover:bg-red-500  bg-red-600 text-white rounded-[5px]`,
    iconZoom: `text-[2rem] bg-green-600 hover:bg-green-400 text-white rounded-[5px] `,
    btnDiv: `gap-2 flex `,
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
          <h1 className={style.header}>My Work</h1>
          <div className={style.btnDiv}>
            <button className={style.iconZoom}>
              {zoom ? (
                <MdZoomInMap onClick={() => setZoom(!zoom)} />
              ) : (
                <MdZoomOutMap onClick={() => setZoom(!zoom)} />
              )}
            </button>
            <button onClick={CloseWindow}>
              <p className={style.icon}>X</p>
            </button>
          </div>
        </div>
        <MainProjectContent zoom={zoom} />
      </m.section>
    </div>
  )
}

export default Projects
