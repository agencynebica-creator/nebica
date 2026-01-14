import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';
import Check from '@/constants/svg/check.svg';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      price: 'Custom',
      features: [
        '1-5 team members',
        'Pre-screened candidates',
        'Technical assessment',
        'Background verification',
        '30-day replacement guarantee',
        'Email support',
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      price: 'Custom',
      features: [
        '6-20 team members',
        'Priority candidate matching',
        'Technical assessment',
        'Background verification',
        'Instant replacement guarantee',
        'Dedicated account manager',
        'Contract & legal support',
        '24/7 support',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      price: 'Custom',
      features: [
        'Unlimited team members',
        'VIP candidate access',
        'Comprehensive assessment',
        'Full background verification',
        'Instant replacement guarantee',
        'Dedicated team of managers',
        'Full legal & compliance support',
        'Payroll & payment processing',
        'Custom onboarding program',
        'Priority 24/7 support',
        'SLA guarantees',
      ],
    },
  ];

  return (
    <Page>
      <NextSeo title="Pricing - Flexible Plans for Every Business" description="Transparent, custom pricing plans designed to scale with your business needs. Contact us for a tailored quote." />
      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`)}>
              Pricing Plans
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              Flexible pricing that scales with your business. All plans include our instant replacement guarantee.
            </p>
          </div>

          <div className={tw(`grid md:grid-cols-3 gap-8 mb-16`)}>
            {plans.map((plan, index) => (
              <div
                key={index}
                className={tw(
                  `bg-white border-2 rounded-lg p-8 ${
                    plan.popular ? 'border-indigo-500 shadow-xl transform scale-105' : 'border-gray-200'
                  }`,
                )}
              >
                {plan.popular && (
                  <div className={tw(`bg-indigo-500 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4`)}>
                    Most Popular
                  </div>
                )}
                <h3 className={tw(`text-2xl font-bold text-gray-900 mb-2`)}>{plan.name}</h3>
                <p className={tw(`text-gray-600 mb-6`)}>{plan.description}</p>
                <div className={tw(`mb-6`)}>
                  <span className={tw(`text-4xl font-bold text-gray-900`)}>{plan.price}</span>
                </div>
                <ul className={tw(`space-y-4 mb-8`)}>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={tw(`flex items-start`)}>
                      <Check className={tw(`h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0`)} />
                      <span className={tw(`text-gray-600`)}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button primary={plan.popular} modifier="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div className={tw(`bg-gray-50 rounded-lg p-8 mb-8`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>What's Included in All Plans</h2>
            <div className={tw(`grid md:grid-cols-2 gap-4`)}>
              <div className={tw(`flex items-start`)}>
                <Check className={tw(`h-5 w-5 text-indigo-500 mr-3 mt-0.5`)} />
                <span className={tw(`text-gray-600`)}>Candidate matching based on your requirements</span>
              </div>
              <div className={tw(`flex items-start`)}>
                <Check className={tw(`h-5 w-5 text-indigo-500 mr-3 mt-0.5`)} />
                <span className={tw(`text-gray-600`)}>Quality assurance and verification</span>
              </div>
              <div className={tw(`flex items-start`)}>
                <Check className={tw(`h-5 w-5 text-indigo-500 mr-3 mt-0.5`)} />
                <span className={tw(`text-gray-600`)}>Ongoing relationship management</span>
              </div>
              <div className={tw(`flex items-start`)}>
                <Check className={tw(`h-5 w-5 text-indigo-500 mr-3 mt-0.5`)} />
                <span className={tw(`text-gray-600`)}>Replacement guarantee (instant for Pro & Enterprise)</span>
              </div>
            </div>
          </div>

          <div className={tw(`bg-indigo-50 rounded-lg p-8 text-center`)}>
            <h2 className={tw(`text-2xl font-bold text-gray-900 mb-4`)}>Need a Custom Solution?</h2>
            <p className={tw(`text-gray-600 mb-6`)}>Contact us to discuss your specific requirements and get a tailored quote</p>
            <Button primary>Contact Sales</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
