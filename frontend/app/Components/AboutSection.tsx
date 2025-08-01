import React from "react";
import SkillCard from "./SkillCard";
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiUsers, FiCode, FiCoffee } from "react-icons/fi";

const skills = [
  { name: "JavaScript", icon: "/javascript .jpg", level: 90 },
  { name: "React Js", icon: "/react_js.png", level: 85 },
  { name: "Node Js", icon: "/node js.png", level: 80 },
  { name: "TypeScript", icon: "/TypeScript.jpg", level: 75 },
  { name: "Python", icon: "/python.jpg", level: 70 },
];

const AboutSection: React.FC = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-orange-400">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Passionate software engineer with expertise in creating intuitive user experiences 
            and innovative digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Image */}
          <motion.div 
            className="relative animate-fade-in animation-delay-200"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Image */}
              <img
                src="/about.jpg"
                alt="Gaurav Kumar - Software Engineer"
                className="relative rounded-3xl w-full max-w-md mx-auto shadow-2xl border-4 border-gray-700 hover:border-orange-500 transition-all duration-300"
              />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div 
            className="space-y-6 animate-fade-in animation-delay-400"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
  <h3 className="text-2xl font-bold text-white mb-4">
    Software Engineer & UI/UX Designer
  </h3>
  <p className="text-orange-400 text-lg font-medium mb-6">
    Creating Digital Experiences That Matter
  </p>
</div>

<div className="space-y-4 text-gray-300 leading-relaxed">
  <p>
    I'm Gaurav Kumar, a passionate software engineer and creative UI/UX designer, dedicated to building 
    functional and beautiful digital solutions. I specialize in web development, front-end technologies, 
    and user-centered design with a growing passion for AI integration.
  </p>
  <p>
    Though I’m a fresher academically, I’ve already completed 10+ real-world projects — from e-commerce 
    websites to AI tools — and organized 4+ impactful tech events and hackathons that brought hundreds 
    of developers together. I’m also an active contributor to tech communities like Nova Coders.
  </p>
  <p>
    My approach combines clean, scalable code with visually engaging interfaces. I love crafting seamless 
    user experiences, using tools like React.js, Tailwind CSS, Figma, and Next.js — while also exploring 
    emerging tools and APIs like Gemini, DeepSeek, and Hugging Face.
  </p>
  <p>
    I'm a self-learner at heart, currently upskilling through Sheriyans Coding School and hands-on 
    internships. I'm always looking to learn, grow, and solve real-world problems through innovative tech.
  </p>

</div>


            {/* Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <FiCode className="text-orange-400 text-2xl mx-auto mb-2" />
                <div className="text-white font-bold text-xl">50+</div>
                <div className="text-gray-400 text-sm">Projects</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <FiUsers className="text-orange-400 text-2xl mx-auto mb-2" />
                <div className="text-white font-bold text-xl">30+</div>
                <div className="text-gray-400 text-sm">Clients</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <FiAward className="text-orange-400 text-2xl mx-auto mb-2" />
                <div className="text-white font-bold text-xl">5+</div>
                <div className="text-gray-400 text-sm">Years</div>
              </div>
              <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                <FiCoffee className="text-orange-400 text-2xl mx-auto mb-2" />
                <div className="text-white font-bold text-xl">∞</div>
                <div className="text-gray-400 text-sm">Coffee</div>
              </div>
            </div> */}

            {/* CTA Button */}
            <div className="pt-6">
              <a
                href="/Gaurav_Kumar_Resume.pdf"
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="animate-fade-in animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Technical <span className="text-orange-400">Skills</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard 
                key={skill.name} 
                {...skill} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
