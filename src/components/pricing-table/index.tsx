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
  <section  className="bg-gradient-to-b from-gray-100 to-white shadow-inner pt-12">
  <div  className="relative max-w-7xl mx-auto mb-24">
    <div  className="overflow-hidden lg:max-w-none lg:flex">
        <div className="lg:flex">
          {/* Left content */}
          <div className="p-8 lg:p-12 lg:w-2/3">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">
              <span className="bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                Ready to hire?
              </span>
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Get started today and access our curated pool of verified Nepali professionals. We handle the entire process from matching to onboarding, with instant replacement if needed. Focus on growing your business while we ensure you always have the right talent.
            </p>
            
            <div className="mt-8">
              <div className="flex items-center mb-6">
                <h3 className="flex-shrink-0 pr-4 text-sm font-semibold uppercase tracking-wider text-[#1b4b8d]">
                  What is included
                </h3>
                <div className="flex-1 border-t-2 border-gray-200" />
              </div>
              
              <ul  className="mt-8 lg:grid lg:grid-cols-2">
              {features.map((feature) => (
                <li  className="flex items-center lg:col-span-1" key={feature}>
                  <div  className="flex-shrink-0">
                    <Check  className="h-8 w-8 mr-3 mb-1" />
                  </div>
                  <p  className="text-gray-600">{feature}</p>
                </li>
              ))}
            </ul>
            </div>
          </div>

          {/* Right call to action */}
          <div className="bg-gradient-to-b from-[#60cacc]/10 to-[#1b4b8d]/10 p-8 lg:p-12 lg:w-1/3 flex flex-col justify-center">
            <div className="text-center">
              <div className="mb-6">
                <div className="text-4xl lg:text-4xl font-extrabold text-[#1b4b8d] mb-2">
                  Custom Pricing
                </div>
                <p className="text-lg text-slate-600">
                  Tailored to your needs
                </p>
              </div>
              
              <div className="space-y-6">
                <p className="text-slate-600">
                  Contact us for a personalized quote based on your specific requirements and team size.
                </p>
                <div>
                  <Button primary modifier="mt-4">
                    Contact Us
                  </Button>
                </div>
                <p className="text-sm text-slate-500">
                  No commitment required for initial consultation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PricingTable;