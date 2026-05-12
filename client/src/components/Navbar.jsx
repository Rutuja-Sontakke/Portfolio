function Navbar() {

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-5">

        <h1 className="text-2xl font-bold gradient-text">
          Rutuja.dev
        </h1>

        <ul className="flex gap-4 md:gap-8 text-sm md:text-lg text-gray-300">

  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#skills">Skills</a>
  </li>

  <li>
    <a href="#projects">Projects</a>
  </li>

  <li>
    <a href="#contact">Contact</a>
  </li>

</ul>

      </div>

    </nav>
  );
}

export default Navbar;