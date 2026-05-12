import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function Hero() {

  return (
    <section
  id="home"
  className="h-screen flex flex-col md:flex-row items-center justify-center px-10"
>

      <div className="flex-1">

        <motion.h1
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="text-6xl font-bold leading-tight"
        >
          Hi, I'm <br />

          <span className="gradient-text">
            Rutuja Sontakke
          </span>

        </motion.h1>

        <p className="mt-6 text-xl text-gray-300 max-w-xl">
          Full Stack Developer skilled in MERN Stack,
          PHP, ReactJS, NodeJS and scalable web applications.
        </p>

        <div className="flex gap-5 mt-8">

  {/* Hire Me Button */}

  <a href="#contact">

    <button className="bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 transition">

      Hire Me

    </button>

  </a>

  {/* Download CV Button */}

  <a
    href="/resume.pdf"
    download
  >

    <button className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500 transition">

      Download CV

    </button>

  </a>

</div>

      </div>

      <div className="w-full md:w-[500px] h-[500px]">

        <Canvas>

          <ambientLight intensity={1.5} />

          <directionalLight position={[2,2,2]} />

          <Sphere args={[1,100,200]} scale={2.4}>
            <meshStandardMaterial
              color="#915EFF"
              wireframe
            />
          </Sphere>

          <OrbitControls enableZoom={false} autoRotate />

        </Canvas>

      </div>

    </section>
  );
}

export default Hero;