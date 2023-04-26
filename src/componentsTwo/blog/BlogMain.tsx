import React from 'react'

import { motion as m } from 'framer-motion'
import { UsePortfolioContext } from '../../context/PortfolioContext'
function BlogMain() {
  const {} = UsePortfolioContext()
  const [zoom, setZoom] = React.useState<boolean>(false)
  const style = {
    mainDiv: '',
  }

  return <div className={style.mainDiv}></div>
}

export default BlogMain
