import { IoLogoJavascript } from 'react-icons/io'
import { imgdata } from './assets/imgdata'
import { skillsData } from './assets/skillicons/SkillsData'
import { FaReact } from 'react-icons/fa'
import { SiFirebase, SiTypescript } from 'react-icons/si'
import { TbBrandTailwind, TbBrandVite } from 'react-icons/tb'
import { IconBaseProps } from 'react-icons'
import { NavData } from './assets/calc/navData'
import { GrNode } from 'react-icons/gr'
import { DiMongodb } from 'react-icons/di'
export type SkillDataType = {
  title: string
  icon: string
  color: string
  bgo: string
}[]
export type ProjectItemType = {
  title: string
  dec: string
  link?: string
  git: string
  demovideo?: string
  imgs: string[]
  id: string
  icons?: IconBaseProps[]
  personal: string
}

export const portfolioData = {
  aboutMe: `  My full name is Giorgi Kutateladze, and
    I am a self-taught React developer. As a passionate learner and
    problem solver, I taught myself how to code and have been developing
    web applications using React ever since. I have a strong
    understanding of the React ecosystem and enjoy creating complex features for website. I have really strong grasp of basicis with allows me to learn new technology really fast. On this website, you will find examples of my
    work, including some of the projects I have developed using React. I
    am constantly learning and expanding my skillset, and I am excited
    about the opportunity to collaborate with other developers and
    businesses. `,
  InreleventInfo: [
    {
      point: `I have a Bachelor in Agricultural Science... I am interested in permaculture, one of my life gole is to have my own food forest and permaculture garden `,
    },
    {
      point: `I am welder as a trade, I like building stuff in real life as much as i like building web projects here,anywhere from squat racks to hand made knives, i am intrested in making everything `,
    },
    {
      point: `My Name Is Giorgi And I Believe In Fitness... Weight lifting is one of the most important passions in my life, and im also obsessed with nutrition and human diets,my favorite book about the subject is  nutrition and physical degeneration by dr Weston A. Price `,
    },

    {
      point: `I have some bit of knowledge in video editing And photoshop `,
    },
  ],
}
const bgOpacity = '.1'
const bghover = '.4'
export const skills: SkillDataType = [
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
    title: `Redux`,
    icon: skillsData.redux,
    color: `rgba(118, 74, 188,  ${bghover})`,
    bgo: `rgba(118, 74, 188,  ${bgOpacity})`,
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

export const MainProjects: ProjectItemType[] = [
  {
    title: 'Fittness APP ',
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
]

export const Project: ProjectItemType[] = [
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
    title: 'Node/Img upload',
    dec: `Simple image url web app , I used firestore as image storage,after uploading the image to firestore we get back image url with than we post it on the mongo data base with express js server api, using post method with axios on the front end , then we get the data from api and display it on the gallary `,

    git: 'https://github.com/vindexTOS/img-upload',
    demovideo: 'https://www.youtube.com/watch?v=UfV5r_8il44',
    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fimguplader%2FphotoProject.webp?alt=media&token=c6df6544-850c-4c42-912e-9ca2906a84a6`,
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fimguplader%2FphotoProject.webp?alt=media&token=c6df6544-850c-4c42-912e-9ca2906a84a6`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <GrNode className="text-green-500" />,
      <DiMongodb className="text-green-600" />,
      <SiFirebase className="text-[#FFA611]" />,
      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'img-upload',
    personal: `my first Node Express project, which is a simple image uploader that provides you with a Firebase store link for the photo. Additionally, it has a gallery that fetches data from MongoDB. The technologies I used for this project are Firestore for storage, MongoDB for the database, Express.js for the API, React and Tailwind CSS for the front-end, and TypeScript for coding.
    `,
  },
  {
    title: 'Web-Dev Quizz',
    dec: `The quiz app is a web application that allows users to test their knowledge on front-end development topics, specifically React, JavaScript, HTML/CSS. The app features a variety of questions of varying difficulty levels, allowing users to customize their quiz-taking experience to suit their level of knowledge.,Users can choose from different categories of questions, including React-specific questions, JavaScript-specific questions, and HTML/CSS-specific questions. Additionally, the app features different difficulty settings that allow users to select the level of challenge they want to tackle. `,
    link: 'https://wonderful-narwhal-0b8ac3.netlify.app/',
    git: 'https://github.com/vindexTOS/react-question-quizz',

    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fquizz%2Fquizz2.webp?alt=media&token=ab9c64fc-678c-446f-af5f-6c74247c8c9f`,
      `https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/portfoliophotos%2Fquizz%2Fquizz.webp?alt=media&token=62d0941a-9f32-45d8-a63a-8422ee2e1f31`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'quizz',
    personal: `I created this quiz app mainly to help myself learn more about trivial questions related to front-end development topics like React, JavaScript, HTML/CSS, and more. As someone who is passionate about learning and improving my skills, I found that building an interactive quiz app was a great way to make the learning process more engaging and enjoyable.

    I made sure to include a variety of customization options, such as different categories of questions and difficulty levels, to provide a tailored learning experience. I've found this app to be a valuable tool that I frequently use to gain a deeper understanding of complex topics, and the act of creating it has helped me solidify my own knowledge on the subject matter.
    
    Overall, this quiz app is a passion project that reflects my own desire to expand my knowledge and understanding of front-end development topics, and I hope it can be a valuable resource for others looking to do the same.`,
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
    title: 'challenges and games ',
    dec: `The collection currently includes a lottery simulator, where users can generate random numbers for a chance to win a simulated jackpot. There's also a tic tac toe game, where users can challenge their friends or the computer to a game of this classic strategy game. For Pokemon fans, there's a Pokemon API caller that allows users to search for their favorite characters and view detailed information about them. Finally, there's a simple to-do list app that helps users stay organized and on top of their tasks.`,
    link: 'https://brilliant-sherbet-fe8d55.netlify.app/',
    git: 'https://github.com/vindexTOS/challanges-games',

    imgs: [
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/projects%2Fchallanges-and-games%2Ftodolist.JPG?alt=media&token=7a799312-ec4f-4195-88b8-522f85e52f75`,
      `https://firebasestorage.googleapis.com/v0/b/challanges-787f6.appspot.com/o/projects%2Fchallanges-and-games%2Flotto.JPG?alt=media&token=8bab88c9-40a0-4782-a3a6-211baac045c9`,
    ],
    icons: [
      <FaReact className="text-blue-400" />,
      <SiTypescript className="text-blue-500" />,
      <TbBrandVite className="text-purple-500" />,

      <TbBrandTailwind className="text-blue-500" />,
    ],
    id: 'games',
    personal: `  The collection currently includes a lottery simulator, where users can generate random numbers for a chance to win a simulated jackpot. There's also a tic tac toe game, where users can challenge  the computer to a game of this classic strategy game. For Pokemon fans, there's a Pokemon API caller that allows users to search for their favorite characters and view  information about them. Finally, there's a simple to-do list app .`,
  },
  {
    title: 'Bunch Of Calculators',
    dec: `This project features a life expectancy calculator that determines your life expectancy based on your lifestyle and health condition. Additionally, there is a one rep max calculator for weightlifting that calculates your maximum weightlifting capacity between 100% and 55%. The compound interest calculator is self-explanatory. Lastly, the project includes some basic calculators such as a tip calculator and BMI calculator.`,
    link: 'https://taupe-dieffenbachia-f6bd97.netlify.app/',
    git: 'https://github.com/vindexTOS/calculators',

    imgs: [NavData.emi, NavData.life],
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
