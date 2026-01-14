import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';

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
      skills: ['Python', 'Machine Learning', 'SQL', 'Analytics', 'Data Entry'],
      description: 'Data scientists to unlock insights from your data',
    },
    {
      title: 'Customer Support',
      skills: ['Live Chat', 'Email Support', 'Troubleshooting', 'CRM'],
      description: 'Dedicated support professionals for your customers',
    },
  ];

  return (
    <Page>
      <NextSeo title="Talent Pool - Browse Verified Nepali Professionals" description="Explore our curated pool of verified Nepali talent across IT, design, business, and more." />
      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`)}>
              Our Talent Pool
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              Browse our verified pool of exceptional Nepali professionals ready to join your team
            </p>
          </div>

          <div className={tw(`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16`)}>
            {categories.map((category, index) => (
              <div key={index} className={tw(`bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow`)}>
                <h3 className={tw(`text-xl font-bold text-gray-900 mb-2`)}>{category.title}</h3>
                <p className={tw(`text-gray-600 mb-4`)}>{category.description}</p>
                <div className={tw(`flex flex-wrap gap-2 mb-4`)}>
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={tw(`px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm`)}>
                      {skill}
                    </span>
                  ))}
                </div>
                {/* <Button>View Candidates</Button> */}
              </div>
            ))}
          </div>

          <div className={tw(`bg-indigo-50 rounded-lg p-8 text-center`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>Can't find what you're looking for?</h2>
            <p className={tw(`text-gray-600 mb-6`)}>Contact us with your specific requirements and we'll match you with the perfect talent</p>
            <Button primary>Get Custom Matches</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
