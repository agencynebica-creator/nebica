import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section className="relative py-16">
    {/* Minimal background */}
    <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fdff] to-white" />
    
    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
      {/* Header - keeping original sizing */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Why choose us as your <span className="bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">hiring partner</span>
        </h2>
      
      </div>

      {/* Features - keeping original structure */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Verified Talent Pool',
            desc: 'All candidates are rigorously screened for technical skills, communication, and cultural fit before matching.',
          },
          {
            title: 'Cost-Effective Solutions',
            desc: 'Hire world-class talent at competitive rates while maintaining top-tier quality and productivity.',
          },
          {
            title: 'Fast Time-to-Hire',
            desc: 'Get matched with pre-vetted candidates in days, not weeks — from discovery to onboarding.',
          },
          {
            title: '24/7 Availability',
            desc: 'Flexible working hours and time-zone alignment ensure uninterrupted collaboration.',
          },
          {
            title: 'Dedicated Support',
            desc: 'We handle onboarding, payroll, contracts, and ongoing support so you can focus on growth.',
          },
          {
            title: 'Instant Replacement',
            desc: 'If a placement doesn\'t work out, we provide an instant replacement at no extra cost.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-8 border border-gray-200/60 hover:border-[#60cacc]/40 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#60cacc]/10 to-[#1b4b8d]/10 text-[#1b4b8d] group-hover:from-[#60cacc]/20 group-hover:to-[#1b4b8d]/20 transition-colors">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 group-hover:text-[#1b4b8d] transition-colors">
                {item.title}
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;