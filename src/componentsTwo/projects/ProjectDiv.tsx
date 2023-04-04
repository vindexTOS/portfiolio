import React, { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from 'react-icons/ai'
import { SiNetlify } from 'react-icons/si'

type ProjectDivProps = { zoom: boolean }
const ProjectDiv: FC<ProjectDivProps> = ({ zoom }) => {
  const { Project, projectState } = UsePortfolioContext()

  const projectData = Project?.find(
    (val: any) => val.id === projectState.productID,
  )

  const { title, dec, link, git, demovideo, imgs, id, icons } =
    projectData || {}

  const [imgIndex, setImgIndex] = React.useState<number>(0)
  // img scroller
  let imgCheck = imgs ? imgs.length - 1 : 2
  const ArrowMovment = (direction: string) => {
    if (direction === 'right') {
      if (imgIndex >= imgCheck) {
        setImgIndex(0)
      } else {
        setImgIndex(imgIndex + 1)
      }
    } else if (direction === 'left') {
      if (imgIndex <= 0) {
        setImgIndex(0)
      } else {
        setImgIndex(imgIndex - 1)
      }
    }
  }

  React.useEffect(() => {
    setImgIndex(1)
  }, [projectState.productID])
  const style = {
    section: ` flex flex-col gap-5 w-[100%]   ${
      zoom ? 'h-[1500px]' : 'h-[100%]'
    }  p-5 `,
    header: `text-[2rem]  text-gray-600 w-[100%] bg-white rounded-[20px] flex px-5 py-3 projectHeader`,
    imgDiv: `relative w-[100%] flex items-center justify-center bg-white p-5 rounded-[20px] max_sm:p-0 `,
    img: ` w-[80%] rounded-[10px] outline outline-[2px] outline-gray-800 max_sm:w-[100%] `,
    btn: `text-[4rem] text-white hover:text-gray-400 cursor-pointer bg-gray-200 hover:bg-gray-900 h-[90%] rounded-[20px] max_XL3:text-[3rem] max_XL3:bg-opacity-0 max_XL3:text-gray-700 max_XL3:hover:bg-opacity-0   `,
    btnDiv: `absolute flex justify-between items-center h-[100%] w-[100%] px-10 max_XL3:w-[80%] max_sm:w-[100%] max_sm:p-0 ${
      projectState.productID === '' && 'hidden'
    } `,
    p: `  text-gray-500 projectPFont bg-white p-2 rounded-[20px]`,
    iconsDiv: `flex text-[4rem] gap-20 max_sm:gap-10 w-[100%] items-center justify-center bg-white p-2 rounded-[20px]`,
    linkDiV: `w-[100%] flex gap-5 pb-2 justify-center bg-white p-2 rounded-[20px]`,
    innerLinks: ` flex items-center justify-starts gap-2 text-[14px]`,
    links: `   text-blue-500 hover:text-blue-600 text-[2rem] max_sm:text-[0.8rem] max_XL3:text-[1rem]`,
  }
  return (
    <section className={style.section}>
      <h1 className={style.header}>{title}</h1>

      <div className={style.imgDiv}>
        <div className={style.btnDiv}>
          <IoIosArrowDropleft
            onClick={() => ArrowMovment('left')}
            className={style.btn}
          />
          <IoIosArrowDropright
            onClick={() => ArrowMovment('right')}
            className={style.btn}
          />
        </div>
        <img className={style.img} src={imgs && imgs[imgIndex]} />
      </div>
      <div className={style.linkDiV}>
        <div className={style.innerLinks}>
          <SiNetlify className="text-blue-400 text-[2rem]" />
          <a target="_blank" className={style.links} href={link}>
            Live website
          </a>
        </div>
        <div className={style.innerLinks}>
          <AiFillGithub className="text-orange-500 text-[2rem]" />{' '}
          <a target="_blank" className={style.links} href={git}>
            Source Code
          </a>
        </div>
        <div className={style.innerLinks}>
          <AiFillYoutube className="text-red-500 text-[2rem]" />{' '}
          <a target="_blank" className={style.links} href={demovideo}>
            Demo Video
          </a>
        </div>
      </div>
      <div className={style.iconsDiv}>{icons?.map((val: any) => val)}</div>
      <p className={style.p}>{dec}</p>
    </section>
  )
}

export default ProjectDiv
