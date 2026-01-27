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
   

      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Resources
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on remote hiring problems, real consequences, and proven solutions for building reliable global teams
            </p>
          </div>

          {/* Resource Grid */}
          <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <div
                key={index}
                 className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div  className="flex items-center justify-between mb-3">
                  <span  className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                    {resource.category}
                  </span>
                  {/* <span  className="text-sm text-gray-500">
                    {resource.type}
                  </span> */}
                </div>

                <h3  className="text-xl font-bold text-gray-900 mb-2">
                  {resource.title}
                </h3>

                <p  className="text-gray-600 mb-4">
                  {resource.description}
                </p>

                {/* <Button modifier="text-left">Read More →</Button> */}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">
              Want Practical Remote Hiring Insights?
            </h2>
            <p  className="text-gray-600 mb-6">
              Get expert insights on avoiding remote hiring risks and building accountable teams.
            </p>

            <div  className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                 className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
              />
              <Button primary>Subscribe</Button>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </Page>
  );
}
