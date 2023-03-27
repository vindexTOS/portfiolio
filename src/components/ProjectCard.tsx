import React, { FC } from 'react'
import { SiNetlify } from 'react-icons/si'
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineZoomIn,
  AiOutlineZoomOut,
} from 'react-icons/ai'
import { IconBaseProps, IconType } from 'react-icons'
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

type ProjectCardProps = {
  title: string
  dec: string
  link: string
  git: string
  demovideo: string
  imgs: string[]
  icons: IconBaseProps[]
}
const ProjectCard: FC<ProjectCardProps> = ({
  title,
  dec,
  link,
  git,
  demovideo,
  imgs,
  icons,
}) => {
  // zoom in img

  const [zoom, setZoom] = React.useState<boolean>(false)

  const style = {
    mainDiv: `w-[400px] h-[600px] border-2 border-white  bg-gray-800 p-5 flex flex-col items-center `,
    img: `z-20 outline outline-2 outline-blue-200  ${
      zoom ? 'w-[700px] h-[500px]  absolute' : ' '
    }`,
    linkDiV: `w-[100%] `,
    innerLinks: ` flex items-center justify-starts gap-2`,
    links: ` underline text-blue-500 hover:text-blue-600`,
    iconDiv: `flex p-2 w-[100%] text-[2rem] `,
    imgDiv: `pb-2  ${zoom ? '' : 'relative '}`,
    arrowDiv: ` ${
      zoom
        ? 'text-[3rem] w-[700px]   flex justify-between items-center'
        : 'absolute flex w-[100%] justify-between px-2 text-[2rem] items-center h-[100%]'
    }`,
    arrowIcon: `text-gray-300 hover:text-gray-400  cursor-pointer`,
  }
  const [imgIndex, setImgIndex] = React.useState<number>(0)
  // img scroller
  const ArrowMovment = (direction: string) => {
    if (direction === 'right') {
      if (imgIndex >= imgs.length - 1) {
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
  // img scrolling by itself
  React.useEffect(() => {
    const time = setTimeout(() => {
      if (imgIndex >= imgs.length - 1) {
        setImgIndex(0)
      } else {
        setImgIndex(imgIndex + 1)
      }
    }, 3000)
    return () => clearInterval(time)
  }, [imgIndex])

  return (
    <div className={style.mainDiv}>
      <h1 className="text-blue-400 text-[2rem] font-bold">{title}</h1>
      <div className={style.iconDiv}>
        {icons?.map((val: any) => (
          <p>{val}</p>
        ))}
      </div>
      <div className={style.imgDiv}>
        <div className={style.arrowDiv}>
          <BsArrowLeftCircle
            onClick={() => ArrowMovment('left')}
            className={style.arrowIcon}
          />
          <BsArrowRightCircle
            onClick={() => ArrowMovment('right')}
            className={style.arrowIcon}
          />
        </div>
        {zoom ? (
          <AiOutlineZoomOut
            className="  text-[2rem] text-blue-400"
            onClick={() => setZoom(!zoom)}
          />
        ) : (
          <AiOutlineZoomIn
            onClick={() => setZoom(!zoom)}
            className="absolute text-[2rem] text-blue-400"
          />
        )}
        <img className={style.img} src={imgs[imgIndex]} />

        <div className="flex w-[100%] absolute items-center justify-center gap-5 bottom-5  ">
          {imgs.map((val: any, index: number) => (
            <div
              className={`w-[10px] h-[10px] rounded-[50%]   ${
                index === imgIndex ? 'bg-yellow-300' : 'bg-blue-300'
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div className={style.linkDiV}>
        <div className={style.innerLinks}>
          <SiNetlify className="text-blue-400" />
          <a target="_blank" className={style.links} href={link}>
            Live website
          </a>
        </div>
        <div className={style.innerLinks}>
          <AiFillGithub className="text-orange-500" />{' '}
          <a target="_blank" className={style.links} href={git}>
            GitHub
          </a>
        </div>
        <div className={style.innerLinks}>
          <AiFillYoutube className="text-red-500" />{' '}
          <a target="_blank" className={style.links} href={demovideo}>
            Demo Video
          </a>
        </div>
      </div>
      <p className="text-[12px] text-white">{dec}</p>
    </div>
  )
}

export default ProjectCard
