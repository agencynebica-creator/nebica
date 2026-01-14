import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';

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
    { label: 'English Speakers', value: '90%+' },
    { label: 'University Graduates', value: 'High %' },
    { label: 'Cost Savings', value: '40-60%' },
    { label: 'Satisfaction Rate', value: '98%' },
  ];

  return (
    <Page>
      <NextSeo title="Why Nepal - Benefits of Hiring Nepali Talent" description="Discover why Nepal is becoming a top destination for remote talent. Highly educated, English-proficient professionals ready to contribute." />
      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`)}>
              Why Nepal?
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              Discover why Nepal is emerging as a premier destination for global remote talent
            </p>
          </div>

          <div className={tw(`max-w-4xl mx-auto mb-16`)}>
            <div className={tw(`prose prose-lg mx-auto`)}>
              <p className={tw(`text-gray-600 mb-6 text-lg`)}>
                Nepal is home to a vibrant, educated, and rapidly growing workforce of talented professionals ready to
                contribute to global businesses. With strong English proficiency, excellent technical skills, and a
                commitment to quality, Nepali talent offers exceptional value for companies looking to build remote teams.
              </p>
            </div>
          </div>

          <div className={tw(`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16`)}>
            {stats.map((stat, index) => (
              <div key={index} className={tw(`text-center bg-indigo-50 rounded-lg p-6`)}>
                <div className={tw(`text-3xl font-bold text-indigo-600 mb-2`)}>{stat.value}</div>
                <div className={tw(`text-gray-600`)}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div className={tw(`grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16`)}>
            {reasons.map((reason, index) => (
              <div key={index} className={tw(`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow`)}>
                <div className={tw(`text-4xl mb-4`)}>{reason.icon}</div>
                <h3 className={tw(`text-xl font-bold text-gray-900 mb-2`)}>{reason.title}</h3>
                <p className={tw(`text-gray-600`)}>{reason.description}</p>
              </div>
            ))}
          </div>

          <div className={tw(`bg-indigo-50 rounded-lg p-8 text-center`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>Ready to Tap into Nepal's Talent?</h2>
            <p className={tw(`text-gray-600 mb-6`)}>Join hundreds of companies already benefiting from exceptional Nepali professionals</p>
            <Button primary>Start Hiring Today</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
