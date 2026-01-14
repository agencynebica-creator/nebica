import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';

export default function Services() {
  const services = [
    {
      title: 'Talent Sourcing',
      description: 'We maintain a curated pool of pre-vetted Nepali professionals across all major industries and skill sets.',
      icon: '🔍',
    },
    {
      title: 'Candidate Screening',
      description: 'Rigorous technical assessments, background checks, and cultural fit evaluations to ensure quality matches.',
      icon: '✅',
    },
    {
      title: 'Matching & Placement',
      description: 'AI-powered matching algorithm combined with human expertise to find the perfect candidate for your needs.',
      icon: '🎯',
    },
    {
      title: 'Onboarding Support',
      description: 'Comprehensive onboarding assistance including contract management, compliance, and team integration.',
      icon: '🚀',
    },
    {
      title: 'Payroll & Payments',
      description: 'Hassle-free payroll processing and international payment handling, fully compliant with local regulations.',
      icon: '💰',
    },
    {
      title: 'Ongoing Management',
      description: 'Dedicated account managers to handle communication, performance tracking, and relationship management.',
      icon: '🤝',
    },
    {
      title: 'Instant Replacement',
      description: 'If a placement doesn\'t work out, we provide instant replacement at no additional cost with zero downtime.',
      icon: '⚡',
    },
    {
      title: 'Legal & Compliance',
      description: 'Full support for contracts, work permits, tax compliance, and all legal requirements for international hiring.',
      icon: '📋',
    },
  ];

  return (
    <Page>
      <NextSeo title="Our Services - Complete Hiring Solutions" description="Comprehensive services from talent sourcing to ongoing management. We handle everything so you can focus on your business." />
      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`)}>
              Our Services
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              End-to-end hiring solutions that take care of everything from sourcing to ongoing management
            </p>
          </div>

          <div className={tw(`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16`)}>
            {services.map((service, index) => (
              <div key={index} className={tw(`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow`)}>
                <div className={tw(`text-4xl mb-4`)}>{service.icon}</div>
                <h3 className={tw(`text-xl font-bold text-gray-900 mb-2`)}>{service.title}</h3>
                <p className={tw(`text-gray-600`)}>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={tw(`bg-indigo-50 rounded-lg p-8 mb-8`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4 text-center`)}>Why Choose Our Services?</h2>
            <div className={tw(`grid md:grid-cols-3 gap-6`)}>
              <div className={tw(`text-center`)}>
                <div className={tw(`text-3xl font-bold text-indigo-600 mb-2`)}>98%</div>
                <p className={tw(`text-gray-600`)}>Success Rate</p>
              </div>
              <div className={tw(`text-center`)}>
                <div className={tw(`text-3xl font-bold text-indigo-600 mb-2`)}> 7 days</div>
                <p className={tw(`text-gray-600`)}>Average Time to Hire</p>
              </div>
              <div className={tw(`text-center`)}>
                <div className={tw(`text-3xl font-bold text-indigo-600 mb-2`)}>24/7</div>
                <p className={tw(`text-gray-600`)}>Support Available</p>
              </div>
            </div>
          </div>

          <div className={tw(`text-center`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>Ready to Get Started?</h2>
            <p className={tw(`text-gray-600 mb-6`)}>Let's discuss how our services can help your business</p>
            <Button primary>Contact Us</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
