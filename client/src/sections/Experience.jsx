function Experience() {

  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
    >

      <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-16 max-w-7xl w-full">

        {/* Experience 1 */}

        <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

          <h3 className="text-2xl font-bold">
            PHP Full Stack Developer
          </h3>

          <p className="text-purple-400 mt-2">
            Softmate Systems LLP | Dec 2025 - Present
          </p>

          <ul className="mt-5 text-gray-300 leading-8 list-disc pl-5">

            <li>
              Working on Government of Maharashtra web portals.
            </li>

            <li>
              Developing dashboards, approval workflows and dynamic forms.
            </li>

            <li>
              Implementing server-side validation and session handling.
            </li>

            <li>
              Fixing functional and UI bugs with performance optimization.
            </li>

          </ul>

        </div>

        {/* Experience 2 */}

        <div className="glass rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

          <h3 className="text-2xl font-bold">
            Full Stack Developer Intern
          </h3>

          <p className="text-purple-400 mt-2">
            Cognifyz Technologies | Oct 2025 - Nov 2025
          </p>

          <ul className="mt-5 text-gray-300 leading-8 list-disc pl-5">

            <li>
              Built full stack registration system using NodeJS and ExpressJS.
            </li>

            <li>
              Developed REST APIs and MVC architecture.
            </li>

            <li>
              Implemented client-side and server-side validations.
            </li>

            <li>
              Managed dynamic user data and registration modules.
            </li>

          </ul>

        </div>

      </div>

    </section>
  );
}

export default Experience;