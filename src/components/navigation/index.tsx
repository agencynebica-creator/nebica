 import { useState } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Talent Pool`,
    href: `/talent-pool`,
  },
  {
    label: `Services`,
    href: `/services`,
  },
  {
    label: `Process`,
    href: `/process`,
  },
  {
    label: `About Us`,
    href: `/about`,
  },
  
];

const secondaryLinks = [
  // {
  //   label: `Contact us`,
  //   href: `/contact`,
  // },
  // {
  //   label: `About Us`,
  //   href: `/about`,
  // },
  {
    label: `Start Hiring`,
    href: `/contact`,
  },
];


const MobileMenu = ({ isHomepage }: { isHomepage: boolean }) => (
  <div 
     className="md:hidden"
    style={{
      backgroundColor: isHomepage ? 'transparent' : '#ffffff',
      backdropFilter: isHomepage ? 'blur(10px)' : 'none',
      borderRadius: '0 0 0.5rem 0.5rem',
    }}
  >
    <div  className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link: Link) => (
        <a 
          href={link.href} 
           className="block px-3 py-2 text-base font-medium transition-colors" 
          style={{ color: isHomepage ? '#ffffff' : '#6b7280' }}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
    <div  className="pt-4 pb-3" style={{ borderTop: `1px solid ${isHomepage ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb'}` }}>
      <div  className="px-2 space-y-1">
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
             className="block px-3 py-2 text-base font-medium transition-colors"
            style={{ color: isHomepage ? '#ffffff' : '#6b7280' }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const isHomepage = router.pathname === '/';
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav
   className="transition-all duration-300 z-50"
  style={{
    position: isHomepage ? 'absolute' : 'sticky',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isHomepage ? 'transparent' : '#ffffff',
    zIndex: 1000,
    boxShadow: isHomepage
      ? 'none'
      : '0 2px 10px rgba(0,0,0,0.08)',
  }}
>

      <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div  className="flex items-center justify-between h-24">
          <div  className="flex items-center">
            <div  className="flex-shrink-0">
              <a href="/">
                <img  className="h-12 " src={isHomepage ? "logo-light.png": "logo.png" } alt="Nebica Hiring agency in nepal" width={140} height={48} style={{
    filter: isHomepage
      ? 'drop-shadow(10px 12px 18px rgba(252, 252, 252,4))'
      : 'none',
  }}/>
              </a>
            </div>
            <div  className="hidden md:block">
              <div  className="ml-10 flex items-baseline space-x-4">
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                     className="px-3 py-2 rounded-md font-medium transition-colors"
                    style={{
                      color: isHomepage ? '#ffffff' : '#6b7280',
                    }}
                    onMouseEnter={(e) => {
                      if (isHomepage) {
                        e.currentTarget.style.color = '#e2e8f0';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (isHomepage) {
                        e.currentTarget.style.color = '#ffffff';
                      }
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div  className="hidden md:block">
            <div  className="ml-4 flex items-center md:ml-6">
              <a href="/resources">
                <button 
                   className="border-0 mr-2 px-4 py-2 rounded transition-colors"
                  style={{
                    backgroundColor: isHomepage ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: isHomepage ? '#ffffff' : '#4b5563',
                    backdropFilter: isHomepage ? 'blur(10px)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                >
                  Resources
                </button>
              </a>
              {/* <a href="/resources">
                <button 
                   className="border-0 mr-2 px-4 py-2 rounded transition-colors"
                  style={{
                    backgroundColor: isHomepage ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    color: isHomepage ? '#ffffff' : '#4b5563',
                    backdropFilter: isHomepage ? 'blur(10px)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                >
                 Resources
                </button>
              </a> */}
              <a href="/contact">
                <button 
                   className="px-4 py-2 rounded font-medium transition-all"
                  style={{
                    backgroundColor: isHomepage ? '#ffffff' : '#4f46e5',
                    color: isHomepage ? '#4f46e5' : '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                    } else {
                      e.currentTarget.style.backgroundColor = '#4338ca';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (isHomepage) {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                    } else {
                      e.currentTarget.style.backgroundColor = '#4f46e5';
                    }
                  }}
                >
                  Start Hiring
                </button>
              </a>
            </div>
          </div>
          <div  className="-mr-2 flex md:hidden">
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
              onClick={toggleMenu}
               className="p-2 transition-colors"
              style={{
                color: isHomepage ? '#ffffff' : '#9ca3af',
              }}
            >
              <span  className="sr-only">Open menu</span>
              {showMenu ? (
                <svg
                   className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={24}
                  height={24}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                   className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width={24}
                  height={24}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu isHomepage={isHomepage} /> : null}
    </nav>
  );
};

export default Navigation;
