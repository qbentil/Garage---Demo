import Left from './left'
import React from 'react'
import Right from './right'

const Hero = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full px-6 py-1' id='home'>
      <Left />
      <Right />
    </section>
  )
}

export default Hero