'use client'

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import Arrow from '@/constants/svg/arrow.svg'


// Particle background component
const ParticleBg = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // Only load plugins if you need them
    // await loadFull(engine); // <-- optional, comment out if causing errors
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 400,
            density: {
              enable: true,
              value_area: 3000,
            },
          },
          links: { // tsparticles renamed "line_linked" to "links"
            enable: false,
          },
          move: {
            direction: 'right',
            speed: 0.3,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.5,
              opacity_min: 0.1,
            },
          },
        },
        interactivity: {
          events: { onClick: { enable: false } },
        },
        detectRetina: true,
      }}
    />
  );
};



const articles = [
  {
    title: `Tech startup scales development team with 5 Nepali engineers, reducing costs by 40% while maintaining quality.`,
    image: `/images/case-1.webp`,
    alt: `Tech startup success story`,
  },
  {
    title: `Global agency builds complete design team in Nepal, delivering world-class creative work for Fortune 500 clients.`,
    image: `/images/case-2.webp`,
    alt: `Design team success story`,
  },
  {
    title: `E-commerce platform accelerates growth with remote Nepali operations team, handling 24/7 customer support.`,
    image: `/images/case-3.webp`,
    alt: `Operations team success story`,
  },
];

const CasesSection = () => (
  <section>
    <div  className="w-full min-h-screen bg-gray-900 relative">
      <div  className="absolute left-0 top-0 h-screen w-full overflow-hidden">
        <ParticleBg />
      </div>
      <div  className="max-w-7xl mx-4 lg:mx-auto pt-20 lg:pt-40">
        <h1  className="text-white text-4xl lg:text-6xl font-bold text-center">Success Stories</h1>
        <p  className="text-white text-gray-400 text-center text-xl mt-12">
          Discover how global companies have scaled their teams with exceptional Nepali talent
        </p>
        <div  className="mx-auto pt-24">
          <div  className="w-full flex flex-wrap justify-around">
            {articles.map((article) => (
              <div
                key={article.title}
                 className="xl:w-1/3 sm:w-5/12 sm:max-w-xs relative mb-32 lg:mb-20
                   xl:max-w-sm lg:w-1/2 w-11/12 mx-auto sm:mx-0 cursor-pointer hover:scale-105"
              >
                <div  className="h-64 z-20">
                  <img
                    src={article.image}
                    alt={article.alt}
                     className="h-full w-full object-cover overflow-hidden rounded"
                    width={400}
                    height={300}
                  />
                </div>
                <div  className="p-4 shadow-lg w-full mx-auto -mt-8 bg-white rounded-b z-30 relative">
                  <p  className="uppercase text-sm text-gray-700 text-center pb-1">Case study</p>
                  <p  className="text-gray-500 text-center pb-1 text-sm">{article.title}</p>
                </div>
              </div>
            ))}
            <span
               className="-mt-8 pb-12 lg:mt-4 flex items-center text-xl
                 text-indigo-400 cursor-pointer z-30 hover:text-indigo-600"
            >
              View all success stories
              <Arrow  className="h-6 w-6 fill-current ml-2" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CasesSection;
