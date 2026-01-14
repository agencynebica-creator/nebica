import { NextSeo } from 'next-seo';
import Page from '@/components/page';
import Footer from '@/components/footer';
import { tw } from 'twind';
import Button from '@/components/button';

export default function Contact() {
  return (
    <Page>
      <NextSeo title="Contact Us - Get in Touch" description="Get in touch with us to discuss your hiring needs or request a custom quote." />
      <div className={tw(`bg-white`)}>
        <div className={tw(`max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8`)}>
          <div className={tw(`text-center mb-16`)}>
            <h1 className={tw(`text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4`)}>
              Contact Us
            </h1>
            <p className={tw(`text-xl text-gray-600 max-w-3xl mx-auto`)}>
              Have questions? We're here to help. Get in touch and let's discuss how we can support your hiring needs.
            </p>
          </div>

          <div className={tw(`grid lg:grid-cols-2 gap-12 mb-16`)}>
            <div>
              <h2 className={tw(`text-2xl font-bold text-gray-900 mb-6`)}>Get in Touch</h2>
              <form className={tw(`space-y-6`)}>
                <div>
                  <label className={tw(`block text-sm font-medium text-gray-700 mb-2`)}>Name</label>
                  <input
                    type="text"
                    className={tw(`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`)}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={tw(`block text-sm font-medium text-gray-700 mb-2`)}>Email</label>
                  <input
                    type="email"
                    className={tw(`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`)}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className={tw(`block text-sm font-medium text-gray-700 mb-2`)}>Company</label>
                  <input
                    type="text"
                    className={tw(`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`)}
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label className={tw(`block text-sm font-medium text-gray-700 mb-2`)}>Message</label>
                  <textarea
                    rows={6}
                    className={tw(`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent`)}
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>
                <Button primary modifier="w-full">Send Message</Button>
              </form>
            </div>

            <div>
              <h2 className={tw(`text-2xl font-bold text-gray-900 mb-6`)}>Contact Information</h2>
              <div className={tw(`space-y-6`)}>
                <div>
                  <h3 className={tw(`text-lg font-semibold text-gray-900 mb-2`)}>Email</h3>
                  <p className={tw(`text-gray-600`)}>info@nepaltalent.com</p>
                  <p className={tw(`text-gray-600`)}>hire@nepaltalent.com</p>
                </div>
                <div>
                  <h3 className={tw(`text-lg font-semibold text-gray-900 mb-2`)}>Phone</h3>
                  <p className={tw(`text-gray-600`)}>+977 1-XXXXXXX</p>
                  <p className={tw(`text-gray-600`)}>Available: 24/7</p>
                </div>
                <div>
                  <h3 className={tw(`text-lg font-semibold text-gray-900 mb-2`)}>Address</h3>
                  <p className={tw(`text-gray-600`)}>
                    Kathmandu, Nepal<br />
                    Office hours: Sunday - Friday, 9 AM - 6 PM NPT
                  </p>
                </div>
                <div className={tw(`bg-indigo-50 rounded-lg p-6`)}>
                  <h3 className={tw(`text-lg font-semibold text-gray-900 mb-2`)}>Response Time</h3>
                  <p className={tw(`text-gray-600`)}>
                    We typically respond within 24 hours. For urgent matters, please call us directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Page>
  );
}
