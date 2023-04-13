import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { imgdata } from '../assets/imgdata'
import { FaReact } from 'react-icons/fa'
import { SiFirebase } from 'react-icons/si'
import { TbBrandTailwind, TbBrandVite } from 'react-icons/tb'
import { IoLogoJavascript } from 'react-icons/io'
import { IconBaseProps, IconType } from 'react-icons'
import { SiTypescript } from 'react-icons/si'
import { useNavigate } from 'react-router-dom'
import { skillsData } from '../assets/skillicons/SkillsData'
import { NavData } from '../assets/calc/navData'
type Action = {
  type: string
  payload: string
}
type State = {
  productID: string
}

type layOutState = {
  greenLayout: boolean
  purpleLayOut: boolean
}
type layOutAction = {
  type: string
}
type SkillDataType = {
  title: string
  icon: string
  color: string
  bgo: string
}[]
type ProjectItemType = {
  title: string
  dec: string
  link: string
  git: string
  demovideo?: string
  imgs: string[]
  id: string
  icons: IconBaseProps[]
  personal: string
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
  projectDispatch: React.Dispatch<Action>
  projectState: State
  skills: SkillDataType
  layoutDispatch: React.Dispatch<layOutAction>
  layoutState: layOutState
  dragTurnOff: boolean
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
      dec: `This app is packed with features, app helps users achieve their fitness goals in a personalized and fun way.' The app calculates users' BMI, age, and health status to create a personalized exercise plan. The app also offers progress tracking and statistical analysis, so users can see their progress over time. To keep users motivated, the app has a rewards system that rewards users for completing challenges. The app allows users to register and sign in to Firebase, and users can change their name and profile picture. With plans to include features such as user comparison statistics, this app is designed to change the way people get fit and stay motivated towards their goals.`,
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
      personal: `As a fitness enthusiast, I came up with an original idea for a fitness app that sets itself apart from the rest. What makes it unique is the award system and achievements that incentivize users to strive for excellence day after day. More information about this app can be found in the description section below.

      When I first tackled this project using React, it was one of the biggest challenges I had faced. It took me two months to complete, and looking back, there are many areas where I could have done things better. For instance, the code is hard to maintain due to my incomplete understanding of the underlying principles. I could have also made the app more dynamic instead of relying on hardcoding many elements. Nonetheless, despite its shortcomings, the app works as intended, and the experience was invaluable in helping me learn more about React.
      
      Since then, I have worked on several other projects, and I can attest that my coding has improved significantly. I attribute this improvement to the lessons learned while building this fitness app. For example, I started using TypeScript, which has made my code much cleaner. I have also gained a better understanding of what it takes to build successful big projects.
      
      My plan now is to remake the fitness app using React Native and deploy it on an app store. `,
      id: 'ranger-app',
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
      id: 'pc-market-app',
      personal: `My second significant project was developing a PC market app inspired by the Georgian website mymarket.ge ( Read more about it on down below). Despite being more complex and extensive than the Ranger Fitness App, I completed it in just three weeks. The code is much cleaner and more dynamic, and I learned a lot about Firebase. This was also my first project using TypeScript, making it a valuable learning experience.,Overall, building the PC market app was a significant milestone in my coding journey, and it has been instrumental in developing my skills as a developer.`,
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
      id: 'cs-go-simulator-app',
      personal: `I developed this app as a personal challenge and a tribute to one of my favorite games, CS:GO. Although it's nothing extraordinary, the process of creating it was relatively straightforward. It only took me a day to complete, with 90% of it involving copy-pasting photo links and gun descriptions from Steam.,It was a fun side project that allowed me to challenge myself and expand my coding skills in a low-pressure environment.`,
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
      id: 'dog-gpt',
      personal: `Not alot to say about this app you can just read general description down below  `,
    },
    {
      title: 'Gios Gym Market',
      dec: `This website is for a gym equipment store, allowing clients to search and purchase equipment. It includes features such as billing information and the ability to add items to a cart, as well as a section showing similar products. Additionally, a loading layout is present while data is retrieved from Firebase `,
      link: 'https://stirring-starburst-059007.netlify.app/',
      git: 'https://github.com/vindexTOS/gios-gym',

      imgs: [
        imgdata.maingym,
        imgdata.cart,
        imgdata.contacnt,
        imgdata.billing,
        imgdata.shippinggym,
        imgdata.singleproductgym,
      ],
      icons: [
        <FaReact className="text-blue-400" />,
        <IoLogoJavascript className="text-yellow-400" />,
        <SiFirebase className="text-[#FFA611]" />,

        <TbBrandTailwind className="text-blue-500" />,
      ],
      id: 'gym-market',
      personal: `This was my first attempt at building a real app using React, and it took me a considerable amount of time to complete it. Although the code is not dynamic and heavily hardcoded, I was able to learn Tailwind CSS during the process.
      Despite some issues with the code, such as creating the context API in the app file instead of creating a costume hook for it, and a lot of responsive styling problems that I could have fixed right now, I chose to let it stay how it was as a reminder how much I progressed since I  created this app   , Over all it was a valuable learning experience for me.   `,
    },
    {
      title: 'Bunch Of Calculators',
      dec: `This project features a life expectancy calculator that determines your life expectancy based on your lifestyle and health condition. Additionally, there is a one rep max calculator for weightlifting that calculates your maximum weightlifting capacity between 100% and 55%. The compound interest calculator is self-explanatory. Lastly, the project includes some basic calculators such as a tip calculator and BMI calculator.`,
      link: 'https://taupe-dieffenbachia-f6bd97.netlify.app/',
      git: 'https://github.com/vindexTOS/calculators',

      imgs: [
        NavData.emi,
        NavData.life,
        NavData.onerep,
        NavData.compauned,
        NavData.bmi,

        NavData.tipCal,
      ],
      icons: [
        <FaReact className="text-blue-400" />,
        <SiTypescript className="text-blue-500" />,
        <TbBrandVite className="text-purple-500" />,

        <TbBrandTailwind className="text-blue-500" />,
      ],
      id: 'calculators',
      personal: `I do little challenges like this all the time to test my skills and make sure I am proficient with React. It took me less than five minutes to make most of this , but Life Expectation Calculator was bit challanging, Nothing special tho i manage to make it in less then a day , So  I combine all of this calculators  into one project. These calculators are primarily fitness-related, and some are financially related.`,
    },
  ]
  const bgOpacity = '.1'
  const bghover = '.4'
  const skills: SkillDataType = [
    {
      title: `JavaScript`,
      icon: skillsData.js,
      color: `rgba(255, 255, 0, ${bghover})`,
      bgo: `rgba(255, 255, 0, ${bgOpacity})`,
    },
    {
      title: `Typescript`,
      icon: skillsData.typescript,
      color: `rgba(0, 122, 204,  ${bghover})`,
      bgo: `rgba(0, 122, 204,  ${bgOpacity})`,
    },
    {
      title: `React`,
      icon: skillsData.react,
      color: `rgba(97, 219, 251,  ${bghover})`,
      bgo: `rgba(97, 219, 251,  ${bgOpacity})`,
    },
    {
      title: `TailwindCss`,
      icon: skillsData.tailwind,
      color: `rgba(34, 133, 245,  ${bghover})`,
      bgo: `rgba(34, 133, 245,  ${bgOpacity})`,
    },
    {
      title: `Git`,
      icon: skillsData.git,
      color: `rgba(255, 165, 0,  ${bghover})`,
      bgo: `rgba(255, 165, 0,  ${bgOpacity})`,
    },
    {
      title: `HTML`,
      icon: skillsData.html,
      color: `rgba(255, 165, 0,  ${bghover})`,
      bgo: `rgba(255, 165, 0,  ${bgOpacity})`,
    },
    {
      title: `CSS`,
      icon: skillsData.css,
      color: `rgba(0, 152, 255,  ${bghover})`,
      bgo: `rgba(0, 152, 255,  ${bgOpacity})`,
    },
    {
      title: `Framer Motion`,
      icon: skillsData.framer,
      color: `rgba(138, 48, 255,  ${bghover})`,
      bgo: `rgba(138, 48, 255,  ${bgOpacity})`,
    },
    {
      title: `Firebase`,
      icon: skillsData.firebase,
      color: `rgba(255, 166, 17,  ${bghover})`,
      bgo: `rgba(255, 166, 17,  ${bgOpacity})`,
    },
    {
      title: `Vite`,
      icon: skillsData.vite,
      color: `rgba(144, 17, 255,  ${bghover})`,
      bgo: `rgba(144, 17, 255,  ${bgOpacity})`,
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
  // project reducer

  const projectReducer = (state: State, action: Action) => {
    switch (action.type) {
      case 'id':
        return {
          ...state,
          productID: state.productID = action.payload,
        }

      default:
        return state
    }
  }
  const [projectState, projectDispatch] = useReducer(projectReducer, {
    productID: 'ranger-app',
  })

  // different layout logic

  const layOutReducer = (state: layOutState, action: layOutAction) => {
    switch (action.type) {
      case 'green':
        return {
          ...state,
          greenLayOut: state.greenLayout = true,
          purpleLayOut: state.purpleLayOut = false,
        }
      case 'purple':
        return {
          ...state,
          greenLayOut: state.greenLayout = false,
          purpleLayOut: state.purpleLayOut = true,
        }
      default:
        return state
    }
  }

  const [layoutState, layoutDispatch] = useReducer(layOutReducer, {
    greenLayout: true,
    purpleLayOut: false,
  })

  // window drag stop functionality
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const [dragTurnOff, setDragTurnOff] = useState<boolean>(true)
  useEffect(() => {
    if (width < 450) {
      setDragTurnOff(false)
    } else {
      setDragTurnOff(true)
    }
  }, [width])

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
        projectState,
        projectDispatch,
        skills,
        layoutState,
        layoutDispatch,
        dragTurnOff,
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
