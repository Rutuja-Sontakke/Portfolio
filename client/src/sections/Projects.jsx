const projects = [
  {
    title: "AI Code Reviewer",
    tech: "MERN Stack, Gemini API",
    desc: "AI-powered platform for analyzing and improving code quality using Google Gemini API.",
  },

  {
    title: "Airbnb Website Clone",
    tech: "NodeJS, ExpressJS, MongoDB",
    desc: "Full-stack Airbnb clone with authentication, booking system and CRUD operations.",
  },

  {
    title: "Cyber Cafe Management System",
    tech: "PHP, MySQL, Bootstrap",
    desc: "Web-based management system for users, sessions, computer allocation and reports.",
  },
];

function Projects() {

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
    >

      <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10 mt-16 max-w-7xl w-full">

        {projects.map((project, index) => (

          <div
            key={index}
            className="glass rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
          >

            <h3 className="text-2xl font-bold text-center">
              {project.title}
            </h3>

            <p className="text-purple-400 mt-3 text-center">
              {project.tech}
            </p>

            <p className="text-gray-300 mt-5 leading-7 text-center">
              {project.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Projects;