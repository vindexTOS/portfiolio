import React, { FC } from 'react'
import { SiNetlify } from 'react-icons/si'
import { AiFillYoutube, AiFillGithub } from 'react-icons/ai'
import { IconBaseProps, IconType } from 'react-icons'
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
  const style = {
    mainDiv: `w-[400px] h-[600px] border-2 border-white  bg-white p-5 flex flex-col items-center `,
    img: `outline outline-2 outline-blue-200 `,
    linkDiV: `w-[100%] `,
    innerLinks: ` flex items-center justify-starts gap-2`,
    links: ` underline text-blue-500 hover:text-blue-600`,
    iconDiv: `flex p-2 w-[100%] text-[2rem] `,
  }
  return (
    <div className={style.mainDiv}>
      <h1 className="text-blue-400 text-[2rem] font-bold">{title}</h1>
      <div className={style.iconDiv}>
        {' '}
        {icons?.map((val: any) => (
          <p>{val}</p>
        ))}
      </div>
      <img className={style.img} src={imgs[0]} />
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
      <p className="text-[12px]">{dec}</p>
    </div>
  )
}

export default ProjectCard
