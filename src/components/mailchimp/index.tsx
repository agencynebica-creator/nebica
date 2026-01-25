import { useState } from 'react';
 import Button from '@/components/button';

export default function NewsletterBox() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const subscribe = async () => {
    setStatus('loading');
    setMessage('');

    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email ,type:"newsletter"}),
    });

    const data = await res.json();
    console.log(data)

    if (res.ok) {
      setStatus('success');
      setMessage(data.message);
      setEmail('');
    } else {
      setStatus('error');
      setMessage(data.message || 'Subscription failed');
    }
  };

  return (
    <div  className="w-full lg:w-1/2 mt-12 lg:mt-0">
      <div  className="border border-gray-400 rounded py-5 px-4">
        <h4  className="font-mono text-sm uppercase text-gray-500 mb-3">
          Get hiring insights & updates
        </h4>

        <div  className="flex w-full">
          <input
            aria-label="email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             className="border border-gray-300 bg-gray-100 min-w-0 w-full rounded text-gray-800 py-2 px-3 mr-2"
            placeholder="Enter your email"
          />
          <Button onClick={subscribe} disabled={status === 'loading'}>
            {status === 'loading' ? '...' : 'Subscribe'}
          </Button>
        </div>

        {message && (
          <p
            className={
              `text-sm mt-3 ${
                status === 'success' ? 'text-green-600' : 'text-red-600'
              }`
            }
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
