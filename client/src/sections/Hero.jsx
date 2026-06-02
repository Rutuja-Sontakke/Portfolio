import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";

function Hero() {

  return (
    <section id="home"
      className="
      min-h-screen
      flex
      flex-col-reverse
      md:flex-row
      items-center
      justify-center
      px-6
      md:px-16
      py-20
      gap-10
    "
    >

      <div className="flex-1">

        <motion.h1
          initial={{opacity:0,y:50}}
          animate={{opacity:1,y:0}}
          transition={{duration:1}}
          className="
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    font-bold
                    leading-tight
                    text-center
                    md:text-left
                    "
        >
          Hi, I'm <br />

          <span className="gradient-text">
            Rutuja Sontakke
          </span>

        </motion.h1>

        <p className="
                    mt-6
                    text-base
                    sm:text-lg
                    md:text-xl
                    text-gray-300
                    max-w-xl
                    text-center
                    md:text-left
                    ">
          Full Stack Developer skilled in MERN Stack,
          PHP, ReactJS, NodeJS and scalable web applications.
        </p>

        <div
  className="
  flex
  flex-row
  gap-4
  mt-8
  justify-center
  md:justify-start
"
>

  {/* Hire Me Button */}

  <a href="#contact">

    <button className="
bg-purple-600
w-36
sm:w-40
py-3
rounded-xl
hover:scale-105
transition
">

      Hire Me

    </button>

  </a>

  {/* Download CV Button */}

  <a
    href="/resume.pdf"
    download
  >

    <button className="
border
border-purple-500
w-36
sm:w-40
py-3
rounded-xl
hover:bg-purple-500
transition
">

      Download CV

    </button>

  </a>

</div>

      </div>

      <div
  className="
  w-full
  h-[280px]
  sm:h-[350px]
  md:h-[500px]
  md:w-[500px]
"
>

        <Canvas>

          <ambientLight intensity={1.5} />

          <directionalLight position={[2,2,2]} />

          <Sphere args={[1,64,64]} scale={1.8}>
            <meshStandardMaterial
              color="#915EFF"
              metalness={0.7}
              roughness={0.2}
            />
          </Sphere>

          <OrbitControls
            enableZoom={false}
            autoRotate
            autoRotateSpeed={2}
            enablePan={false}
          />

        </Canvas>

      </div>

    </section>
  );
}

export default Hero;