const Header = () => (
  <header
    className="relative min-h-[calc(100vh-6rem)] bg-cover bg-center overflow-hidden"
    style={{
      backgroundImage: `
        linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.85) 100%),
        url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2070&q=80')
      `,
      backgroundAttachment: 'fixed',
    }}
  >
    {/* Enhanced gradient overlays */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#60cacc]/20 via-transparent to-transparent" />
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-[#1b4b8d]/30 via-transparent to-transparent" />
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(96,202,204,0.15),transparent_70%)]" />
    
    {/* Animated floating elements */}
    <div className="absolute top-20 left-10 w-72 h-72 bg-[#60cacc]/10 rounded-full mix-blend-screen blur-3xl animate-pulse" />
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1b4b8d]/10 rounded-full mix-blend-screen blur-3xl animate-pulse delay-1000" />
    
    {/* Decorative accent line */}
    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60cacc] to-transparent opacity-30" />

    {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto py-16 px-6 lg:px-8 mt-10 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">
      {/* Logo-inspired element */}
      <div className="mb-8 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#60cacc] animate-ping" />
        <div className="w-2 h-2 rounded-full bg-[#1b4b8d]" />
        <div className="w-3 h-3 rounded-full bg-[#60cacc] animate-ping delay-300" />
      </div>

      <h1
        className="text-center font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 4px 30px rgba(0,0,0,0.4)',
          lineHeight: '1.1',
        }}
      >
        Hire Verified Talent
      </h1>

      {/* <div className="relative mt-4 mb-6">
        <div className="absolute -inset-x-20 top-1/2 h-px bg-gradient-to-r from-transparent via-[#60cacc]/50 to-transparent" />
        <p className="relative inline-block px-6 py-2 text-center text-sm md:text-base text-[#60cacc] font-semibold bg-[#1b4b8d]/20 rounded-full border border-[#60cacc]/30 backdrop-blur-sm">
          Trusted. Verified. Professional.
        </p>
      </div> */}

      <p
        className="mt-8 text-center text-xl md:text-2xl lg:text-3xl max-w-3xl text-slate-100"
        style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
      >
        Access <span className="font-semibold text-[#60cacc]">top-tier Nepali professionals</span> ready to elevate your team. 
        Verified, skilled, <span className="font-semibold text-[#60cacc]">globally competitive</span> talent with instant replacement guarantee.
      </p>

      {/* Stats preview */}
      <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-10">
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white">1000+</div>
          <div className="text-sm md:text-base text-[#60cacc]">Professionals</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
          <div className="text-sm md:text-base text-[#60cacc]">Satisfaction Rate</div>
        </div>
        <div className="text-center">
          <div className="text-3xl md:text-4xl font-bold text-white">24h</div>
          <div className="text-sm md:text-base text-[#60cacc]">Replacement Guarantee</div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-16 flex flex-col sm:flex-row justify-center gap-6">
        <a href="/contact" className="group">
          <button 
            className="px-10 py-5 bg-gradient-to-r from-[#60cacc] to-[#1b4b8d] text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:from-[#1b4b8d] hover:to-[#60cacc] transform hover:-translate-y-1"
            style={{ boxShadow: '0 10px 30px rgba(96, 202, 204, 0.3)' }}
          >
            <span className="flex items-center gap-2">
              Start Hiring
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </a>

        <a href="/contact" className="group" >
          <button className="px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/20 text-white text-lg font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:border-[#60cacc]/50 hover:shadow-lg hover:shadow-[#60cacc]/10">
            <span className="flex items-center gap-2">
              Let's Connect
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </button>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#60cacc]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#60cacc] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  </header>
);

export default Header;