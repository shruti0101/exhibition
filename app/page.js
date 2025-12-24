import About from '@/components/About'
import Hero from '@/components/Hero'
import Portfolio3D from '@/components/Portfolio'
import Testimonials from '@/components/Testimonial'


import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <About></About>
    <Portfolio3D></Portfolio3D>
<Testimonials></Testimonials>
    </div>
  )
}

export default page