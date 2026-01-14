import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: 'Proxy Interviews: When the Hired Person Is Not the Interviewed One',
      problem:
        'One of the most common issues in remote hiring is interview proxy fraud. Candidates use someone else to pass technical or communication interviews, only to replace them after onboarding.',
      consequences:
        'Companies experience sudden drops in performance, repeated mistakes, missed deadlines, and frustration among internal teams. Trust erodes quickly, and managers spend extra time firefighting.',
      solution:
        'A managed hiring process ensures identity consistency through live interviews, monitored onboarding, and continuous engagement. The same person is verified throughout the hiring lifecycle.',
    },
    {
      title: 'Outsourced Work Without Permission',
      problem:
        'Some remote employees secretly outsource tasks to third parties, often to save time or manage multiple jobs.',
      consequences:
        'This exposes companies to serious risks including IP leaks, security breaches, inconsistent quality, and compliance violations.',
      solution:
        'Employing talent directly through a staffing partner creates accountability. Clear contracts, monitoring, and ownership prevent unauthorized task delegation.',
    },
    {
      title: 'Fake Productivity and Time Fraud',
      problem:
        'Remote environments can be abused using fake time trackers, VPNs, or automation tools that simulate activity without actual work.',
      consequences:
        'Businesses lose money paying full salaries for partial output, while team morale and delivery timelines suffer.',
      solution:
        'Outcome-based performance tracking, regular check-ins, and transparent reporting ensure productivity is measured by results, not appearances.',
    },
    {
      title: 'Multiple Full-Time Jobs at Once',
      problem:
        'Some remote workers accept multiple full-time roles simultaneously, leading to burnout and unavailability.',
      consequences:
        'Projects slow down, communication breaks, and reliability becomes unpredictable.',
      solution:
        'Exclusive employment agreements and availability validation ensure employees are fully committed to one role, with replacement guarantees if expectations are not met.',
    },
  ];

  return (
    <Page>
      <NextSeo
        title="Case Studies – Remote Hiring Success & Lessons"
        description="Explore real-world case studies on remote hiring risks, their consequences, and how managed staffing solutions resolve them."
      />

      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-5xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          
          {/* Page Header */}
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl font-bold text-gray-900 mb-6`)}>
              Case Studies: Remote Hiring Challenges & Solutions
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              Learn from real remote hiring scenarios — the problems, consequences, and how structured staffing solves them.
            </p>
          </div>

          {/* Case Study List */}
          <div className={tw(`space-y-20`)}>
            {caseStudies.map((study, index) => (
              <article
                key={index}
                className={tw(`border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow`)}
              >
                <h2 className={tw(`text-2xl md:text-3xl font-bold text-gray-900 mb-6`)}>
                  {study.title}
                </h2>

                <div className={tw(`space-y-4 text-lg text-gray-700`)}>
                  <p>
                    <strong className={tw(`text-gray-900`)}>Problem: </strong>
                    {study.problem}
                  </p>

                  <p>
                    <strong className={tw(`text-gray-900`)}>Consequences: </strong>
                    {study.consequences}
                  </p>

                  <p>
                    <strong className={tw(`text-gray-900`)}>Solution: </strong>
                    {study.solution}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA Section */}
          {/* <div className={tw(`bg-indigo-50 rounded-lg p-8 text-center mt-20`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>
              Build Your Own Success Story
            </h2>
            <p className={tw(`text-gray-600 mb-6`)}>
              Partner with us for fully managed remote employees — verified, accountable, and dedicated to your company’s success.
            </p>
            <Button primary>Talk to Our Team</Button>
          </div> */}

        </div>
      </div>

      <Footer />
    </Page>
  );
}
