import React from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { UsePortfolioContext } from '../../context/PortfolioContext'
import ProjectDiv from './ProjectDiv'
const MainProjectContent = () => {
  const { Project, projectDispatch } = UsePortfolioContext()
  const style = {
    mainContent: ` flex w-[100%] h-[93%] p-2 gap-5   justify-between overflow-y-scroll  max_md:flex-col `,
    folders: `w-[400px] max_md:w-[100%] bg-white h-[93%] flex flex-col px-10 `,
    header: `flex text-[1.8rem] font-bold text-gray-700`,
    folder: `bg-gray-300 w-[100%] h-[3rem] flex  items-center  px-4`,
  }
  return (
    <section className={style.mainContent}>
      <div className={style.folders}>
        <h1 className={style.header}>Projects</h1>
        <div>
          {Project.map((val: any) => {
            return (
              <div
                onClick={() => projectDispatch({ type: 'id', payload: val.id })}
                className={style.folder}
              >
                {val.title}
              </div>
            )
          })}
        </div>
      </div>
      <div>
        <ProjectDiv />
      </div>
    </section>
  )
}

export default MainProjectContent
