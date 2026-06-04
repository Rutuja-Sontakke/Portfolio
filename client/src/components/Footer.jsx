import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
   return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">

        <div className="flex gap-6 text-2xl">

          <a
            href="https://github.com/Rutuja-Sontakke"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rutujas04"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:rutujasontakke50@gmail.com"
            className="hover:text-purple-500 transition"
          >
            <FaEnvelope />
          </a>

        </div>

        <p className="text-gray-400 text-center text-sm md:text-base">
          © 2026 Rutuja Sontakke | Full Stack Developer
        </p>

      </div>
    </footer>
  );
}

export default Footer;
