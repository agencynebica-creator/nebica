 
const listItems = [
  {
    title: `IT & Software Development`,
    description: `Hire skilled developers proficient in modern technologies including React, Node.js, Python, Java, and cloud platforms. Full-stack, frontend, and backend experts ready for your projects.`,
  },
  {
    title: `Design & Creative`,
    description: `Access talented UI/UX designers, graphic designers, and creative professionals. From web design to branding, find the creative talent to elevate your visual identity.`,
  },
  {
    title: `Business & Operations`,
    description: `Connect with experienced project managers, business analysts, digital marketers, and virtual assistants. Build your operational team with professionals who understand global business dynamics.`,
  },
];

const ListSection = () => (
<section className="py-16 lg:py-24 overflow-hidden relative bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
        <span className="text-slate-900">Hire the best </span>
        <span className="bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">
          from Nepal
        </span>
      </h2>

      <p className="text-lg text-slate-600 max-w-3xl mx-auto">
        Discover elite professionals across diverse fields, verified for excellence and ready to drive your success
      </p>
    </div>

    <div className="flex flex-wrap items-center gap-12">

      <div className="w-full lg:w-1/2">
        <ul className="space-y-12">
          {listItems.map((item, index) => (
            <li className="flex gap-6" key={item.title}>
              
              <span className="flex w-16 h-16 items-center justify-center text-2xl font-bold rounded-full bg-blue-50 text-blue-500">
                {index + 1}
              </span>

              <div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 leading-loose">{item.description}</p>
              </div>

            </li>
          ))}
        </ul>
      </div>

      <div className="w-full lg:w-1/2">
        <img
          src="/team.jpg"
          alt="Professional team collaboration"
          className="w-full rounded-lg shadow-xl"
        />
      </div>

    </div>
  </div>
</section>
);

export default ListSection;
