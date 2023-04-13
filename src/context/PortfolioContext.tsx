import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useReducer,
  useEffect,
} from 'react'
import { db } from '../firebase/firebase'
import { useNavigate } from 'react-router-dom'

import {
  SkillDataType,
  portfolioData,
  skills,
  ProjectItemType,
  Project,
} from '../DataUtils'
import { collection, onSnapshot, query } from 'firebase/firestore'
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

type Cell = {
  projectsData: ProjectItemType[]
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

const PortfolioContext = createContext<Cell | null>(null)

export const PortfolioContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  // getting data from fire base
  const [projectsData, setProjectsData] = useState<ProjectItemType[]>(Project)
  useEffect(() => {
    const q = query(collection(db, 'portfolio-projects'))
    const unsub = onSnapshot(q, (querrySnapshot) => {
      let data: any = []
      querrySnapshot.forEach((doc: any) => {
        data.push({ ...doc.data(), id: doc.id })
      })
      setProjectsData([...projectsData, ...data])
    })
    console.log(projectsData)
    return () => unsub()
  }, [])
  useEffect(() => {
    console.log(projectsData)
  }, [projectsData])
  // projects

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
        projectsData,
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
