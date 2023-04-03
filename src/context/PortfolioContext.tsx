import React, { createContext, useContext, useRef, useState } from 'react'
import { imgdata } from '../assets/imgdata'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { TbBrandTailwind, TbBrandVite } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { IconBaseProps, IconType } from 'react-icons'
import { SiTypescript } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'

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
  projectRef: React.MutableRefObject<null>
  aboutRef: React.MutableRefObject<null>
  navRef: (link: string) => void
  dropOutMenu: boolean
  setDropOutMenu: React.Dispatch<boolean>
  Navigate: (link: string) => void
  CloseWindow: () => void
  navRelocation: boolean
}

export const portfolioData = {
  aboutMe: `  My full name is Giorgi Kutateladze, and
  I am a self-taught React developer. As a passionate learner and
  problem solver, I taught myself how to code and have been developing
  web applications using React ever since. I have a strong
  understanding of the React ecosystem and enjoy creating responsive
  and user-friendly interfaces. I believe that my dedication to
  learning and my ability to think critically allow me to tackle
  complex problems. On this website, you will find examples of my
  work, including some of the projects I have developed using React. I
  am constantly learning and expanding my skillset, and I am excited
  about the opportunity to collaborate with other developers and
  businesses. Thank you for taking the time to visit my portfolio
  website, and I look forward to the opportunity to work with you!`,
  InreleventInfo: [
    { point: `I Have A Bachelor in Agricultural Science` },
    { point: `I Am Welder As A Trade ` },
    {
      point: `My Name Is Giorgi And I Believe In Fitness...`,
    },
    {
      point: ` Weight Lifting Is One Of The Most I Important Passions In My Life`,
    },
    {
      point: `I Have Some Bit Of Knowledge In Video Editing And Photoshop`,
    },
  ],
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
    {
      title: 'PC Market App',
      dec: `The website is built using React, Typescript, and styled with Tailwind. The backend is powered by Firebase. Users can easily post their products for sale, and manage their listings with features like photo uploads and pricing information. To enhance communication between buyers and sellers, the website includes a direct messaging feature. Additionally, users can leave five-star reviews to rate their experience with a particular seller.
  The website is designed with different categories and filters to make it easy for users to find exactly what they're looking for. Plus, there are two different layout options to choose from.`,
      link: `https://pcmarket.netlify.app/`,
      git: `https://github.com/vindexTOS/PCmarket`,
      demovideo: `https://www.youtube.com/watch?v=X0PlNZ0djRA&feature=youtu.be`,
      imgs: [
        imgdata.mainPC,
        imgdata.product,
        imgdata.productupload,
        imgdata.filter,
        imgdata.reviews,
        imgdata.userprofile,
        imgdata.messages,
        imgdata.messagesMain,
        imgdata.secondlayout,
        imgdata.simular,
        imgdata.singleproduct,
      ],
      icons: [
        <FaReact className="text-blue-400" />,
        <SiTypescript className="text-blue-500" />,
        <SiFirebase className="text-[#FFA611]" />,
        <TbBrandTailwind className="text-blue-500" />,
      ],
    },
    {
      title: 'Cs Go Case Simulator',
      dec: `Cs Go Case Opening simulator with built in invetnory and monetary system that is connected to local storage, if your money runs out you can fight gabe newell himself in game of rock papper and scissors to get prizes, i built most of this app in a day using Vite - React - TypeScript and tailwind for styling as always `,
      link: `https://csgocaseopening.netlify.app/`,
      git: `https://github.com/vindexTOS/csgo-case`,
      demovideo: `https://www.youtube.com/watch?v=YqtBbDZZ2mU`,
      imgs: [
        imgdata.chromaopen,
        imgdata.inventory,
        imgdata.knifecase,
        imgdata.gabefight,
        imgdata.gabelost,
      ],
      icons: [
        <FaReact className="text-blue-400" />,
        <SiTypescript className="text-blue-500" />,

        <TbBrandTailwind className="text-blue-500" />,
        <TbBrandVite className="text-purple-500" />,
      ],
    },
    {
      title: 'DogGPT',
      dec: `ChatGPT has competitor and i build it... all jokes aside this project was inspired by other developer's project  CatGPT , i made it about dogs  instad of cats because im a dog person, it's a simple chat simultor that calls random facts from dog facts API every time user types anything , it took me less than a houre to make it  `,
      link: 'https://glistening-cucurucho-296957.netlify.app/',
      git: 'https://github.com/vindexTOS/dogGPT',
      demovideo: 'https://www.youtube.com/watch?v=VBcYNsM5qwA&feature=youtu.be',
      imgs: [imgdata.mainDog, imgdata.res],
      icons: [
        <FaReact className="text-blue-400" />,
        <IoLogoJavascript className="text-yellow-400" />,

        <TbBrandTailwind className="text-blue-500" />,
      ],
    },
  ]
  const aboutRef = useRef(null)
  const projectRef = useRef(null)

  const navRef = (link: string) => {
    if (link === 'about') {
      const element = (aboutRef.current as unknown) as HTMLDivElement
      element?.scrollIntoView({
        behavior: 'smooth',
      })
    } else if (link === 'project') {
      const element = (projectRef.current as unknown) as HTMLDivElement
      element?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  /// sec attempt of portfolio logic

  const [dropOutMenu, setDropOutMenu] = useState<boolean>(false)

  // animation when opening a window
  const [navRelocation, setNavRelocation] = useState<boolean>(true)

  // to open up the window
  const navigate = useNavigate()
  const Navigate = (link: string) => {
    setNavRelocation(false)
    navigate(link)
  }
  // to close the window
  const CloseWindow = () => {
    setNavRelocation(true)
    navigate('/')
  }

  // data for about

  return (
    <PortfolioContext.Provider
      value={{
        Project,
        projectRef,
        aboutRef,
        navRef,
        dropOutMenu,
        setDropOutMenu,
        Navigate,
        CloseWindow,
        navRelocation,
      }}
    >
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
