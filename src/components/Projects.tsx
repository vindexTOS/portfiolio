import React from 'react'
import { UsePortfolioContext } from '../context/PortfolioContext'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const { Project } = UsePortfolioContext()
  const style = {
    mainDiv: `w-[100%] h-[900px] bg-[#24273d] flex flew-wrap items-center justify-center`,
  }
  return (
    <section className={style.mainDiv} id="project-section">
      {Project.map((val: any) => (
        <ProjectCard
          title={val.title}
          dec={val.dec}
          link={val.link}
          git={val.git}
          demovideo={val.demovideo}
          imgs={val.imgs}
          icons={val.icons}
        />
      ))}
    </section>
  )
}

export default Projects
