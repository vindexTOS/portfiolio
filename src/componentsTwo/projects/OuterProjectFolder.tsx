import React, { FC } from 'react'
import folder from '../../assets/icons/folderclosed.png'
import folderopen from '../../assets/icons/folderopen.png'
import { FolderState, FolderAction } from './MainProjectContent'
import { ProjectItemType } from '../../DataUtils'
import ProjectsRecurs from './ProjectsRecurs'
type OuterFolderProps = {
  Dispatch: React.Dispatch<FolderAction>
  type: string
  data: ProjectItemType[]
  state: boolean
  title: string
}

const OuterProjectFolder: FC<OuterFolderProps> = ({
  data,
  Dispatch,
  state,
  type,
  title,
}) => {
  return (
    <div>
      <div
        className="flex items-center gap-5 cursor-pointer"
        onClick={() => Dispatch({ type: type })}
      >
        {' '}
        <img className={`w-[2rem]`} src={state ? folderopen : folder} />{' '}
        <h1 className="text-gray-500 text-[1.1rem]">{title}</h1>
      </div>
      {state && (
        <>
          {data?.map((val: any, index: number) => (
            <ProjectsRecurs key={val.id} data={val} index={index} />
          ))}
        </>
      )}
    </div>
  )
}

export default OuterProjectFolder
