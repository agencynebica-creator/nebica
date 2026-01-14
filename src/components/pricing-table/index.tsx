import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';
import Button from '@/components/button';

const features = [
  `Pre-screened candidate matching`,
  `Technical skills assessment`,
  `Background verification`,
  `Contract & legal support`,
  `Payroll & payment processing`,
  `Ongoing relationship management`,
  `Instant replacement guarantee`,
  `Dedicated account manager`,
];

const PricingTable = () => (
  <section className={tw(`bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12`)}>
    <div className={tw(`relative max-w-7xl mx-auto mb-24`)}>
      <div className={tw(`overflow-hidden lg:max-w-none lg:flex`)}>
        <div className={tw(`py-8 px-6 md:px-0 lg:flex-shrink-1`)}>
          <h2 className={tw(`text-4xl lg:text-6xl font-bold text-indigo-500 mb-12`)}>Ready to hire?</h2>
          <p className={tw(`mt-6 text-base leading-6 text-gray-500`)}>
            Get started today and access our curated pool of verified Nepali professionals. We handle the entire process from matching to onboarding, with instant replacement if needed. Focus on growing your business while we ensure you always have the right talent.
          </p>
          <div className={tw(`mt-8`)}>
            <div className={tw(`flex items-center`)}>
              <h3
                className={tw(
                  `flex-shrink-0 pr-4 text-sm leading-5
                tracking-wider font-semibold uppercase text-indigo-600`,
                )}
              >
                What is included
              </h3>
              <div className={tw(`flex-1 border-t-2 border-gray-200`)} />
            </div>
            <ul className={tw(`mt-8 lg:grid lg:grid-cols-2`)}>
              {features.map((feature) => (
                <li className={tw(`flex items-center lg:col-span-1`)} key={feature}>
                  <div className={tw(`flex-shrink-0`)}>
                    <Check className={tw(`h-8 w-8 mr-3 mb-1`)} />
                  </div>
                  <p className={tw(`text-gray-600`)}>{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={tw(
            `py-8 px-6 text-center lg:flex-shrink-0
            lg:flex lg:flex-col lg:justify-center lg:p-12`,
          )}
        >
            <div className={tw(`my-4 flex items-center justify-center text-6xl leading-none font-bold text-indigo-600`)}>
            Based on needs
          </div>
          <p className={tw(`text-sm text-gray-600 mb-4`)}>Contact us for more information </p>
          <Button primary modifier="mt-6">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;
