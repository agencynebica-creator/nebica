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
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Hiring Process
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, streamlined process that gets you the right talent in under 2 weeks
            </p>
          </div>

          <div  className="relative">
            {/* Timeline line */}
            <div  className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 hidden md:block"></div>

            <div  className="space-y-12">
              {steps.map((step, index) => (
                <div key={index}  className="relative flex items-start">
                  <div  className="flex-shrink-0 relative z-10">
                    <div  className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div  className="ml-8 flex-1">
                    <div  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div  className="flex items-center justify-between mb-2">
                        <h3  className="text-xl font-bold text-gray-900">{step.title}</h3>
                        <span  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                          {step.duration}
                        </span>
                      </div>
                      <p  className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div  className="mt-16 bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Total Time: Under 2 Weeks</h2>
            <p  className="text-gray-600 mb-6">From initial consultation to having your new team member onboarded and productive</p>
            <Button primary>Start Your Hiring Process</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
