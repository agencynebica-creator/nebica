import Page from '@/components/page';
import Footer from '@/components/footer';
 import Button from '@/components/button';
import Check from '@/constants/svg/check.svg';
import SeoHead from '@/components/seohead';
 


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
    <Page head={<SeoHead
      title="Pricing - Flexible Plans for Every Business"
       description="Transparent, custom pricing plans designed to scale with your business needs. Contact us for a tailored quote." 
    
    />}>
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Pricing Plans
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible pricing that scales with your business. All plans include our instant replacement guarantee.
            </p>
          </div>

          <div  className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white border-2 rounded-lg p-8 ${
                  plan.popular ? 'border-indigo-500 shadow-xl transform scale-105' : 'border-gray-200'
                }`}
                
             
             >
                {plan.popular && (
                  <div  className="bg-indigo-500 text-white text-center py-2 rounded-t-lg -mt-8 -mx-8 mb-4">
                    Most Popular
                  </div>
                )}
                <h3  className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p  className="text-gray-600 mb-6">{plan.description}</p>
                <div  className="mb-6">
                  <span  className="text-4xl font-bold text-gray-900">{plan.price}</span>
                </div>
                <ul  className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}  className="flex items-start">
                      <Check  className="h-5 w-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span  className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button primary={plan.popular} modifier="w-full">
                  Get Started
                </Button>
              </div>
            ))}
          </div>

          <div  className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">What's Included in All Plans</h2>
            <div  className="grid md:grid-cols-2 gap-4">
              <div  className="flex items-start">
                <Check  className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span  className="text-gray-600">Candidate matching based on your requirements</span>
              </div>
              <div  className="flex items-start">
                <Check  className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span  className="text-gray-600">Quality assurance and verification</span>
              </div>
              <div  className="flex items-start">
                <Check  className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span  className="text-gray-600">Ongoing relationship management</span>
              </div>
              <div  className="flex items-start">
                <Check  className="h-5 w-5 text-indigo-500 mr-3 mt-0.5" />
                <span  className="text-gray-600">Replacement guarantee (instant for Pro & Enterprise)</span>
              </div>
            </div>
          </div>

          <div  className="bg-indigo-50 rounded-lg p-8 text-center">
            <h2  className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h2>
            <p  className="text-gray-600 mb-6">Contact us to discuss your specific requirements and get a tailored quote</p>
            <Button primary>Contact Sales</Button>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
