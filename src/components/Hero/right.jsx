import React from 'react'
import StaticsImages from './Statics'

// import { data } from '../../utils/showcaseStatic'

const Right = () => {
  return (
    <div className="py-2 flex-1 flex items-center relative">
      <img src={""} alt="" className='ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto' />
      <StaticsImages items = {[]} />
    </div>
  )
}

export default Right