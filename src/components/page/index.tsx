import Head from 'next/head';
import Navigation from '@/components/navigation';
 
interface IProps {
  children: React.ReactNode;
  head: React.ReactNode
}

const Page = ({head , children }: IProps) => (
  <div>
   {head}
    <div  className="min-h-screen flex flex-col relative">
      <Navigation />
      {children}
    </div>
  </div>
);

export default Page;
