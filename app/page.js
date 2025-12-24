import About from '@/components/About'
import Hero from '@/components/Hero'

import Testimonials from '@/components/Testimonial'


import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <About></About>

<Testimonials></Testimonials>
    </div>
  )
}

export default page