import { tw } from 'twind';
import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className={tw(`relative pb-6 mx-auto  bg-white bg-opacity-80 backdrop-blur-sm rounded-lg` )} style={{
    backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.96) 90%), url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div className={tw(`max-w-7xl mx-auto p-4 sm:p-6 lg:p-8`)}>
      <div className={tw(`container mx-auto px-6 p-6`)}>
        <div className={tw(`mb-16 text-center`)}>
          <p className={tw(`mt-2 text-4xl lg:text-6xl font-bold tracking-tight text-indigo-500`)}>
            Why choose us as your hiring partner
          </p>
        </div>
        <div className={tw(`flex flex-wrap my-12`)}>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Verified Talent Pool</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              All candidates undergo rigorous screening and verification. We ensure technical skills, English proficiency, and cultural fit before matching.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Cost-Effective Solutions</div>
            </div>
            <p className={tw(`leading-loose text-gray-500 `)}>
              Access world-class talent at competitive rates. Reduce hiring costs without compromising on quality or productivity.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r lg:w-1/3 lg:border-r-0 p-8`)}>
            <div className="flex items-center mb-6">
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Fast Time-to-Hire</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Get matched with pre-vetted candidates in days, not weeks. Streamlined process from discovery to onboarding.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 lg:w-1/3 lg:border-r lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>24/7 Availability</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Leverage time zone advantages. Many Nepali professionals work flexible hours to align with your business needs.
            </p>
          </div>
          <div className={tw(`w-full border-b md:w-1/2 md:border-r md:border-b-0 lg:w-1/3 lg:border-b-0 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Dedicated Support</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              Our team handles onboarding, contracts, payroll, and ongoing support. Focus on your business while we manage the details.
            </p>
          </div>
          <div className={tw(`w-full md:w-1/2 lg:w-1/3 p-8`)}>
            <div className={tw(`flex items-center mb-6`)}>
              <Check width={20} height={20} fill="currentColor" className={tw(`h-6 w-6 text-indigo-500`)} />
              <div className={tw(`ml-4 text-xl`)}>Instant Replacement</div>
            </div>
            <p className={tw(`leading-loose text-gray-500`)}>
              If a placement doesn't work out, we provide instant replacement at no additional cost. Zero downtime guarantee for your team.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeatureSection;
