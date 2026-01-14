import { tw } from 'twind';
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
    className={tw(`md:hidden`)}
    style={{
      backgroundColor: isHomepage ? 'rgba(0, 0, 0, 0.7)' : '#ffffff',
      backdropFilter: isHomepage ? 'blur(10px)' : 'none',
      borderRadius: '0 0 0.5rem 0.5rem',
    }}
  >
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a 
          href={link.href} 
          className={tw(`block px-3 py-2 text-base font-medium transition-colors`)} 
          style={{ color: isHomepage ? '#ffffff' : '#6b7280' }}
          key={link.label}
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3`)} style={{ borderTop: `1px solid ${isHomepage ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb'}` }}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: Link) => (
          <a
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium transition-colors`)}
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
      className={tw(`transition-all duration-300 z-50`)}
      style={{
        position: isHomepage ? 'absolute' : 'sticky',
        top: isHomepage ? 0 : 'auto',
        left: isHomepage ? 0 : 'auto',
        right: isHomepage ? 0 : 'auto',
        backgroundColor: isHomepage ? 'transparent' : '#ffffff',
        zIndex: isHomepage ? 1000 : 100,
        boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <a href="/">
                <img className={tw(`h-12 `)} src="logo.png" alt="logo" width={140} height={48} />
              </a>
            </div>
            <div className={tw(`hidden md:block`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`px-3 py-2 rounded-md font-medium transition-colors`)}
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
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-6`)}>
              <a href="/resources">
                <button 
                  className={tw(`border-0 mr-2 px-4 py-2 rounded transition-colors`)}
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
                  className={tw(`border-0 mr-2 px-4 py-2 rounded transition-colors`)}
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
                  className={tw(`px-4 py-2 rounded font-medium transition-all`)}
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
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <button
              type="button"
              aria-controls="mobile-menu"
              aria-expanded={showMenu}
              onClick={toggleMenu}
              className={tw(`p-2 transition-colors`)}
              style={{
                color: isHomepage ? '#ffffff' : '#9ca3af',
              }}
            >
              <span className={tw(`sr-only`)}>Open menu</span>
              {showMenu ? (
                <svg
                  className={tw(`h-6 w-6`)}
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
                  className={tw(`h-6 w-6`)}
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
