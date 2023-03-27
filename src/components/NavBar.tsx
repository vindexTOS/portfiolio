import React from 'react'
import navBack from '../assets/navBack.jpg'
import { Link } from 'react-router-dom'
import Me from '../assets/me.jpg'
import { VscThreeBars } from 'react-icons/vsc'
const NavBar = () => {
  const style = {
    mainNav: `w-[100%] h-[400px] bg-img  `,
    nav: `w-[100%] h-[100px] bg-none text-white font-bold flex gap-5  items-center justify-between  px-10 z-20`,
    link: `hover:text-orange-400 cursor-pointer`,
    linkDiv: ` flex gap-6 max_sm:hidden`,
    personInfo: ` flex flex-col items-center justify-center w-[100%]  `,
    img: ` w-[110px] h-[110px] rounded-[50%]  `,
    icon: `text-[2.5rem] sm:hidden `,
  }
  const [dropDown, setDropDown] = React.useState<boolean>(false)

  const links = [
    { title: `About`, link: `#about-section` },
    { title: `Projects`, link: `#project-section` },
    { title: `Skills`, link: `#skill-section` },
  ]

  return (
    <nav
      className={style.mainNav}
      //   style={{ backgroundImage: `url(${navBack})` }}
    >
      <nav className={style.nav}>
        <h1 className="text-orange-400 text-[1.5rem]">
          <span className="font-bold text-white text-[1.7rem]">V</span>index
        </h1>
        <div className={style.linkDiv}>
          {links.map((val: any) => {
            return (
              <a className={style.link} href={val.link}>
                {val.title}
              </a>
            )
          })}
        </div>
        <VscThreeBars
          className={style.icon}
          onClick={() => setDropDown(!dropDown)}
        />
        {dropDown && (
          <div className="flex flex-col items-center justify-center gap-10 w-[100%] h-[100%] absolute text-[2rem] top-20 right-0 bg-gray-800">
            {' '}
            {links.map((val: any) => {
              return (
                <a className={style.link} href={val.link}>
                  {val.title}
                </a>
              )
            })}
          </div>
        )}
      </nav>
      <section className={style.personInfo}>
        {/* <img className={style.img} src={Me} /> */}
        <h1 className="text-[2.5rem] font-bold text-orange-500">
          Giorgi Kutateladze
        </h1>
        <p className="text-gray-300">Front-end React developer from Georgia </p>
      </section>
    </nav>
  )
}

export default NavBar
