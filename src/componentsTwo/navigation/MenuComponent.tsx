import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type MenuComponentType = {
  img: string
  title: string
  link: string
}

const MenuComponent: FC<MenuComponentType> = ({ img, title, link }) => {
  return (
    <div className="flex  items-center justify-start  gap-2 w-[90%] hover:bg-gray-200 hover:bg-opacity-50 p-2  cursor-pointer">
      <img className="w-[30px]" src={img} />
      <Link className="text-white " to={link}>
        {title}
      </Link>
    </div>
  )
}

export default MenuComponent
