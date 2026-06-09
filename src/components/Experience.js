import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiBriefcase, HiCalendar, HiLocationMarker, HiTrendingUp, HiUsers, HiCode } from 'react-icons/hi';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      duration: '2+ years',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.',
      achievements: [
        'Led a team of 5 developers in building a microservices architecture',
        'Improved application performance by 40% through optimization',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored 3 junior developers who were promoted within 6 months'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'TypeScript', 'Docker'],
      companyLogo: '🏢',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'Mumbai, India',
      period: '2021 - 2022',
      duration: '1 year',
      type: 'Full-time',
      description: 'Developed and maintained multiple client projects, focusing on responsive design and performance optimization. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Delivered 15+ client projects with 100% on-time completion',
        'Increased client satisfaction scores by 25%',
        'Reduced page load times by 50% across all projects',
        'Established coding standards adopted company-wide'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Tailwind CSS', 'Git'],
      companyLogo: '🎨',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Backend Developer',
      company: 'StartUp Ventures',
      location: 'Bangalore, India',
      period: '2020 - 2021',
      duration: '1 year',
      type: 'Full-time',
      description: 'Built interactive user interfaces for web applications. Worked closely with UX designers to create engaging user experiences and implemented responsive designs.',
      achievements: [
        'Developed responsive UI components used across 10+ products',
        'Improved user engagement by 35% through UX improvements',
        'Reduced development time by 30% with reusable component library',
        'Collaborated with cross-functional teams of 20+ members'
      ],
      technologies: ['JavaScript', 'React', 'CSS3', 'HTML5', 'Git', 'Figma'],
      companyLogo: '🚀',
      color: 'from-green-500 to-green-600'
    }
  ];

  const stats = [
    { icon: HiCode, label: 'Projects Completed', value: '8+' },
    { icon: HiBriefcase, label: 'Years Experience', value: '3' }
  ];

  return (
    <section id="experience" className="section-padding bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4"
          >
            <HiBriefcase className="mr-2" />
            My Journey
          </motion.div>
          <h2 className="section-title text-gray-900 mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
            My professional journey and the experiences that shaped my career in software development.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-white/50 text-center card-hover"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white text-xl" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
              className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-primary-500 shadow-lg z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              </div>

              {/* Content */}
              <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'} ml-16 lg:ml-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-white/50 card-hover"
                >
                  {/* Company Logo & Period */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-2xl flex items-center justify-center text-2xl shadow-medium`}>
                      {exp.companyLogo}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-gray-500 text-sm mb-1">
                        <HiCalendar className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="text-xs text-gray-400">{exp.duration} • {exp.type}</div>
                    </div>
                  </div>

                  {/* Job Title & Company */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-primary-600 mb-2">{exp.company}</h4>
                    <div className="flex items-center text-gray-500 text-sm">
                      <HiLocationMarker className="mr-1" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-3">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects.
              Let's connect and see how we can create something amazing together.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary inline-flex items-center gap-2"
            >
              <HiBriefcase />
              Let's Discuss Opportunities
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;