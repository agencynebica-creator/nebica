
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title:"Hire Verified Remote Talent from Nepal - Top Nepali Professionals",
  description:"Hire exceptional Nepali talent for your global team. Verified remote professionals across IT, design, and business. Cost-effective, skilled, ready to contribute from day one, with instant replacement guarantee."   
}


import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';


export default function Home() {
  return (
    <Page>
           
        <Header />

      <main>
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
  );
}
