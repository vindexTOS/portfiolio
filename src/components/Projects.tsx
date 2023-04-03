import React from 'react'
import { UsePortfolioContext } from '../context/PortfolioContext'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const { Project, projectRef } = UsePortfolioContext()
  const style = {
    mainDiv: `w-[100%] h-[100%] py-20 bg-[#24273d] flex flex-wrap  gap-4  items-center justify-center`,
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
      <span ref={projectRef}></span>
    </section>
  )
}

export default Projects
