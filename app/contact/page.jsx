export default function ContactPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <div
        className="relative h-[40vh] md:h-[90vh] flex items-center justify-center text-center bg-cover bg-center bg-fixed overflow-hidden"
        style={{ backgroundImage: "url('/aboutbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-900/60 to-slate-800/60" />

        <div className="relative z-10 px-6 max-w-5xl">
          <div className="mx-auto mb-5 h-[3px] w-24 bg-[#039C98] rounded-full" />
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            Contact Us
          </h2>
          <p className="mt-6 text-sm sm:text-base text-white/80 max-w-xl mx-auto">
            Let’s discuss your project, requirements, or collaboration ideas.
          </p>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <section className="bg-gray-100 py-20 w-full">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 bg-white shadow-2xl">

            {/* LEFT INFO PANEL */}
            <div className="bg-[#039C98] px-8 py-16 lg:px-12 text-white">
              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Location
                </h4>
                <p className="text-md leading-relaxed text-white/90">
                  49C, JD Block <br />
                  Rohini, Pitampura <br />
                  Delhi – 110034
                </p>
              </div>

              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Call
                </h4>
                <p className="text-md leading-relaxed text-white/90">
                  011-45719352
                </p>
              </div>

              <div className="mb-12">
                <h4 className="mb-3 text-md font-bold tracking-widest uppercase text-[#caa56a]">
                  Email
                </h4>
                <p className="text-md leading-relaxed text-white/90">
                  info@stridesdezine.com
                </p>
              </div>

              <div>
                <h4 className="mb-3 font-bold text-md tracking-widest uppercase text-[#caa56a]">
                  Open Hours
                </h4>
                <p className="text-md leading-relaxed text-white/90">
                  Mon – Sat <br />
                  10:00 AM – 6:00 PM
                </p>
              </div>
            </div>

            {/* RIGHT FORM PANEL */}
            <div className="lg:col-span-2 px-8 py-16 lg:px-16">
              <h2 className="mb-3 text-4xl font-serif text-gray-800">
                Get in Touch
              </h2>
              <p className="mb-10 text-sm text-gray-600 max-w-xl">
                Fill out the form and our team will get back to you shortly.
              </p>

              <form className="space-y-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                  />
                </div>

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                />

                <textarea
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#039C98]"
                />

                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center bg-[#039C98] px-10 py-4 text-xs tracking-widest uppercase text-white transition hover:bg-[#027a76]"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* ================= MAP ================= */}
        <div className="w-full h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden mt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13998.388467209066!2d77.13659!3d28.701696!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03c364cc7eeb%3A0xabe849dd2636c4c!2sStrides%20Design%20Studio%20%7C%20Exhibition%20Stall%20Design%20Agency!5e0!3m2!1sen!2sin!4v1766649050735!5m2!1sen!2sin"
            loading="lazy"
            className="w-full h-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
