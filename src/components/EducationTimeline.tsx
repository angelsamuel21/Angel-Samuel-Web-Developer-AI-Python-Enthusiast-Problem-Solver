import React from 'react'
import { motion } from 'framer-motion'

type EduItem = {
  years: string
  qualification: string
  institution: string
  highlights: string
}

const timelineData: EduItem[] = [
  {
    years: '2024 – Present',
    qualification: 'Bachelor of Computer Science',
    institution: 'Invertis University, Bareilly',
    highlights:
      'Completed first year with strong foundation in Python, web development, and data science fundamentals. Currently exploring machine learning, AI, and full-stack development.',
  },
  {
    years: '2023 – 2024',
    qualification: 'Higher Secondary Education (12th Grade)',
    institution: 'BRB Model School, Budaun',
    highlights:
      'Focused on science and mathematics. Developed logical thinking and early interest in technology.',
  },
  {
    years: '2021 – 2022',
    qualification: 'Secondary Education (10th Grade)',
    institution: 'BRB Model School, Budaun',
    highlights: 'Built strong academic foundation and curiosity for computers and innovation.',
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const EducationTimeline: React.FC = () => {
  return (
    <section aria-labelledby="education-heading" className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 id="education-heading" className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-600">
            Education
          </h3>
          <p className="mt-2 text-sm text-gray-400 max-w-2xl mx-auto">A concise timeline of formal education and highlights.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <ol className="relative border-l border-gray-700/50">
            {timelineData.map((item, idx) => (
              <motion.li
                key={idx}
                className="mb-10 ml-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={itemVariants}
              >
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary-500 ring-4 ring-gray-900">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </span>

                <time className="text-sm font-medium text-gray-400">{item.years}</time>

                <div className="mt-2 p-4 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/60 shadow-card-lg">
                  <h4 className="text-lg font-semibold text-white">
                    {item.qualification}
                    <span className="text-sm text-gray-400 font-medium"> {' '}— {item.institution}</span>
                  </h4>
                  <p className="mt-2 text-sm text-gray-300 leading-relaxed">{item.highlights}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default EducationTimeline
