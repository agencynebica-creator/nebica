import Page from '@/components/page';
import Footer from '@/components/footer';
import Button from '@/components/button';
import SeoHead from '@/components/seohead';

export default function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every candidate goes through rigorous screening.',
      icon: '⭐',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback at every step of the process.',
      icon: '🔍',
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships, not just one-time transactions.',
      icon: '🤝',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes and technology to serve you better.',
      icon: '🚀',
    },
  ];

  const stats = [
    { number: '500+', label: 'Companies Served', gradient: 'from-[#60cacc] to-[#1b4b8d]' },
    { number: '2000+', label: 'Talents Placed', gradient: 'from-[#60cacc] to-emerald-500' },
    { number: '98%', label: 'Success Rate', gradient: 'from-[#1b4b8d] to-purple-500' },
    { number: '50+', label: 'Countries Reached', gradient: 'from-[#60cacc] to-amber-500' },
  ];

  return (
    <>
      <Page head={<SeoHead
        title="About Us - Connecting Nepali Talent Globally"
        description="Learn about our mission to connect exceptional Nepali professionals with global opportunities."
      />}>
        <div className="bg-gradient-to-b from-white via-[#f8fafc] to-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            {/* Enhanced Header */}
            <div className="text-center mb-16">

              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
              About Us</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Bridging the gap between 
                <span className="text-[#1b4b8d] font-semibold"> exceptional Nepali talent </span>
                and global opportunities
              </p>
            </div>

            {/* Enhanced Content Section */}
            <div  className="max-w-4xl mx-auto mb-16">
            <div  className="prose prose-lg mx-auto">
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60cacc] to-transparent" />
                
                <div className="space-y-6">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We are a leading hiring agency based in Nepal, dedicated to connecting talented Nepali professionals with
                    global companies. Our mission is to unlock the potential of Nepal's skilled workforce and provide
                    international businesses with access to world-class talent.
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    With years of experience in international recruitment, we understand the challenges of remote hiring and
                    have built a comprehensive system that ensures quality placements, seamless onboarding, and ongoing success.
                  </p>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    What sets us apart is our commitment to quality, transparency, and the instant replacement guarantee that
                    ensures you never face downtime. We're not just a hiring agency—we're your long-term partner in building
                    exceptional remote teams.
                  </p>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1b4b8d] to-transparent" />
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative text-center p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#60cacc]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative">
                    {/* Gradient background effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                    
                    <div className={`text-4xl font-bold bg-gradient-to-br ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Values Section */}
            <div className="mb-16">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#60cacc]/10 to-[#1b4b8d]/10 border border-[#60cacc]/20">
                  <div className="w-2 h-2 rounded-full bg-[#60cacc]" />
                  <span className="text-sm font-semibold text-[#1b4b8d]">What We Stand For</span>
                </div>
                
                <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#60cacc]/40 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="text-center">
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-[#60cacc]/10 to-[#1b4b8d]/10 border border-[#60cacc]/20">
                        <div className="text-2xl">{value.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4b8d] transition-colors">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Page>
    </>
  );
}