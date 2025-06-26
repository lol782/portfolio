// About section content
const About = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-400">John Doe</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-gray-300">
          Creative Developer & Designer
        </h2>
        <p className="text-lg text-gray-300 max-w-md">
          I specialize in creating immersive web experiences using cutting-edge technologies.
          With expertise in 3D graphics, animation, and interactive design, I build memorable
          digital journeys that engage and inspire.
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
            View Projects
          </button>
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-lg transition-colors duration-300">
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="relative p-4">
        <div className="relative z-10 backdrop-blur-sm bg-white/10 p-6 rounded-lg border border-white/20">
          <h3 className="text-xl font-semibold mb-4">Skills & Expertise</h3>
          <div className="grid grid-cols-2 gap-4">
            <SkillBar skill="Three.js" percentage={90} />
            <SkillBar skill="React" percentage={85} />
            <SkillBar skill="WebGL" percentage={75} />
            <SkillBar skill="GSAP" percentage={80} />
            <SkillBar skill="UI/UX" percentage={85} />
            <SkillBar skill="3D Modeling" percentage={70} />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl"></div>
      </div>
    </div>
  );
};

// Skill bar component
const SkillBar = ({ skill, percentage }) => {
  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="h-2 bg-white/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-400 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default About;