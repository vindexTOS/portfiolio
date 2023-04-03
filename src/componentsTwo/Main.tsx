import React from 'react'
import Menu from './Menu'
import { UsePortfolioContext } from '../context/PortfolioContext'
const Main = () => {
  const { dropOutMenu } = UsePortfolioContext()
  const style = { main: `w-[100%] h-[100vh]  bg-img relative` }
  return (
    <main className={style.main}>
      {' '}
      <Menu />{' '}
    </main>
  )
}

export default Main
