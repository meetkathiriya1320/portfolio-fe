import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload, HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaServer, FaDatabase, FaShieldAlt, FaCode } from 'react-icons/fa';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const services = [
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Building robust, scalable, and secure server-side applications using Node.js and Express.',
      color: 'bg-blue-500'
    },
    {
      icon: FaDatabase,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries for MySQL, PostgreSQL, and MongoDB.',
      color: 'bg-green-500'
    },
    {
      icon: FaCode,
      title: 'API Development',
      description: 'Creating RESTful APIs with comprehensive documentation and secure authentication.',
      color: 'bg-purple-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Performance & Security',
      description: 'Optimizing application performance and implementing best security practices.',
      color: 'bg-orange-500'
    }
  ];

  const personalInfo = [
    { label: 'Name', value: 'Meet Kathiriya' },
    { label: 'Experience', value: '2.5+ Years' },
    { label: 'Location', value: 'Surat, Gujarat' },
    { label: 'Email', value: 'meet.kathiriya1320@gmail.com' },
    { label: 'Phone', value: '+91 88669 99103' },
    { label: 'Freelance', value: 'Available' }
  ];

  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <HiLocationMarker className="mr-2" />
            About Me
          </motion.div>
          <h2 className="section-title text-gray-900 mb-6">
            Passionate About <span className="gradient-text">Creating</span>
          </h2>
          <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
            I'm a dedicated full-stack developer with a passion for creating digital solutions
            that make a difference. Let me tell you my story.
          </p>
        </motion.div>

        <div className="flex justify-center items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 max-w-4xl mx-auto text-center"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 flex justify-center items-center gap-3">
                <span className="text-4xl">👨‍💻</span> Backend Developer & Designer
              </h3>

              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  I’m a passionate Backend Developer with over 2.5 years of experience
                  building robust and scalable server-side applications. I specialize in Node.js, JavaScript,
                  and backend architecture to design secure, high-performance systems that power modern web applications.
                </p>
                <p>
                  My journey started with a curiosity about how backend systems work, and it has
                  evolved into a strong passion for building scalable, secure, and efficient
                  server-side solutions that power real-world applications.
                </p>
                <p>
                  When I'm not coding, you can find me exploring backend technologies, improving
                  system performance, contributing to open-source projects, or sharing knowledge
                  with the developer community.
                </p>

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-gray-900 text-sm mb-1 uppercase tracking-wider">{info.label}</h4>
                  <p className="text-gray-700 font-medium">{info.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-6"
            >
              <motion.a
                href="/MeetKathiriya.pdf"
                download="Meet_Kathiriya_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center gap-2 px-8 py-3"
              >
                <HiDownload className="text-xl" />
                Download CV
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-secondary flex items-center justify-center gap-2 px-8 py-3 bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50"
              >
                <HiMail className="text-xl" />
                Let's Talk
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What I <span className="gradient-text">Offer</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I provide end-to-end solutions for your digital needs, from concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-2xl shadow-soft border border-gray-100 card-hover group"
              >
                <div className={`w-12 h-12 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white text-xl" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;