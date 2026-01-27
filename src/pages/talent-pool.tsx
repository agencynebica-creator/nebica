import Page from '@/components/page';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SeoHead from '@/components/seohead';

export default function TalentPool() {
  const categories = [
    {
      title: 'Software Development',
      skills: ['React', 'Node.js', 'Python', 'Java', 'Full-Stack'],
      description: 'Expert developers ready to build your next project',
    },
    {
      title: 'UI/UX Design',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      description: 'Creative designers to bring your vision to life',
    },
    {
      title: 'Project Management',
      skills: ['Agile', 'Scrum', 'PMI', 'Stakeholder Management'],
      description: 'Experienced PMs to keep your projects on track',
    },
    {
      title: 'Digital Marketing',
      skills: ['SEO', 'Social Media', 'Content Marketing', 'PPC'],
      description: 'Marketing experts to grow your online presence',
    },
    {
      title: 'Data Science',
      skills: ['Python', 'Machine Learning', 'SQL', 'Analytics'],
      description: 'Data scientists to unlock insights from your data',
    },
    {
      title: 'Customer Support',
      skills: ['Live Chat', 'Email Support', 'Troubleshooting', 'CRM'],
      description: 'Dedicated support professionals for your customers',
    },
  ];

  return (
    <Page head={<SeoHead
      title="Talent Pool - Browse Verified Nepali Professionals"
      description="Explore our curated pool of verified Nepali talent across IT, design, business, and more." 
    />}>
      <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
                Talent Pool
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              we have veterans  
              <span className="text-[#1b4b8d] font-semibold"> Nepalese professionals </span>
               of these talent pool categories ready to join your team
            </p>
          </div>

          {/* Enhanced Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categories.map((category, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#60cacc]/40 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Card accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#60cacc]/0 via-[#60cacc] to-[#60cacc]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4b8d] transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1.5 bg-gradient-to-r from-[#60cacc]/5 to-[#1b4b8d]/5 text-[#1b4b8d] border border-[#60cacc]/20 rounded-full text-sm font-medium hover:border-[#60cacc]/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* View Button */}
                {/* <button className="w-full py-2.5 px-4 bg-gradient-to-r from-[#60cacc]/10 to-[#1b4b8d]/10 text-[#1b4b8d] font-semibold rounded-lg hover:from-[#60cacc]/20 hover:to-[#1b4b8d]/20 transition-all duration-300 group-hover:shadow-inner">
                  View Candidates →
                </button> */}
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="relative rounded-2xl p-8 text-center overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#60cacc]/5 via-[#1b4b8d]/5 to-[#60cacc]/5" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60cacc] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1b4b8d] to-transparent" />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#60cacc]/30">
                <div className="w-2 h-2 rounded-full bg-[#60cacc]" />
                <span className="text-sm font-semibold text-[#1b4b8d]">Custom Matching</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Can't find what you're looking for?
              </h2>
              
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact us with your specific requirements and we'll personally match you with the perfect talent from our network
              </p>
              
              <Button primary >
                Get Custom Matches
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}