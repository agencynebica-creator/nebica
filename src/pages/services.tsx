import Page from '@/components/page';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SeoHead from '@/components/seohead';

export default function Services() {
  const services = [
    {
      title: 'Talent Sourcing',
      description: 'We maintain a curated pool of pre-vetted Nepali professionals across all major industries and skill sets.',
      icon: '🔍',
      gradient: 'from-[#60cacc] to-[#1b4b8d]'
    },
    {
      title: 'Candidate Screening',
      description: 'Rigorous technical assessments, background checks, and cultural fit evaluations to ensure quality matches.',
      icon: '✅',
      gradient: 'from-[#60cacc] to-emerald-500'
    },
    {
      title: 'Matching & Placement',
      description: 'AI-powered matching algorithm combined with human expertise to find the perfect candidate for your needs.',
      icon: '🎯',
      gradient: 'from-[#1b4b8d] to-purple-500'
    },
    {
      title: 'Onboarding Support',
      description: 'Comprehensive onboarding assistance including contract management, compliance, and team integration.',
      icon: '🚀',
      gradient: 'from-[#60cacc] to-amber-500'
    },
    {
      title: 'Payroll & Payments',
      description: 'Hassle-free payroll processing and international payment handling, fully compliant with local regulations.',
      icon: '💰',
      gradient: 'from-[#1b4b8d] to-rose-500'
    },
    {
      title: 'Ongoing Management',
      description: 'Dedicated account managers to handle communication, performance tracking, and relationship management.',
      icon: '🤝',
      gradient: 'from-[#60cacc] to-violet-500'
    },
    {
      title: 'Instant Replacement',
      description: 'If a placement doesn\'t work out, we provide instant replacement at no additional cost with zero downtime.',
      icon: '⚡',
      gradient: 'from-[#1b4b8d] to-[#60cacc]'
    },
    {
      title: 'Legal & Compliance',
      description: 'Full support for contracts, work permits, tax compliance, and all legal requirements for international hiring.',
      icon: '📋',
      gradient: 'from-[#60cacc] to-slate-600'
    },
  ];

  return (
    <Page head={<SeoHead
      title="Our Services - Complete Hiring Solutions"
      description="Comprehensive services from talent sourcing to ongoing management. We handle everything so you can focus on your business." 
    />}>
      <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                Our  Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive hiring solutions that take care of everything from 
              <span className="text-[#1b4b8d] font-semibold"> sourcing to ongoing management</span>
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#60cacc]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:via-[#60cacc] group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Icon with gradient background */}
                  <div className="text-3xl">{service.icon}</div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4b8d] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Stats Section */}
          <div className="bg-gradient-to-r from-[#60cacc]/5 via-[#1b4b8d]/5 to-[#60cacc]/5 rounded-xl p-8 mb-8 border border-gray-200/50">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60cacc] to-transparent opacity-50" />
            
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Services?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group text-center p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-gray-700 font-medium">Success Rate</p>
                <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#60cacc] to-[#1b4b8d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="group text-center p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent mb-2">
                  7 days
                </div>
                <p className="text-gray-700 font-medium">Average Time to Hire</p>
                <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#60cacc] to-[#1b4b8d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="group text-center p-4 rounded-lg hover:bg-white/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-700 font-medium">Support Available</p>
                <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#60cacc] to-[#1b4b8d] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 bg-[#60cacc]/5 rounded-full blur-3xl" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#60cacc]/10 to-[#1b4b8d]/10 border border-[#60cacc]/20">
                <div className="w-2 h-2 rounded-full bg-[#60cacc]" />
                <span className="text-sm font-semibold text-[#1b4b8d]">Get Started Today</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Hiring?
              </h2>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Let's discuss how our comprehensive services can streamline your hiring process and deliver exceptional talent
              </p>
              
              <Button primary >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}