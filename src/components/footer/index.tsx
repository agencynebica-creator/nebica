import { tw } from 'twind';
import Button from '@/components/button';

const productLinks = [`Talent Pool`, `Services`, `Process`, `Enterprise Solutions`];
const aboutLinks = [`About Us`, `Why Nepal`,  `FAQs`, `Blog`, `Contact`];
const resourceLinks = [
  `Get Started`,

  `Talent Categories`,
  `Case Studies`,
 
  `Resources`,
  `For Talents`,
];

const Footer = () => (
  <footer className={tw(`bg-white border-t border-gray-400 pt-14 pb-16`)}>
    <div className={tw(`max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap`)}>
      <div className={tw(`w-full lg:w-1/2`)}>
        <ul className={tw(`text-lg font-light flex flex-wrap w-full`)}>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Product</h4>
              <ul>
                {productLinks.map((link) => {
                  const href = link === 'Talent Pool' ? '/talent-pool' 
                    : link === 'Services' ? '/services'
                    : link === 'Process' ? '/process'
                    : link === 'Pricing' ? '/pricing'
                    : link === 'Enterprise Solutions' ? '/contact'
                    : link === 'Industries' ? '/talent-pool'
                    : '/';
                  return (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>Resources</h4>
              <ul>
                {resourceLinks.map((link) => {
                  const href = link === 'Get Started' ? '/contact'
                    : link === 'Hiring Guide' ? '/resources'
                    : link === 'Talent Categories' ? '/talent-pool'
                    : link === 'Case Studies' ? '/case-studies'
                    : link === 'Resources' ? '/resources'
                    : link === 'For Talents' ? '/for-talents'
                    : '/';
                  return (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className={tw(`w-1/2 md:w-1/3 lg:w-1/3`)}>
            <div>
              <h4 className={tw(`text-gray-900 text-base font-bold mb-1`)}>About Us</h4>
              <ul>
                {aboutLinks.map((link) => {
                  const href = link === 'About Us' ? '/about'
                    : link === 'Our Team' ? '/about'
                    : link === 'Why Nepal' ? '/why-nepal'
                      : link === 'FAQs' ? '/faqs'
                    : link === 'Blog' ? '/blog'
                    : link === 'Contact' ? '/contact'
                    : '/';
                  return (
                    <li className={tw(`text-gray-800 text-sm font-medium leading-6`)} key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div className={tw(`w-full lg:w-1/2 mt-12 lg:mt-0`)}>
        <div className={tw(`border border-gray-400 rounded py-5 px-4`)}>
          <h4 className={tw(`font-mono text-sm uppercase text-gray-500 mb-3`)}>Get hiring insights & updates</h4>
          <div className={tw(`flex w-full`)}>
            <input
              aria-label="email address"
              type="text"
              className={tw(`border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2`)}
              placeholder="Enter your email"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
