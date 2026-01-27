// components/SeoHead.tsx
import Head from 'next/head';

interface SeoHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
}

export default function SeoHead({ 
  title, 
  description, 
  ogImage = 'logo.png',
  ogType = 'website',
  keywords = [] 
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      
      {/* Keywords */}
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical URL (optional) */}
      <link rel="canonical" href={`https://nebica.com${typeof window !== 'undefined' ? window.location.pathname : ''}`} />
    </Head>
  );
}