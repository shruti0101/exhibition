import React from 'react'

const page = () => {
  return (
    <div>
            {/* ===== About Us Banner Section ===== */}
<div
  className="relative h-[40vh] md:h-[100vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed overflow-hidden"
  style={{
    backgroundImage: "url('/aboutbg.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-slate-900/50 to-slate-800/50" />

  {/* Content */}
  <div className="relative z-10 px-6 max-w-5xl">
    {/* Accent Line */}
    <div className="mx-auto mb-4 h-[3px] w-25 bg-red-600 rounded-full" />

    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
     Our Services
    </h2>

 
  </div>


</div>


<section>

</section>
    </div>
  )
}

export default page