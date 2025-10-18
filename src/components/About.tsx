import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Brain, TrendingUp, Puzzle, BookOpen, Zap } from 'lucide-react'
import EducationTimeline from './EducationTimeline'

interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'ml-ai' | 'tools' | 'soft-skills'
  proficiency: number
}

const skills: Skill[] = [
  // Frontend
  { name: 'React.js', category: 'frontend', proficiency: 90 },
  { name: 'TypeScript', category: 'frontend', proficiency: 85 },
  { name: 'Tailwind CSS', category: 'frontend', proficiency: 88 },
  { name: 'Framer Motion', category: 'frontend', proficiency: 82 },
  { name: 'Vite', category: 'frontend', proficiency: 80 },
  
  // Backend
  { name: 'Node.js', category: 'backend', proficiency: 80 },
  { name: 'Express', category: 'backend', proficiency: 78 },
  { name: 'MongoDB', category: 'backend', proficiency: 75 },
  { name: 'REST APIs', category: 'backend', proficiency: 85 },
  { name: 'Flask/Django', category: 'backend', proficiency: 70 },
  
  // ML & AI
  { name: 'Python', category: 'ml-ai', proficiency: 88 },
  { name: 'scikit-learn', category: 'ml-ai', proficiency: 75 },
  { name: 'Data Analysis', category: 'ml-ai', proficiency: 80 },
  { name: 'ML Deployment', category: 'ml-ai', proficiency: 70 },
  
  // Tools
  { name: 'Git/GitHub', category: 'tools', proficiency: 85 },
  { name: 'Problem Solving', category: 'tools', proficiency: 90 },
  { name: 'OOP Python', category: 'tools', proficiency: 85 },
  
  // Soft Skills
  { name: 'Communication', category: 'soft-skills', proficiency: 88 },
  { name: 'Analytical Thinking', category: 'soft-skills', proficiency: 90 },
  { name: 'Creativity', category: 'soft-skills', proficiency: 85 },
  { name: 'Persistence', category: 'soft-skills', proficiency: 92 },
]

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (proficiency: number) => ({
      width: `${proficiency}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const categoryIcons = {
    frontend: "💻",
    backend: "⚙️",
    "ml-ai": "🧠",
    tools: "🛠️",
    "soft-skills": "🌟"
  }

  const categoryTitles = {
    frontend: "Frontend Development",
    backend: "Backend & Full Stack",
    "ml-ai": "Machine Learning & AI",
    tools: "Tools & Problem Solving",
    "soft-skills": "Soft Skills"
  }

  const interests = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Exploring intelligent systems and data-driven solutions"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Financial Technology",
      description: "Applying tech to solve complex financial challenges"
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Complex Problem Solving",
      description: "Tackling challenging puzzles and algorithmic problems"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always expanding my knowledge across multiple domains"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Prototyping",
      description: "Quickly turning ideas into functional prototypes"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - About Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
            >
              Hey there! I'm <span className="text-blue-400 font-semibold">Angel Samuel</span>, 
              a curious developer who believes in being a{" "}
              <span className="text-purple-400 font-medium">"jack of many trades, mastering one at a time"</span>.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              My journey spans across web development, artificial intelligence, and financial technology. 
              I thrive on connecting dots between different domains and applying diverse knowledge to 
              solve complex problems in innovative ways.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-400 leading-relaxed"
            >
              While I enjoy exploring multiple technologies, I believe in deep, focused learning—mastering 
              one skill before moving to the next. This approach allows me to build robust, well-architected 
              solutions while maintaining a broad perspective.
            </motion.p>

            {/* Personal Qualities */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mt-8"
            >
              {[
                "🎯 Focused Learner",
                "💡 Cross-Domain Thinker", 
                "🔍 Analytical Mindset",
                "🚀 Quick Adapter",
                "🎨 Creative Problem Solver",
                "📚 Knowledge Integrator"
              ].map((trait) => (
                <motion.div
                  key={trait}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-full text-gray-300 text-sm font-medium backdrop-blur-sm"
                >
                  {trait}
                </motion.div>
              ))}
            </motion.div>

            {/* Career Highlights removed - kept Education Timeline below */}

            {/* Education Timeline (component) */}
            <div className="mt-8">
              <EducationTimeline />
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Technologies</h3>
            
            <div className="space-y-6">
              {Object.entries(
                    skills.reduce((acc, skill) => {
                      if (!acc[skill.category]) acc[skill.category] = []
                      acc[skill.category].push(skill)
                      return acc
                    }, {} as Record<string, Skill[]>)
                  ).map(([category, categorySkills]) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                  <div className="flex items-center gap-2 text-gray-300 font-medium">
                    <span className="text-lg">{categoryIcons[category as keyof typeof categoryIcons]}</span>
                    <span className="capitalize">{categoryTitles[category as keyof typeof categoryTitles]}</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.02 }}
                        className="group relative p-3 sm:p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-200 text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-blue-400 text-xs font-bold">
                            {skill.proficiency}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-gray-700/50 rounded-full h-2">
                          <motion.div
                            custom={skill.proficiency}
                            variants={progressVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">My Focus Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">{interest.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700/50">
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 italic mb-4"
            >
              "The jack of all trades is often better than the master of one. While mastery is the goal, 
              versatility is the superpower that allows innovation across boundaries."
            </motion.blockquote>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="text-gray-400 text-lg"
            >
              — My approach to technology and learning
            </motion.p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-20 pt-12 border-t border-gray-800"
        >
          {[
            { number: "20+", label: "Projects Completed" },
            { number: "10+", label: "Technologies" },
            { number: "4+", label: "Domains Explored" },
            { number: "∞", label: "Learning Journey" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-gray-800/30 backdrop-blur-sm border border-gray-700/50"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-xs sm:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About