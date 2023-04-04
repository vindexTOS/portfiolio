import React, { FC } from 'react'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import folder from '../../assets/icons/folderclosed.png'
import folderopen from '../../assets/icons/folderopen.png'
import ProjectDiv from './ProjectDiv'
type MainProps = {
  zoom: boolean
}
const MainProjectContent: FC<MainProps> = ({ zoom }) => {
  const { Project, projectDispatch, projectState } = UsePortfolioContext()
  const style = {
    mainContent: ` flex w-[100%] h-[93%] p-2 gap-5   justify-between  max_md:flex-col `,
    folders: `w-[400px] max_md:w-[100%] bg-white h-[100%] flex flex-col px-10 gap-5`,
    header: `flex text-[1.8rem] font-bold px-5 text-gray-700 folderHeader`,
    folder: `hover:bg-gray-200 w-[100%] text-gray-400  h-[3rem] flex  folderFont items-center text-[1rem] gap-2 cursor-pointer px-4`,
    projectDiv: `w-[100%]  overflow-y-scroll   h-[100%] `,
    folderDiv: `flex flex-col gap-2`,
    icon: `w-[2rem]`,
  }

  return (
    <section className={style.mainContent}>
      <div className={style.folders}>
        <h1 className={style.header}>Projects</h1>
        <div className={style.folderDiv}>
          {Project.map((val: any, index: number) => {
            return (
              <div
                onClick={() =>
                  projectDispatch({
                    type: 'id',
                    payload: val.id,
                  })
                }
                className={`hover:bg-gray-200 w-[100%] text-gray-400  h-[3rem] flex  folderFont items-center text-[1rem] gap-2 cursor-pointer px-4 ${
                  projectState.productID === val.id && 'bg-gray-200  '
                }`}
              >
                <img
                  className={style.icon}
                  src={projectState.productID === val.id ? folderopen : folder}
                />
                {val.title}
              </div>
            )
          })}
        </div>
      </div>
      <div className={style.projectDiv}>
        <ProjectDiv zoom={zoom} />
      </div>
    </section>
  )
}

export default MainProjectContent
