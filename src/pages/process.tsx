import Page from '@/components/page';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SeoHead from '@/components/seohead';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Initial Consultation',
      description: 'We start by understanding your specific needs, company culture, and project requirements. This helps us create a tailored hiring strategy.',
      duration: '1-2 days',
    },
    {
      number: '02',
      title: 'Candidate Matching',
      description: 'Our team uses advanced matching algorithms and human expertise to identify the best candidates from our verified talent pool.',
      duration: '2-3 days',
    },
    {
      number: '03',
      title: 'Screening & Assessment',
      description: 'Candidates undergo technical assessments, skill evaluations, and background checks to ensure they meet your requirements.',
      duration: '2-3 days',
    },
    {
      number: '04',
      title: 'Interview & Selection',
      description: 'Shortlisted candidates are presented to you. You conduct interviews and select the best fit for your team.',
      duration: '3-5 days',
    },
    {
      number: '05',
      title: 'Onboarding & Setup',
      description: 'We handle all paperwork, contracts, compliance, and setup. Your new team member is ready to start contributing.',
      duration: '3-5 days',
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: 'Our dedicated account managers provide continuous support, performance tracking, and instant replacement if needed.',
      duration: 'Ongoing',
    },
  ];

  return (
    <Page head={<SeoHead
      title="Our Process - Simple 6-Step Hiring Process" 
      description="Our streamlined 6-step process takes you from initial consultation to successful placement in under 2 weeks." 
    />}>
      <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
          
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
            Our Hiring Process </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, streamlined process that gets you the 
              <span className="text-[#1b4b8d] font-semibold"> right talent in under 2 weeks</span>
            </p>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Enhanced Timeline line with gradient */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-[#60cacc] via-[#1b4b8d] to-[#60cacc]" />
            </div>

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="group relative flex items-start">
                  {/* Step indicator with gradient */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg">
                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#60cacc] to-[#1b4b8d]" />
                      
                      {/* Animated ring effect */}
                      <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-white/50 transition-all duration-300" />
                      
                      {/* Step number */}
                      <div className="relative w-full h-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="ml-8 flex-1">
                    <div className="group bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#60cacc]/40 transition-all duration-300 hover:-translate-y-1">
                      {/* Header with duration badge */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1b4b8d] transition-colors">
                          {step.title}
                        </h3>
                        <span className="px-3 py-1 bg-gradient-to-r from-[#60cacc]/10 to-[#1b4b8d]/10 text-[#1b4b8d] border border-[#60cacc]/30 rounded-full text-sm font-medium">
                          {step.duration}
                        </span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-16 relative overflow-hidden rounded-2xl p-8 text-center">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#60cacc]/5 via-[#1b4b8d]/5 to-[#60cacc]/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60cacc] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1b4b8d] to-transparent" />
            
            <div className="relative z-10">
              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                    6 Steps
                  </div>
                  <div className="text-sm text-gray-600">Simple Process</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                    Under 2 Weeks
                  </div>
                  <div className="text-sm text-gray-600">Total Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                    98% Success
                  </div>
                  <div className="text-sm text-gray-600">Guarantee</div>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start?
              </h2>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                From initial consultation to having your new team member onboarded and productive
              </p>
              
              <Button primary >
                Start Your Hiring Process
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}