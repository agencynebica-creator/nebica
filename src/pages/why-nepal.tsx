import Page from '@/components/page';
import Footer from '@/components/footer';
 import Button from '@/components/button';
import SeoHead from '@/components/seohead';
 



export default function WhyNepal() {
  const reasons = [
    {
      title: 'Highly Educated Workforce',
      description: 'Nepal has a strong educational system with many professionals holding degrees from top universities. The emphasis on education produces skilled, adaptable professionals.',
      icon: '🎓',
    },
    {
      title: 'Excellent English Proficiency',
      description: 'English is widely spoken and taught in schools and universities. Nepali professionals communicate effectively in English, making collaboration seamless.',
      icon: '💬',
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Get world-class talent at competitive rates. Hiring from Nepal allows you to access skilled professionals while optimizing your budget.',
      icon: '💰',
    },
    {
      title: 'Strong Work Ethic',
      description: 'Nepali professionals are known for their dedication, reliability, and commitment to quality work. They value relationships and long-term partnerships.',
      icon: '💪',
    },
    {
      title: 'Time Zone Advantages',
      description: 'Nepal\'s time zone allows for extended coverage when working with teams in different regions, enabling round-the-clock productivity.',
      icon: '🌍',
    },
    {
      title: 'Growing Tech Ecosystem',
      description: 'Nepal has a rapidly growing tech industry with professionals skilled in modern technologies and methodologies, ready to contribute to global projects.',
      icon: '🚀',
    },
    {
      title: 'Cultural Compatibility',
      description: 'Nepali professionals are culturally adaptable, collaborative, and integrate well with international teams. They value teamwork and communication.',
      icon: '🤝',
    },
    {
      title: 'Stable Infrastructure',
      description: 'Improving internet infrastructure and tech readiness make Nepal an ideal location for remote work. Professionals have access to reliable connectivity.',
      icon: '📡',
    },
  ];

  const stats = [
    { label: 'Remote-Ready Professionals', value: '90%+' },
        { label: 'University Graduates', value: '90%+' },
    { label: 'Cost Savings', value: '40-60%' },
    { label: 'Satisfaction Rate', value: '98%' },
  ];

  return (
    <Page head={<SeoHead title="Why Nepal - Benefits of Hiring Nepali Talent" 
      description="Discover why Nepal is becoming a top destination for remote talent. Highly educated, English-proficient professionals ready to contribute."
    />} >
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">

              Why Nepal?
              </span>
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover why Nepal is emerging as a premier destination for global remote talent
            </p>
          </div>

          <div  className="max-w-4xl mx-auto mb-16">
            <div  className="prose prose-lg mx-auto">
              <p  className="text-gray-600 mb-6 text-lg">
                Nepal is home to a vibrant, educated, and rapidly growing workforce of talented professionals ready to
                contribute to global businesses. With strong English proficiency, excellent technical skills, and a
                commitment to quality, Nepali talent offers exceptional value for companies looking to build remote teams.
              </p>
            </div>
          </div>

          <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="group text-center p-6 bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#60cacc]/40 transition-all duration-300"
              >
                <div className="text-3xl font-bold text-[#1b4b8d] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-xl p-6 border border-gray-200/80 shadow-sm hover:shadow-lg hover:border-[#60cacc]/40 transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-4 p-3 inline-flex items-center justify-center rounded-lg bg-[#60cacc]/10 border border-[#60cacc]/20">
                  <div className="text-3xl">{reason.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1b4b8d] transition-colors">
                  {reason.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Ready to Tap into Nepal's Talent?</h2>
            <p  className="text-gray-600 mb-6">Join hundreds of companies already benefiting from exceptional Nepali professionals</p>
            <Button primary>Start Hiring Today</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
