 
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

    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

  {/* LEFT CONTENT */}
  <div className="w-full lg:w-1/2">
    <ul className="space-y-10">
      {listItems.map((item, index) => (
        <li
          key={item.title}
          className="flex items-start gap-5 group"
        >
          {/* Number */}
          <span className="flex w-14 h-14 shrink-0 items-center justify-center text-lg font-semibold rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-400 group-hover:text-white transition">
            {index + 1}
          </span>

          {/* Text */}
          <div>
            <h3 className="mb-1 text-lg lg:text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-500 leading-relaxed">
              {item.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>

  {/* RIGHT IMAGE */}
  <div className=" hidden md:flex w-full lg:w-1/2 flex justify-center">
    <img
      src="/team.png"
      alt="Nebica - Hire the best professionals from Nepal"
      className="w-full max-w-md lg:max-w-full rounded-2xl shadow-2xl object-cover"
    />
  </div>

</div>
  </div>
</section>
);

export default ListSection;
