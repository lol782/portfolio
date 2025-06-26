'use client';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Handwritten Digit Recognition",
      description: "Built a CNN classifier using TensorFlow and Keras achieving 98% accuracy on MNIST dataset with advanced data preprocessing and model optimization.",
      tags: ["TensorFlow", "Keras", "CNN", "Python"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Machine Learning"
    },
    {
      id: 2,
      title: "Real-time Fire Detection System",
      description: "Developed an intelligent fire detection system using YOLOv5, fine-tuned on custom dataset, deployed on standard cameras for real-time monitoring.",
      tags: ["YOLOv5", "Computer Vision", "PyTorch", "Real-time"],
      image: "https://images.pexels.com/photos/266487/pexels-photo-266487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Computer Vision"
    },
    {
      id: 3,
      title: "Virtual Scene Generator",
      description: "Built a frontend interface for generating virtual reality scenes using weather-based prompts and a fine-tuned Flux Lite model for immersive experiences.",
      tags: ["React", "AI Generation", "VR", "Frontend"],
      image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "AI/VR"
    },
    {
      id: 4,
      title: "Cloud-based Data Analytics Platform",
      description: "Designed and implemented a scalable data analytics platform on Google Cloud Platform with real-time processing capabilities and interactive dashboards.",
      tags: ["GCP", "Data Analytics", "Cloud Architecture", "BigQuery"],
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Cloud Computing"
    },
    {
      id: 5,
      title: "Intelligent Web Application",
      description: "Full-stack web application with integrated ML models for predictive analytics, built with modern frameworks and deployed on cloud infrastructure.",
      tags: ["React", "Node.js", "Machine Learning", "MySQL"],
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Full-Stack"
    },
    {
      id: 6,
      title: "Computer Vision Research Project",
      description: "Advanced computer vision project implementing state-of-the-art algorithms for object detection and classification with custom neural network architectures.",
      tags: ["OpenCV", "Deep Learning", "Research", "Python"],
      image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Research"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800">Featured Projects</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore my portfolio of AI/ML projects, full-stack applications, and innovative solutions 
          that demonstrate expertise in cutting-edge technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 text-sm font-medium">
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-300 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;