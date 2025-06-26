'use client';

const Contact = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Interested in collaborating on AI/ML projects or discussing innovative solutions? 
            Let's connect and bring your ideas to life with cutting-edge technology.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Email</p>
              <p className="text-gray-600">rahulkoranga30@gmail.com</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">LinkedIn</p>
              <p className="text-gray-600">Connect with me professionally</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 group">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
            <div>
              <p className="text-gray-800 font-medium">GitHub</p>
              <p className="text-gray-600">View my code repositories</p>
            </div>
          </div>
        </div>
        
        <div className="pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Certifications</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">Google Cloud Platform (GCP) Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-600">NPTEL ELITE Certification in GCP</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl blur-xl"></div>
        <div className="relative z-10 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your Name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Project Discussion"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell me about your project or idea..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;