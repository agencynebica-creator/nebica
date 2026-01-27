import Button from '@/components/button';
import NewsletterBox from '../mailchimp';

const productLinks = [`Talent Pool`, `Services`, `Process`, `Enterprise Solutions`];
const aboutLinks = [`About Us`, `Why Nepal`,  `FAQs`, `Contact`];
const resourceLinks = [
  `Get Started`,
  `Talent Categories`,
  `Case Studies`,
  `Resources`,
  `For Talents`,
];

const Footer = () => (
  <footer className="bg-white border-t border-gray-400 pt-14 pb-16">
    <div className="max-w-7xl mx-auto text-gray-400 px-8 lg:px-0 flex flex-wrap">
      <div className="w-full lg:w-1/2">
        <ul className="text-lg font-light flex flex-wrap w-full">
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-[#1b4b8d] text-base font-bold mb-1">Product</h4>
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
                    <li className="text-gray-800 text-sm font-medium leading-6 hover:text-[#60cacc] transition-colors" key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-[#1b4b8d] text-base font-bold mb-1">Resources</h4>
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
                    <li className="text-gray-800 text-sm font-medium leading-6 hover:text-[#60cacc] transition-colors" key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="w-1/2 md:w-1/3 lg:w-1/3">
            <div>
              <h4 className="text-[#1b4b8d] text-base font-bold mb-1">About Us</h4>
              <ul>
                {aboutLinks.map((link) => {
                  const href = link === 'About Us' ? '/about'
                    : link === 'Our Team' ? '/about'
                    : link === 'Why Nepal' ? '/why-nepal'
                      : link === 'FAQs' ? '/faqs'
                    : link === 'Contact' ? '/contact'
                    : '/';
                  return (
                    <li className="text-gray-800 text-sm font-medium leading-6 hover:text-[#60cacc] transition-colors" key={link}>
                      <a href={href}>{link}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <NewsletterBox/>
    </div>
  </footer>
);

export default Footer;