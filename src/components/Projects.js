import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiStar, HiExternalLink } from 'react-icons/hi';


const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const projects = [
    {
      title: 'Appointment Booking Application',
      description: [
        'Developed a backend system for an appointment booking application using Node.js and MongoDB, designed for service-based businesses such as salons, clinics, and local shops.',
        'The application allows business owners (e.g., shopkeepers, doctors, salon owners) to register, manage their profiles, define services, set service durations, and configure their availability schedules.',
        'Users can browse services, book appointments, and receive real-time notifications upon booking. Business owners can accept or reject appointments based on their availability.',
        'The system also supports QR code–based appointment booking, enabling users to scan a QR code shared by the business to quickly schedule an appointment.'
      ],
      image: '🗓️',
      technologies: ['Node.js', 'MongoDB', 'Express', 'Socket.io', 'QR Code'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: true,
      stats: { stars: 85, forks: 20 }
    },
    {
      title: 'BOM Project – Supplier & Seller Management',
      description: [
        'Developed scalable backend modules using Node.js and PostgreSQL to manage customers, suppliers, and administrative roles efficiently.',
        'Implemented role-based access control (RBAC) to ensure secure and controlled operations for different user types. Designed a demand management workflow that allows customers with multiple companies and child suppliers to raise raw material requests and track fulfillment status.',
        'Built and maintained core modules including Item Master, BOM Master, and budget forecasting, enabling effective production planning and demand–supply analysis. Optimized database schemas and queries to support reliable performance and scalability.'
      ],
      image: '🏭',
      technologies: ['Node.js', 'PostgreSQL', 'RBAC', 'Express'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: true,
      stats: { stars: 92, forks: 28 }
    },
    {
      title: 'CMS (Budgeting & Growth System)',
      description: [
        'Developed a financial budgeting and forecasting system using Node.js and PostgreSQL, designed to project next-year growth based on current-year actual data.',
        'Implemented predictive analytics to calculate year-over-year budget growth percentages, supporting strategic financial planning. Designed role-based access control with user-specific screen permissions to ensure secure and compliant access.',
        'Built Motor and Non-Motor modules with version-wise data management, and optimized database performance to efficiently handle large-scale financial datasets with high accuracy and reliability.'
      ],
      image: '📈',
      technologies: ['Node.js', 'PostgreSQL', 'Analytics', 'Data Management'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: false,
      stats: { stars: 76, forks: 15 }
    },
    {
      title: 'E-Commerce Website',
      description: [
        'Developed a full-featured e-commerce backend system with Admin and User roles, enabling smooth product management and order processing.',
        'The Admin can manage products by category, control product listings, and accept or reject orders. The system allows users to browse products, place orders, and complete secure payments through an integrated payment gateway.',
        'Additional features include product ratings and reviews, order status tracking, and secure authentication & authorization for both admin and users. The backend was designed to ensure scalability, data security, and efficient order management.'
      ],
      image: '🛍️',
      technologies: ['Node.js', 'Authentication', 'Payment Gateway', 'Order Mgmt'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: false,
      stats: { stars: 105, forks: 40 }
    },
    {
      title: 'Business Banner & Offer Management',
      description: [
        'Designed and developed a backend system for managing business registrations, promotional banners, and offers, with clearly defined Admin and Business Owner roles.',
        'Business Owners can register on the platform and submit requests to add shop or business banners, selecting the appropriate banner category. These banner requests are sent to the Admin for approval.',
        'The system supports category-wise banner management, allowing users to view banners and offers based on a selected category. It also supports discount-based promotional banners.',
        'Businesses opting for a premium plan can have their banners displayed prominently on the main homepage. Admin has the authority to block or unblock businesses manually when required.',
        'Additionally, the admin can add businesses directly, manage business statuses, and oversee all platform activities. The primary goal is to showcase all active business offers to users.'
      ],
      image: '🏷️',
      technologies: ['Backend Architecture', 'Admin Panel', 'Content Management'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: false,
      stats: { stars: 60, forks: 12 }
    },
    {
      title: 'Mindful-AI – AI Audio Generation',
      description: [
        'Developed Mindful-AI, an AI-powered application that generates relaxing audio content based on user-selected topics. Users can enter a topic of their choice, after which the system dynamically generates a structured OpenAI prompt tailored to that topic.',
        'This prompt is used to create calming and meaningful scripted audio content. Users can also select background music or ambient sounds to match their mood (e.g., nature, meditation, focus, sleep).',
        'The final relaxation audio is generated using ElevenLabs AI, combining the generated script with the selected background audio to produce a soothing listening experience.'
      ],
      image: '🧘‍♂️',
      technologies: ['OpenAI API', 'ElevenLabs', 'React', 'Node.js', 'Audio Processing'],
      liveUrl: '#',
      codeUrl: '#',
      category: 'Backend',
      featured: false,
      stats: { stars: 45, forks: 10 }
    },
    {
      title: 'Tulsi Visa Abroad',
      description: [
        'A comprehensive visa consultancy platform designed to assist students and travelers.',
        'Provides services for student visas, job visas, tourist visas, and passport documentation.',
        'Simplifies the study abroad process with expert guidance and streamlined documentation support.'
      ],
      image: '✈️',
      technologies: ['React', 'Tailwind CSS', 'Frontend Development'],
      liveUrl: 'https://tulsi-visa.onrender.com/',
      codeUrl: '#',
      category: 'Personal',
      featured: false,
      stats: { stars: 30, forks: 5 }
    },
    {
      title: 'CricTrack',
      description: [
        'A dynamic cricket management system for scoring and tournament organization.',
        'Features live match scoring, player statistics tracking, and team management.',
        'Provides a seamless experience for cricket enthusiasts to manage and view match details.'
      ],
      image: '🏏',
      technologies: ['React', 'Vite', 'Node.js', 'Sports Tech'],
      liveUrl: 'https://crictrack-fe.onrender.com/',
      codeUrl: '#',
      category: 'Personal',
      featured: false,
      stats: { stars: 40, forks: 8 }
    },
    {
      title: 'Moon Cafe',
      description: [
        'A modern digital solution for cafe management and ordering.',
        'Allows customers to browse the menu, place orders, and explore cafe offerings.',
        'Designed with a focus on user experience to enhance the dining and ordering process.'
      ],
      image: '☕',
      technologies: ['React', 'Context API', 'UI/UX Design'],
      liveUrl: 'https://cafe-fe-15bc.onrender.com/',
      codeUrl: '#',
      category: 'Personal',
      featured: false,
      stats: { stars: 25, forks: 4 }
    },
    {
      title: 'Selection – Clothing Rental & Booking Management System',
      description: [
        'Developed Selection, a clothing rental booking platform that allows users to rent ethnic and formal wear such as blazers, Jodhpuri, Indo-Western outfits, and more.',
        'The platform supports Admin and User roles. The Admin can add and manage categories and clothing collections, handle booking requests, and accept or decline bookings submitted by users.',
        'Admins can also track the complete order lifecycle, including deposit collection, payment status, order delivery, and return confirmation. This ensures full visibility and control over each rental order.',
        'Users can browse available collections, submit rental booking requests, and track the status of their bookings. The system is designed to simplify the rental workflow while ensuring transparency and smooth coordination between users and administrators.'
      ],
      image: '👗',
      technologies: ['React', 'Node.js', 'MongoDB', 'Admin Panel'],
      liveUrl: 'https://selection-fe.onrender.com/',
      codeUrl: '#',
      category: 'Personal',
      featured: false,
      stats: { stars: 35, forks: 6 }
    }
  ];

  const categories = ['All', 'Backend', 'Personal'];
  const [activeCategory, setActiveCategory] = React.useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary-100 to-transparent rounded-full opacity-50 -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-secondary-100 to-transparent rounded-full opacity-50 translate-y-48 -translate-x-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-4"
          >
            <HiCode className="mr-2" />
            My Work
          </motion.div>
          <h2 className="section-title text-gray-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary-600 text-white shadow-glow'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-6 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              layout
              whileHover={{ y: -10 }}
              className={`bg-white rounded-2xl shadow-soft overflow-hidden card-hover group relative md:col-span-3`}
            >
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <HiStar className="text-xs" />
                    Featured
                  </div>
                </div>
              )}

              <div className={`bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'
                }`}>
                <div className="text-6xl lg:text-8xl opacity-80">
                  {project.image}
                </div>

              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium">
                    {project.category}
                  </span>
                </div>

                <div className="mb-4 space-y-3">
                  {project.description.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>


                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                    >
                      <HiExternalLink />
                      Live Demo
                    </a>
                  )}
                  {project.codeUrl !== '#' && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <HiCode />
                      Code
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;