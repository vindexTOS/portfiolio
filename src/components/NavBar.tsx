import React from 'react'
import navBack from '../assets/navBack.jpg'
import { Link } from 'react-router-dom'
import Me from '../assets/me.jpg'
const NavBar = () => {
  const style = {
    mainNav: `w-[100%] h-[400px] bg-img  `,
    nav: `w-[100%] h-[100px] bg-none text-white font-bold flex gap-5  items-center justify-between  px-10 z-20`,
    link: `hover:text-orange-400 cursor-pointer`,
    linkDiv: ` flex gap-6 `,
    personInfo: ` flex flex-col items-center justify-center w-[100%]  `,
    img: ` w-[140px] h-[140px] rounded-[50%]  `,
  }

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
          {new Array('Home', 'Skills', 'Projects', 'Contact').map(
            (val: string) => {
              return <a className={style.link}> {val} </a>
            },
          )}
        </div>
      </nav>
      <section className={style.personInfo}>
        <img className={style.img} src={Me} />
        <h1 className="text-[2.5rem] font-bold text-orange-500">
          Giorgi Kutateladze{' '}
        </h1>
        <p className="text-gray-300">Front-end React developer from georgia </p>
      </section>
    </nav>
  )
}

export default NavBar
