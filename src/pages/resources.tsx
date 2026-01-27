import Page from '@/components/page';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SeoHead from '@/components/seohead';

export default function Resources() {
  const resources = [
    {
      category: 'Problem',
      title: 'Proxy Interviews in Remote Hiring',
      description:
        'How interview proxy fraud happens, why companies fail to detect it, and the damage it causes after hiring.',
      type: 'Article',
    },
    {
      category: 'Problem',
      title: 'Remote Employees Outsourcing Work Without Permission',
      description:
        'The hidden risks of unauthorized task delegation, IP exposure, and quality loss in remote teams.',
      type: 'Article',
    },
    {
      category: 'Problem',
      title: 'Time Fraud and Fake Productivity in Remote Teams',
      description:
        'How companies lose money through fake time tracking and how to identify early warning signs.',
      type: 'Article',
    },
    {
      category: 'Solution',
      title: 'How Managed Remote Staffing Prevents Hiring Fraud',
      description:
        'A structured approach to screening, monitoring, and accountability that eliminates proxy work.',
      type: 'Guide',
    },
    {
      category: 'Solution',
      title: 'Outcome-Based Performance Management for Remote Teams',
      description:
        'Why measuring results instead of hours leads to better productivity and trust.',
      type: 'Guide',
    },
    {
      category: 'Case Insight',
      title: 'How Companies Avoid Remote Hiring Failures with Managed Teams',
      description:
        'Real-world insights into how companies reduced risk and improved performance using managed remote employees.',
      type: 'Case Study',
    },
    {
      category: 'Guide',
      title: 'Complete Guide to Hiring Full-Time Remote Talent Safely',
      description:
        'Everything companies should know before hiring remote employees across borders.',
      type: 'Guide',
    },
    {
      category: 'Template',
      title: 'Remote Employment & Accountability Agreement',
      description:
        'A practical contract template to prevent outsourcing, moonlighting, and compliance risks.',
      type: 'Template',
    },
  ];

  return (
    <Page head={<SeoHead
      title="Resources – Remote Hiring Problems, Risks & Solutions"
      description="Explore expert-written blogs, guides, and resources covering remote hiring problems, their consequences, and proven solutions."
    />}>
   

      <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          
          {/* Enhanced Header */}
          <div className="text-center mb-16">

            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
            Resources</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on remote hiring problems, real consequences, and 
              <span className="text-[#1b4b8d] font-semibold"> proven solutions </span>
              for building reliable global teams
            </p>
          </div>

          {/* Enhanced Resource Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#60cacc]/40 transition-all duration-300"
              >
                {/* Category Badge with color coding */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    resource.category === 'Problem' 
                      ? 'bg-red-50 text-red-700 border border-red-100'
                      : resource.category === 'Solution'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                      : resource.category === 'Case Insight'
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'bg-amber-50 text-amber-700 border border-amber-100'
                  }`}>
                    {resource.category}
                  </span>
                </div>

                {/* Title with hover effect */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4b8d] transition-colors">
                  {resource.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {resource.description}
                </p>

                {/* Read More Link */}
                <div className="inline-flex items-center gap-1 text-[#1b4b8d] font-medium hover:text-[#60cacc] transition-colors duration-300">
                  <span>Read More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="bg-white rounded-2xl p-8 text-center border border-gray-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want Practical Remote Hiring Insights?
            </h2>
            
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get expert insights on avoiding remote hiring risks and building accountable teams.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:border-[#60cacc] focus:ring-1 focus:ring-[#60cacc] focus:outline-none transition-all"
                />
                <Button primary>
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </Page>
  );
}