import Head from 'next/head';
import Navigation from '@/components/navigation';
import { tw } from 'twind';

interface IProps {
  children: React.ReactNode;
}

const Page = ({ children }: IProps) => (
  <div>
    <Head>
      <link rel="icon" href="/icon.png" />
    </Head>
    <div className={tw(`min-h-screen flex flex-col relative`)}>
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
