import { FaReact, FaNodeJs, FaPhp, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  {
    name: "ReactJS",
    icon: <FaReact size={40} />,
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs size={40} />,
  },
  {
    name: "ExpressJS",
    icon: <SiExpress size={40} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb size={40} />,
  },
  {
    name: "PHP",
    icon: <FaPhp size={40} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={40} />,
  },
  {
    name: "MySQL",
    icon: <FaDatabase size={40} />,
  },
];

function Skills() {

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-16 py-24"
    >

      <h2 className="text-4xl md:text-5xl font-bold gradient-text text-center">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-6xl w-full">

        {skills.map((skill, index) => (

          <div
            key={index}
            className="glass rounded-3xl p-8 flex flex-col items-center justify-center hover:scale-105 transition duration-300"
          >

            <div className="text-purple-400">
              {skill.icon}
            </div>

            <h3 className="mt-4 text-lg md:text-xl font-semibold">
              {skill.name}
            </h3>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;