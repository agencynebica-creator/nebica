import Check from '@/constants/svg/check.svg';

const FeatureSection = () => (
  <section
    className="relative py-24"
    style={{
      backgroundImage: `
        linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,250,252,0.98) 100%),
        url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2070&q=80')
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
          Why choose us as your <span className="text-indigo-600">hiring partner</span>
        </h2>
        <p className="mt-6 text-lg text-slate-600">
          We simplify global hiring by connecting you with pre-vetted Nepali professionals — fast, reliable, and cost-effective.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Verified Talent Pool',
            desc:
              'All candidates are rigorously screened for technical skills, communication, and cultural fit before matching.',
          },
          {
            title: 'Cost-Effective Solutions',
            desc:
              'Hire world-class talent at competitive rates while maintaining top-tier quality and productivity.',
          },
          {
            title: 'Fast Time-to-Hire',
            desc:
              'Get matched with pre-vetted candidates in days, not weeks — from discovery to onboarding.',
          },
          {
            title: '24/7 Availability',
            desc:
              'Flexible working hours and time-zone alignment ensure uninterrupted collaboration.',
          },
          {
            title: 'Dedicated Support',
            desc:
              'We handle onboarding, payroll, contracts, and ongoing support so you can focus on growth.',
          },
          {
            title: 'Instant Replacement',
            desc:
              'If a placement doesn’t work out, we provide an instant replacement at no extra cost.',
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">
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
