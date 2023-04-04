import React, { FC } from 'react'
import { IconBaseProps } from 'react-icons'
import { useParams } from 'react-router-dom'
import { UsePortfolioContext } from '../../context/PortfolioContext'
type ProjectDivProps = {}
const ProjectDiv: FC<ProjectDivProps> = () => {
  const { Project, projectState } = UsePortfolioContext()

  const projectData = Project?.find(
    (val: any) => val.id === projectState.productID,
  )

  const { title, dec, link, git, demovideo, imgs, id, icons } =
    projectData || {}

  return <div>{title}</div>
}

export default ProjectDiv
