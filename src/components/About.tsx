import React from 'react'
import MyPhoto from '../assets/me.jpg'
import { UsePortfolioContext } from '../context/PortfolioContext'
const About = () => {
  const { aboutRef } = UsePortfolioContext()
  const style = {
    mainDiv: ` flex items-center justify-center bg-[#1e2233] w-[100%] h-[500px]  max_xml:h-[900px] `,
    aboutMe: `w-[70%]  max_xml:w-[90%] border-2 border-gray-800 flex items-center justify-center  max_md:flex-col  gap-5 p-5`,
    img: ` w-[300px] border-gray-800 border-4 `,
  }
  return (
    <div ref={aboutRef} className={style.mainDiv}>
      <div className={style.aboutMe}>
        <img className={style.img} src={MyPhoto} />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p className="text-[1.2rem] text-orange-700 font-bold">Discover</p>
            <h1 className="text-[2rem] text-white font-bold">About Me</h1>
            <div className="w-[60px] bg-orange-700 h-[3px]"></div>
          </div>
          <p className="text-white text-[12px]" id="about-section">
            Welcome to my portfolio website! My name is Giorgi Kutateladze, and
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
            website, and I look forward to the opportunity to work with you!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
