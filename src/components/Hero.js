import React from 'react';
import { motion } from 'framer-motion';
import { HiDownload } from 'react-icons/hi';

const Typewriter = ({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000 }) => {
  const [index, setIndex] = React.useState(0);
  const [subIndex, setSubIndex] = React.useState(0);
  const [reverse, setReverse] = React.useState(false);
  const [blink, setBlink] = React.useState(true);

  // Blinking cursor
  React.useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  React.useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), pauseTime);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="gradient-text">
      {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
    </span>
  );
};

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-white relative overflow-hidden py-20 lg:py-0">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-50/50 blur-3xl -z-10"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-purple-50/50 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Content */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full text-blue-600 text-sm font-medium mx-auto lg:mx-0">
              <span>👋</span>
              <span>Welcome to my portfolio</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-blue-600">Meet</span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-gray-700 flex items-center justify-center lg:justify-start gap-2">
              <Typewriter
                words={[
                  "JavaScript",
                  "Node.js Development",
                  "AI & OpenAI Integration",
                  "Authentication & Authorization",
                  "MySQL",
                  "PostgreSQL",
                  "MongoDB",
                  "Real-time Systems",
                  "Schema Design",
                  "Database Design",
                  "REST API",
                  "API Security",
                  "Code Review and Refactoring",
                  "Usability Testing",
                  "Performance Optimization",
                  "Idea Development",
                  "Debugging and Problem Solving",
                  "Teamwork",
                  "Team Leadership"
                ]}
                typingSpeed={70}
                deletingSpeed={40}
                pauseTime={2000}
              />
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Backend Developer with 3 years of experience in building secure and scalable applications using Node.js
              and JavaScript. Skilled in REST APIs, authentication & authorization, API security, and database design with MySQL,
              PostgreSQL, and MongoDB, along with experience in real-time systems, performance optimization, and team collaboration.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
              <motion.a
                href="/MeetKathiriya.pdf"
                download="Meet_Kathiriya_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-3 text-base px-8 py-4 shadow-glow"
              >
                <HiDownload className="text-lg" />
                Download Resume
              </motion.a>
              <button className="px-8 py-3.5 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-all transform hover:-translate-y-1">
                View Projects
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 md:gap-16 pt-8 border-t border-gray-100 mt-8">
              <div>
                <h4 className="text-3xl font-bold text-blue-600">3</h4>
                <p className="text-gray-600 font-medium">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-blue-600">8+</h4>
                <p className="text-gray-600 font-medium">Projects</p>
              </div>
              {/* <div>
                <h4 className="text-3xl font-bold text-blue-600">15+</h4>
                <p className="text-gray-600 font-medium">Technologies</p>
              </div> */}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gray-100">
                <img
                  src="/Screenshot_3.png"
                  alt="Meet kathiriya"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div >
    </section >
  );
};

export default Hero;