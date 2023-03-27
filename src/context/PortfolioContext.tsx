import React, { createContext, useContext } from 'react'
import { imgdata } from '../assets/imgdata'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { TbBrandTailwind } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { IconBaseProps, IconType } from 'react-icons'
type ProjectItemType = {
  title: string
  dec: string
  link: string
  git: string
  demovideo: string
  imgs: string[]
  icons: IconBaseProps[]
}
type Cell = {
  Project: ProjectItemType[]
}

const PortfolioContext = createContext<Cell | null>(null)

export const PortfolioContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // projects
  const Project: ProjectItemType[] = [
    {
      title: 'Ranger App',
      dec:
        'This app is loaded with features, app help users achieve their fitness goals in a personalized and engaging way. The app calculates users BMI, age, and fitness status to create a customized workout program. The app also provides progress tracking and statistical analysis, so users can see how much they have improved over time. To keep users motivated, the app has a reward system that gives users awards and achievements for completing challenges. The app allows users to register and log in using Firebase, and users can also change their username and profile photo. With plans to add features such as user comparison statistics, this app is set to revolutionize the way people approach fitness and stay motivated towards their goals.',
      link: `https://ranger-app.netlify.app/`,
      git: `https://github.com/vindexTOS/ranger-app`,
      demovideo: `https://www.youtube.com/watch?v=vKx7S7jNV8w`,
      imgs: [
        imgdata.main,
        imgdata.awards,
        imgdata.bmi,
        imgdata.end,
        imgdata.history,
        imgdata.max,
        imgdata.statistics,
        imgdata.user,
        imgdata.userphoto,
      ],
      icons: [
        <FaReact className="text-blue-400" />,
        <IoLogoJavascript className="text-yellow-400" />,
        <SiFirebase className="text-[#FFA611]" />,
        <TbBrandTailwind className="text-blue-500" />,
      ],
    },
  ]

  return (
    <PortfolioContext.Provider value={{ Project }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export const UsePortfolioContext = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('ITs not wrapped etc')
  }
  return context
}
