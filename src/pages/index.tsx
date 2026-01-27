

import Page from '@/components/page';
import Header from '@/components/header';
import ListSection from '@/components/list-section';
import FeatureSection from '@/components/feature-section';
import CasesSection from '@/components/cases-section';
import SocialProof from '@/components/social-proof';
import PricingTable from '@/components/pricing-table';
import Footer from '@/components/footer';
import SeoHead from '@/components/seohead';

export default function Home() {
  return (
    <>
    <Page head = { <SeoHead
   title = "Nebica - Hire Verified Remote Talent from Nepal"
    description="Hire exceptional Nepali talent..."
/>}>
           
        <Header />

      <main>
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <PricingTable />
      </main>
      <Footer />
    </Page>
    </>
  );
}
