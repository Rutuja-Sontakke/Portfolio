function About() {

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
    >

      <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center">
        About Me
      </h2>

      <div className="glass rounded-3xl p-8 md:p-12 mt-12 max-w-5xl w-full">

        <p className="text-gray-300 text-lg leading-9 text-center">

          Full Stack Developer with experience in
          MERN stack and PHP development.

          Worked on Government portals, dashboards,
          AI integrations, REST APIs and scalable applications.

          Passionate about modern UI/UX and backend architecture.

        </p>

      </div>

    </section>
  );
}

export default About;