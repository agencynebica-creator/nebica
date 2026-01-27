 
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
  <section  className="lg:py-10 pt-10 overflow-hidden relative" style={{
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95)), url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}>
    <div  className="max-w-7xl mx-auto p-4 sm:p-4 lg:p-0">
    <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
          <span className="text-slate-900">Hire the best </span>
          <span className="bg-gradient-to-r from-[#1b4b8d] to-[#60cacc] bg-clip-text text-transparent">from Nepal</span>
        </h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover elite professionals across diverse fields, verified for excellence and ready to drive your success
        </p>
      </div>
      <div  className="flex flex-wrap -mx-8 items-center">
        <div  className="w-full lg:w-1/2 px-8">
          <ul  className="space-y-12">
            {listItems.map((item, index) => (
              <li  className="flex -mx-4" key={item.title}>
                <div  className="px-4">
                  <span
                     className="flex w-16 h-16 mx-auto items-center
                      justify-center text-2xl font-bold rounded-full
                      bg-blue-50 text-blue-500"
                  >
                    {index + 1}
                  </span>
                </div>
                <div  className="px-4">
                  <h3  className="my-4 text-xl font-semibold">{item.title}</h3>
                  <p  className="text-gray-500 leading-loose">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div  className="w-full lg:w-1/2 px-8">
          <div  className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
              alt="Professional team collaboration" 
               className="w-full h-auto object-cover rounded-lg"
              style={{ minHeight: '500px' }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ListSection;
