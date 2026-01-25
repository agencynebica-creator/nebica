import type { NextApiRequest, NextApiResponse } from 'next';

type LeadType = 'newsletter' | 'contact';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { type, email, name, company, message } = req.body as {
    type: LeadType;
    email: string;
    name?: string;
    company?: string;
    message?: string;
  };

  if (!type || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY!;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID!;
  const SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX!;

  const url = `https://${SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  // 🔖 Tags based on intent
  const tags =
    type === 'newsletter'
      ? ['newsletter']
      : ['contact-lead'];

  // 🧠 Merge fields
  const mergeFields: Record<string, string> = {};
  if (name) mergeFields.FNAME = name;
  if (company) mergeFields.COMPANY = company;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `apikey ${API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: mergeFields,
        tags,
      }),
    });

    const data = await response.json();

    if (!response.ok && data.title !== 'Member Exists') {
      return res.status(400).json({ message: data.detail });
    }

    // 📩 Optional: internal logging / DB / Slack later
    if (type === 'contact') {
      console.log('📨 New contact lead:', {
        name,
        email,
        company,
        message,
      });
    }

    return res.status(200).json({
      message:
        type === 'newsletter'
          ? 'Subscribed successfully'
          : 'Thanks! Our team will contact you within 24 hours.',
    });
  } catch (error) {
    return res.status(500).json({ message: 'Server error' });
  }
}
