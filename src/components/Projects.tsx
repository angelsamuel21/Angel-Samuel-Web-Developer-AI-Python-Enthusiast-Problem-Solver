import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

interface Project {
  id: string
  title: string
  description: string
  image?: string
  url?: string
  github?: string
  technologies: string[]
  category: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 'p1',
    title: 'EduPath – Smart Career & College Guidance',
    description: 'A digital platform helping students discover the right career path, course, and college across Jammu & Kashmir. Features smart filtering, personalized recommendations, and data-driven insights.',
    url: 'https://cwedupath.vercel.app/',
    github: 'https://github.com/angelsamuel21/EduPath',
    technologies: ['React', 'JavaScript', 'CSS3', 'Firebase', 'Node.js'],
    category: 'Web Application',
    featured: true
  },
  {
    id: 'p2',
    title: 'NoteVerse – AI-Powered Note-Taking App',
    description: 'Smart web app for creating, organizing, and summarizing notes with AI assistance. Features auto-summarization, smart tags, instant search, and export capabilities.',
    url: 'https://noteverse.in/',
    github: 'https://github.com/angelsamuel21/NoteVerse',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'OpenAI API', 'Node.js'],
    category: 'AI/ML',
    featured: true
  },
  {
    id: 'p3',
    title: 'TayyariExpress – Exam Prep Platform',
    description: 'Comprehensive platform for exam preparation with past year questions, study notes, and mock tests. Helps students study smarter with organized resources.',
    url: 'https://tayyariexpress.vercel.app/',
    github: 'https://github.com/angelsamuel21/TayyariExpress',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'Express'],
    category: 'Education',
    featured: true
  },
  {
    id: 'p4',
    title: 'Smart Python Chatbot',
    description: 'Intelligent Python-based chatbot with multiple functionalities including math solving, Wikipedia summaries, QR code generation, and motivational quotes.',
    url: 'https://github.com/angelsamuel21/Smart-Python-Chatbot',
    github: 'https://github.com/angelsamuel21/Smart-Python-Chatbot',
    technologies: ['Python', 'wikipedia-api', 'qrcode', 'datetime'],
    category: 'AI/ML',
    featured: false
  },
  {
    id: 'p5',
    title: 'TextUtils – Text Manipulation Tool',
    description: 'Lightweight web application for text analysis and manipulation. Features case conversion, word counting, space removal, and real-time text processing.',
    url: 'https://textutilscwa.netlify.app/',
    github: 'https://github.com/angelsamuel21/TextUtils',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    category: 'Web Application',
    featured: false
  },
  {
    id: 'p6',
    title: 'MyTodosList – Task Management App',
    description: 'Responsive React-based To-Do List application for efficient task management. Features add/edit/delete tasks, completion tracking, and dynamic UI updates.',
    url: 'https://todolistcwa.netlify.app/',
    github: 'https://github.com/angelsamuel21/MyTodosList',
    technologies: ['React', 'CSS3', 'JavaScript', 'React Hooks'],
    category: 'Web Application',
    featured: false
  },
]

const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState('All')

  const categories = ['All', ...new Set(projects.map(p => p.category))]

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 px-4"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">{project.title.split('–')[0]}</div>
                    <div className="text-sm opacity-75">{project.title.split('–')[1]}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    project.featured 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-medium rounded-full border border-yellow-500/30">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-md border border-gray-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors flex-1 justify-center"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Live Demo
                  </motion.a>
                  
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm font-medium rounded-lg transition-colors flex-1 justify-center"
                  >
                    <FaGithub />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/angelsamuel21"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white rounded-xl font-semibold transition-all duration-300"
          >
            <FaGithub className="text-lg" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects