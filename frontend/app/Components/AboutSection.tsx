import React from "react";
import SkillCard from "./SkillCard";


const skills = [
  { name: "JavaScript", icon: "javascript .jpg" },
  { name: "React Js", icon: "react_js.png" },
  { name: "Node Js", icon: "node js.png" },
  { name: "TypeScript", icon: "TypeScript.jpg" },
  { name: "Python", icon: "python.jpg" },
];

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-semibold">About Me</h2>

      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10  ">

        {/* Profile Image */}
        <div className="flex-shrink-0 shadow-xl/20 rounded-3xl  ">
          <img
            src="about.jpg"
            alt="Profile"
            className="rounded-3xl max-w-xs "
          />
        </div>

        {/* Text Section */}
        <div className="flex-1  p-5 py-7 ">
          <p className="text-orange-400 mb-4 ">
            User Interface And User Experience And Also Video Editing
          </p>
          <p className="text-gray-300 mb-6 ">
            A software engineer... passionate about creating intuitive and engaging user experiences. With a strong background in UI/UX design and video editing, I strive to bring ideas to life through innovative solutions. My goal is to enhance user satisfaction by delivering visually appealing and functional designs.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos pariatur similique sit laborum. Hic ut nemo molestias officiis accusamus commodi nobis natus laborum, officia quo ipsum maiores quam sed quasi eaque repudiandae. Doloremque, repudiandae illum. Facilis, sed. Commodi excepturi quas quis autem aspernatur explicabo esse hic ipsum necessitatibus quam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate quos quis harum atque at nemo deleniti ullam ratione accusantium quisquam?
          </p>

          <a
            href="/assets/Gaurav_CV.pdf"
            download
            className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded transition duration-300 shadow-lg shadow-orange-500/50"
          >
            📄 Download CV
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mt-15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
