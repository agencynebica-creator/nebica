
import Button from '@/components/button';

const headerStyle = `
  background: linear-gradient(135deg, rgba(30, 41, 59, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%),
              url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: calc(100vh - 6rem);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
    pointer-events: none;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at top center, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

const Header = () => (
  <header className={headerStyle}>
    <div  className="max-w-4xl mx-auto py-16 px-14 mt-10 sm:px-6 lg:px-8 relative z-10">
      <h1  className="font-sans font-bold text-4xl md:text-4xl lg:text-6xl text-center leading-tight relative z-10" style={{ 
        color: '#ffffff',
        textShadow: '0 4px 30px rgba(0, 0, 0, 0.6), 0 2px 15px rgba(0, 0, 0, 0.4)',
        letterSpacing: '-0.03em',
        lineHeight: '1.1',
      }}>
      Hire Verified  Talent
      </h1>
      <div  className="max-w-2xl mx-auto relative z-10 mt-8">
        <p  className="text-center text-lg md:text-xl lg:text-2xl font-normal" style={{ 
          color: '#e2e8f0',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          lineHeight: '1.6',
        }}>
        Access top-tier Nepali professionals ready to elevate your team. Verified, skilled, globally competitive talent with instant replacement guarantee.
        </p>
      </div>
      <div  className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 w-full mx-auto relative z-10">
        <a href="/contact"  className="inline-block">
          <button 
             className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Start Hiring
          </button>
        </a>
        <span  className="text-white text-opacity-80 hidden sm:inline" style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}>or</span>
        <a href="/contact"  className="inline-block">
          <button 
             className="px-8 py-4 bg-white bg-opacity-10 backdrop-blur-sm border-2 border-white border-opacity-30 text-white text-lg font-semibold rounded-lg hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            Let's Connect
          </button>
        </a>
      </div>
    </div>
  </header>
);

export default Header;
