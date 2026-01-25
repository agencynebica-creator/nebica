const Header = () => (
  <header
    className="relative min-h-[calc(100vh-6rem)] bg-cover bg-center"
    style={{
      backgroundImage: `
        linear-gradient(135deg, rgba(30,41,59,0.75) 0%, rgba(15,23,42,0.85) 100%),
        url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2070&q=80')
      `,
      backgroundAttachment: 'fixed',
    }}
  >
    {/* overlay gradients */}
    <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-indigo-500/15 to-transparent" />
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.1),transparent_70%)]" />

    {/* content */}
    <div className="relative z-10 max-w-4xl mx-auto py-16 px-6 lg:px-8 mt-10">
      <h1
        className="text-center font-bold text-4xl md:text-5xl lg:text-6xl"
        style={{
          color: '#fff',
          textShadow: '0 4px 30px rgba(0,0,0,0.6)',
          letterSpacing: '-0.03em',
          lineHeight: '1.1',
        }}
      >
        Hire Verified Talent
      </h1>

      <p
        className="mt-8 text-center text-lg md:text-xl lg:text-2xl text-slate-200"
        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
      >
        Access top-tier Nepali professionals ready to elevate your team.
        Verified, skilled, globally competitive talent with instant replacement guarantee.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/contact">
          <button className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition-all hover:scale-105">
            Start Hiring
          </button>
        </a>

        <a href="/contact">
          <button className="px-8 py-4 bg-white/10 border border-white/30 text-white text-lg font-semibold rounded-lg hover:bg-white/20 transition-all hover:scale-105">
            Let’s Connect
          </button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
