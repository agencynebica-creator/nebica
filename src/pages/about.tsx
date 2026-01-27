import Page from '@/components/page';
import Footer from '@/components/footer';
 import Button from '@/components/button';
import SeoHead from '@/components/seohead';
 


export default function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every candidate goes through rigorous screening.',
    },
    {
      title: 'Transparency',
      description: 'Clear communication and honest feedback at every step of the process.',
    },
    {
      title: 'Partnership',
      description: 'We build long-term relationships, not just one-time transactions.',
    },
    {
      title: 'Innovation',
      description: 'Continuously improving our processes and technology to serve you better.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Companies Served' },
    { number: '2000+', label: 'Talents Placed' },
    { number: '98%', label: 'Success Rate' },
    { number: '50+', label: 'Countries Reached' },
  ];

  return (
    <>
   
    <Page head = { <SeoHead
  title ="About Us - Connecting Nepali Talent Globally"
   description = "Learn about our mission to connect exceptional Nepali professionals with global opportunities."
/>}>
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              About Us
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging the gap between exceptional Nepali talent and global opportunities
            </p>
          </div>

          <div  className="max-w-4xl mx-auto mb-16">
            <div  className="prose prose-lg mx-auto">
              <p  className="text-gray-600 mb-6 text-lg">
                We are a leading hiring agency based in Nepal, dedicated to connecting talented Nepali professionals with
                global companies. Our mission is to unlock the potential of Nepal's skilled workforce and provide
                international businesses with access to world-class talent.
              </p>
              <p  className="text-gray-600 mb-6 text-lg">
                With years of experience in international recruitment, we understand the challenges of remote hiring and
                have built a comprehensive system that ensures quality placements, seamless onboarding, and ongoing success.
              </p>
              <p  className="text-gray-600 text-lg">
                What sets us apart is our commitment to quality, transparency, and the instant replacement guarantee that
                ensures you never face downtime. We're not just a hiring agency—we're your long-term partner in building
                exceptional remote teams.
              </p>
            </div>
          </div>

          <div  className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index}  className="text-center">
                <div  className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div  className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div  className="mb-16">
            <h2  className="text-3xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
            <div  className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index}  className="text-center">
                  <h3  className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p  className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Join Us on This Journey</h2>
            <p  className="text-gray-600 mb-6">Whether you're looking to hire or seeking opportunities, we're here to help</p>
            <div  className="flex justify-center gap-4">
              <Button primary>Start Hiring</Button>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
    </>

  );
}
