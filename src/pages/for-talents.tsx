import Page from '@/components/page';
import Footer from '@/components/footer';
 import Button from '@/components/button';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title:"For Talents - Find Global Opportunities",
   description:"Nepali professionals, discover exciting global opportunities. Connect with international companies and advance your career."

}

export default function ForTalents() {
  const benefits = [
    {
      title: 'Global Opportunities',
      description: 'Connect with leading international companies and work on exciting projects from anywhere.',
      icon: '🌍',
    },
    {
      title: 'Fair Compensation',
      description: 'Get competitive rates that reflect your skills and experience, with timely payments guaranteed.',
      icon: '💰',
    },
    {
      title: 'Professional Growth',
      description: 'Work with diverse teams, learn new technologies, and advance your career with global companies.',
      icon: '📈',
    },
    {
      title: 'Support & Guidance',
      description: 'Our team provides ongoing support, helps with contracts, and ensures smooth working relationships.',
      icon: '🤝',
    },
    {
      title: 'Work-Life Balance',
      description: 'Enjoy the flexibility of remote work while building your career with international companies.',
      icon: '⚖️',
    },
    {
      title: 'Verified Opportunities',
      description: 'All opportunities are verified. Work with legitimate companies on meaningful projects.',
      icon: '✅',
    },
  ];

  return (
    <Page>
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              For Talents
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nepali professionals, connect with global opportunities and advance your career
            </p>
          </div>

          <div  className="max-w-4xl mx-auto mb-16">
            <div  className="prose prose-lg mx-auto">
              <p  className="text-gray-600 mb-6 text-lg">
                Are you a skilled professional looking for exciting global opportunities? Join our talent network and
                connect with leading international companies looking for your expertise.
              </p>
              <p  className="text-gray-600 text-lg">
                We help Nepali professionals find rewarding remote work opportunities with companies around the world.
                Whether you're a developer, designer, marketer, or business professional, we can help match you with
                the right opportunity.
              </p>
            </div>
          </div>

          <div  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index}  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div  className="text-4xl mb-4">{benefit.icon}</div>
                <h3  className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p  className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div  className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2  className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h2>
            <div  className="grid md:grid-cols-3 gap-8">
              <div  className="text-center">
                <div  className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3  className="text-lg font-bold text-gray-900 mb-2">Register</h3>
                <p  className="text-gray-600">Create your profile and showcase your skills and experience</p>
              </div>
              <div  className="text-center">
                <div  className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3  className="text-lg font-bold text-gray-900 mb-2">Get Matched</h3>
                <p  className="text-gray-600">We match you with opportunities that fit your skills and interests</p>
              </div>
              <div  className="text-center">
                <div  className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3  className="text-lg font-bold text-gray-900 mb-2">Start Working</h3>
                <p  className="text-gray-600">Begin your journey with a global company and grow your career</p>
              </div>
            </div>
          </div>

          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Talent Network?</h2>
            <p  className="text-gray-600 mb-6">Register today and start connecting with global opportunities</p>
            <Button primary>Register as Talent</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
