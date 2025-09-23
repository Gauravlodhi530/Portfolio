'use client'
import AboutSection from "../Components/AboutSection";
import { HoverExpand_001 } from "@/components/ui/skiper-ui/skiper52";


export default function About() {
  const cards = [
    {
      id: 1,
      image: "about.jpg",
      alt: "Description 1",
    },
    {
      id: 2,
      image: "profile photo.jpg",
      alt: "Description 2",
    },
    {
      id: 1,
      image: "about.jpg",
      alt: "Description 1",
    },
    {
      id: 2,
      image: "profile photo.jpg",
      alt: "Description 2",
    },
    {
      id: 1,
      image: "about.jpg",
      alt: "Description 1",
    },
    {
      id: 2,
      image: "profile photo.jpg",
      alt: "Description 2",
    },
    // Add more cards as needed
  ];

  const skills = [
    { name: "JavaScript", icon: "/javascript .jpg", level: 90 },
    { name: "React Js", icon: "/react_js.png", level: 85 },
    { name: "Node Js", icon: "/node js.png", level: 80 },
    { name: "TypeScript", icon: "/TypeScript.jpg", level: 75 },
    { name: "Python", icon: "/python.jpg", level: 70 },
    { name: "MongoDB", icon: "/mongoDB.png", level: 70 },
  ];

  const images = [
    {
      src: "javascript .jpg",
      alt: "Description 1",
      title: "this is a title ",
    },
    {
      src: "profile photo.jpg",
      alt: "Description 2",
      title: "Event title ",
    },
    {
      src: "javascript .jpg",
      alt: "Description 1",
      title: "vision event ",
    },
    {
      src: "profile photo.jpg",
      alt: "Description 2",
      title: "kldjfkljdklfjlkjfdksljfkljlkdjfdsfd",
    },
    {
      src: "javascript .jpg",
      alt: "Description 1",
      title: "hello ",
    },
    {
      src: "profile photo.jpg",
      alt: "Description 2",
      title: "fjkfjkfkjkjd",
    },

    // ... more images
  ];

  return (
    <section className="m-20 ">
      <div className=" ">
        <h2 className="text-4xl font-bold  mb-6">About me </h2>

        <div>



          {/* <ScrollVelocity velocity={velocity} className="custom-scroll-text">
            <div className="flex flex-nowrap items-center space-x-4">
              {skills.map((skill, index) => (
                <SkillCard
                  index={index}
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                />
              ))}
            </div>
          </ScrollVelocity> */}

          <AboutSection />
          <h1 className="text-4xl font-bold mb-6 text-center m-4">My Work</h1>
          <HoverExpand_001 images={images} className="p-10 " />;
        </div>
      </div>
    </section >
  );
}
