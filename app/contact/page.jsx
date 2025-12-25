export default function ContactPage() {
  return (

    <>

    <div
  className="relative h-[40vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed overflow-hidden"
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
   Contact Us
    </h2>

 
  </div>


</div>

    
    <section className="bg-gray-100 py-20 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 bg-white">

          {/* LEFT INFO PANEL */}
          <div className="bg-[#5e2020] px-8 py-16 lg:px-12">
            <div className="mb-12">
              <h4 className="mb-3 text-lg font-semibold text-[#caa56a]">
                Location
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                On view at The Met Fifth Avenue <br />
                in Galleries 800 & 809
              </p>
            </div>

            <div className="mb-12">
              <h4 className="mb-3 text-lg font-semibold text-[#caa56a]">
                Phone
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                +3 800 666 3333 <br />
                +1 200 300 4000
              </p>
            </div>

            <div>
              <h4 className="mb-3 text-lg font-semibold text-[#caa56a]">
                Email
              </h4>
              <p className="text-sm leading-relaxed text-gray-300">
                support@lods.com <br />
                lods@museum.com
              </p>
            </div>
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="lg:col-span-2 px-8 py-16 lg:px-16">
            <h2 className="mb-10 text-4xl font-serif text-gray-800">
              Get a Quote
            </h2>

            <form className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-800"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-800"
                />
              </div>

              <textarea
                placeholder="Leave a Message..."
                rows={6}
                className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-gray-800"
              />

              <button
                type="submit"
                className="inline-block bg-[#5e2020] cursor-pointer px-8 py-3 text-sm text-white transition hover:bg-[#7a3621]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>



        {/* Map */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden mt-12 sm:mt-16">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.388467209066!2d77.13659!3d28.701696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c364cc7eeb%3A0xabe849dd2636c4c!2sStrides%20Design%20Studio%20%7C%20Exhibition%20Stall%20Design%20Agency%20%7C%20Best%20Exhibition%20Booth%20Design%20Agency!5e0!3m2!1sen!2sin!4v1766649050735!5m2!1sen!2sin" width="600" height="450"  allowFullScreen="" loading="lazy" className="w-full h-full" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
    
    </>



    
  );
}
