import Page from '@/components/page';
import Footer from '@/components/footer';
 import { useState } from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title:"FAQs - Frequently Asked Questions",
  description:"Find answers to common questions about hiring remote talent from Nepal, our process, pricing, and support."

}
 


export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does the hiring process take?',
      answer: 'Our streamlined process typically takes 7-14 days from initial consultation to onboarding. This includes candidate matching, screening, interviews, and contract setup.',
    },
    {
      question: 'What if a candidate doesn\'t work out?',
      answer: 'We offer an instant replacement guarantee. If a placement doesn\'t meet your expectations, we\'ll replace them immediately at no additional cost, ensuring zero downtime for your team.',
    },
    {
      question: 'What skills and industries do you cover?',
      answer: 'We cover a wide range of industries including IT, software development, design, digital marketing, project management, customer support, data science, and more. If you have specific requirements, contact us and we\'ll find the right talent.',
    },
    {
      question: 'How do you verify candidates?',
      answer: 'All candidates go through rigorous verification including technical skill assessments, background checks, English proficiency tests, and cultural fit evaluations. We ensure quality before matching.',
    },
    {
      question: 'What are the costs involved?',
      answer: 'Our pricing is customized based on your specific needs, team size, and requirements. We offer flexible plans for startups, growing businesses, and enterprises. Contact us for a tailored quote.',
    },
    {
      question: 'Do you handle contracts and legal compliance?',
      answer: 'Yes, we provide full support for contracts, work permits, tax compliance, and all legal requirements for international hiring. Our team ensures everything is properly documented and compliant.',
    },
    {
      question: 'Can I scale my team up or down?',
      answer: 'Absolutely. We understand that business needs change. You can scale your team up or down based on project requirements, and we\'ll help you manage the transitions smoothly.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide ongoing support including dedicated account managers, performance tracking, relationship management, and 24/7 assistance. Our team is always available to help.',
    },
    {
      question: 'How do you ensure cultural fit?',
      answer: 'We assess candidates not just for technical skills but also for communication style, work values, and cultural compatibility. We match candidates who align with your company culture and values.',
    },
    {
      question: 'Do candidates speak English fluently?',
      answer: 'Yes, all candidates in our pool have verified English proficiency. We test reading, writing, and speaking skills to ensure effective communication with your team.',
    },
  ];

  return (
    <Page>
      <div  className="bg-white">
        <div  className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to the most common questions about our services and process
            </p>
          </div>

          <div  className="space-y-4 mb-16">
            {faqs.map((faq, index) => (
              <div key={index}  className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                   className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span  className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                     className="w-5 h-5 text-gray-500 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div  className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p  className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h2>
            <p  className="text-gray-600 mb-6">Our team is here to help. Get in touch and we'll answer any questions you have.</p>
            <a href="/contact"  className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
