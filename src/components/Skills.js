import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiDatabase, HiDesktopComputer, HiShieldCheck } from 'react-icons/hi';
import {
  SiReact,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiSocketdotio,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiAmazonaws,
  SiFigma,
  SiNextdotjs,
  SiExpress,
  SiRedis,
  SiGraphql
} from 'react-icons/si';
import { FaUserLock, FaBug, FaLightbulb, FaUsers, FaChartLine, FaCheckCircle, FaSearch } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: 'Core Technologies',
      icon: HiDesktopComputer,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, level: 95, color: '#F7DF1E' },
        { name: 'Node.js Development', icon: SiNodedotjs, level: 90, color: '#339933' },
        { name: 'Real-time Systems', icon: SiSocketdotio, level: 85, color: '#010101' },
        { name: 'REST API', icon: HiCode, level: 90, color: '#E34F26' },
      ]
    },
    {
      title: 'Database & Architecture',
      icon: HiDatabase,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 85, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 80, color: '#336791' },
        { name: 'MongoDB', icon: SiMongodb, level: 85, color: '#47A248' },
        { name: 'Schema Design', icon: HiDatabase, level: 85, color: '#000000' },
        { name: 'Database Design', icon: HiDatabase, level: 85, color: '#000000' },
      ]
    },
    {
      title: 'Security & Quality',
      icon: FaCheckCircle,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Authentication & Authorization', icon: FaUserLock, level: 90, color: '#FF9900' },
        { name: 'API Security', icon: HiShieldCheck, level: 85, color: '#4285F4' },
        { name: 'Code Review & Refactoring', icon: FaSearch, level: 90, color: '#61DAFB' },
        { name: 'Debugging & Problem Solving', icon: FaBug, level: 95, color: '#F05032' },
        { name: 'Performance Optimization', icon: FaChartLine, level: 85, color: '#00C7B7' },
      ]
    },
    {
      title: 'Professional Skills',
      icon: FaUsers,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Team Work', icon: FaUsers, level: 95, color: '#EA4335' },
        { name: 'Team Leadership', icon: FaUsers, level: 85, color: '#FBBC05' },
        { name: 'Idea Development', icon: FaLightbulb, level: 90, color: '#34A853' },
        { name: 'Usability Testing', icon: FaCheckCircle, level: 80, color: '#4285F4' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary-200 to-transparent rounded-full opacity-30 -translate-y-48 -translate-x-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-secondary-200 to-transparent rounded-full opacity-30 translate-y-48 translate-x-48"></div>

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
            <HiCode className="mr-2" />
            My Skills
          </motion.div>
          <h2 className="section-title text-gray-900 mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
            I work with cutting-edge technologies to build modern, scalable, and efficient solutions.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-white/50"
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mr-4`}>
                  <category.icon className="text-white text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white p-6 rounded-2xl shadow-medium border border-gray-100 card-hover group"
                  >
                    {/* Skill Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-300">
                        <skill.icon
                          size={32}
                          color={skill.color}
                          className="group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h4 className="font-semibold text-gray-900 text-center mb-4">{skill.name}</h4>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Proficiency</span>
                        <span className="text-sm font-semibold text-gray-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.3 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500"
                        />
                      </div>
                    </div>

                    {/* Skill Level Badge */}
                    <div className="mt-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${skill.level >= 90 ? 'bg-green-100 text-green-800' :
                        skill.level >= 80 ? 'bg-blue-100 text-blue-800' :
                          skill.level >= 70 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                        }`}>
                        {skill.level >= 90 ? 'Expert' :
                          skill.level >= 80 ? 'Advanced' :
                            skill.level >= 70 ? 'Intermediate' :
                              'Beginner'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Technology evolves rapidly, and I'm committed to continuous learning. I regularly
              explore new frameworks, attend tech conferences, and contribute to open-source projects
              to stay at the forefront of web development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;