import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Code, Coffee, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const techStack = [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion'
  ]

  return (
  <footer className="bg-gradient-to-t from-[#070916] to-black border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold bg-clip-text text-transparent mb-4 bg-gradient-to-r from-primary-500 to-primary-600">
              Angel Samuel
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-md">
              Full-stack developer passionate about creating exceptional digital experiences 
              and solving complex problems with clean, efficient code.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Code className="w-4 h-4" />
                <span>Clean Code</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Coffee className="w-4 h-4" />
                <span>Always Learning</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: "#60A5FA" }}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Technology */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-gray-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© {currentYear} Angel Samuel. All rights reserved.</span>
            </motion.div>

            {/* Made with love */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-3 text-gray-400 text-sm"
            >
              <span className="flex items-center gap-1">
                Made with
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ['#9CA3AF', '#EF4444', '#9CA3AF']
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </motion.span>
                and
              </span>
              <span className="flex items-center gap-1">
                <Coffee className="w-4 h-4" />
                using React + Tailwind
              </span>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg border border-gray-700/50 transition-all duration-300 text-sm"
              >
                <Mail className="w-4 h-4" />
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Attribution */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pb-8 text-center"
        >
          <p className="text-xs text-gray-600">
            Designed and developed with attention to detail and user experience.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer