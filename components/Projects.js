// Projects section content
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "3D Product Configurator",
      description: "Interactive 3D product visualization tool with customization options",
      tags: ["Three.js", "React", "WebGL"],
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      title: "Immersive Virtual Gallery",
      description: "Virtual art exhibition with interactive elements and spatial audio",
      tags: ["WebGL", "Spatial Audio", "React"],
      image: "https://images.pexels.com/photos/9667716/pexels-photo-9667716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      title: "Automotive Showcase",
      description: "High-fidelity 3D car models with interactive features and animations",
      tags: ["Three.js", "GSAP", "Next.js"],
      image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 4,
      title: "Interactive Data Visualization",
      description: "3D visualization of complex datasets with interactive exploration",
      tags: ["D3.js", "Three.js", "Data Viz"],
      image: "https://images.pexels.com/photos/5801253/pexels-photo-5801253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Explore my latest work featuring interactive 3D experiences and immersive web applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

// Project card component
const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-[1.02]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
      
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 text-sm">
            View Project
          </button>
          <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black rounded-lg transition-colors duration-300 text-sm">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;