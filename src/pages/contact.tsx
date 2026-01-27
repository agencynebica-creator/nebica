import { useState } from 'react';
import Page from '@/components/page';
import Footer from '@/components/footer';
 import Button from '@/components/button';
import SeoHead from '@/components/seohead';


 

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'loading'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          ...form,
        }),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        const data = await res.json();
        setErrorMessage(data.message || 'Something went wrong');
        setStatus('error');
      }
    } catch (err) {
      setErrorMessage('Server error, please try again later.');
      setStatus('error');
    }
  };

  return (
    <Page head={ 
      <SeoHead title="Contact Us - Get in Touch"
        description ="Get in touch with us to discuss your hiring needs or request a custom quote."
      />}>
  
      <div  className="bg-white">
        <div  className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div  className="text-center mb-16">
            <h1  className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-[#1b4b8d] via-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">

              Contact Us
              </span>
            </h1>
            <p  className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We're here to help. Get in touch and let's discuss how we can support your hiring needs.
            </p>
          </div>

          <div  className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#60cacc] focus:ring-2 focus:ring-[#60cacc]/20 focus:outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#60cacc] focus:ring-2 focus:ring-[#60cacc]/20 focus:outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#60cacc] focus:ring-2 focus:ring-[#60cacc]/20 focus:outline-none transition-all"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#60cacc] focus:ring-2 focus:ring-[#60cacc]/20 focus:outline-none transition-all"
                    placeholder="Tell us about your hiring needs..."
                  ></textarea>
                </div>

                <Button 
                  primary 
                  modifier="w-full py-3" 
                  type="submit" 
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>

                {status === 'success' && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700">Thanks! Our team will contact you within 24 hours.</p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2  className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div  className="space-y-6">
                <div>
                  <h3  className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p  className="text-gray-600">contact@nebica.com</p>
                  <p  className="text-gray-600">hire@nebica.com</p>
                </div>
                <div>
                  <h3  className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p  className="text-gray-600">+977 9851118072</p>
                  <p  className="text-gray-600">Available: 24/7</p>
                </div>
                <div>
                  <h3  className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p  className="text-gray-600">
                    Kathmandu, Nepal<br />
                    Office hours: Sunday - Friday, 9 AM - 6 PM NPT
                  </p>
                </div>
                <div  className="bg-indigo-50 rounded-lg p-6">
                  <h3  className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p  className="text-gray-600">
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
