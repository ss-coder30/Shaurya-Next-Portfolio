"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/image";
import TabButton from "./TabButton";

const tabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>C++</li>
        <li>HTML | CSS | JavaScript</li>
        <li>GitHub</li>
        <li>Linux</li>
        <li>Node JS</li>
        <li>Express JS</li>
        <li>React JS</li>
        <li>Bootstrap</li>
        <li>Tailwind CSS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BTech CSE - IIIT Sonepat: 8.5 CGPA</li>
        <li>JEE Mains - 97.77 percentile</li>
        <li>CBSE 12th - DPSG: 96.6%</li>
        <li>CBSE 10th - DPSG: 97.6%</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Certificate of Excellence - Introduction to C++ (Coding Ninjas)</li>
        <li>Certificate of Completion - Full Stack Web Development (Udemy)</li>
        <li>Certificate of Completion - Linux (Cisco Networking Academy)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id='about'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/R-removebg-preview.png" width={400} height={400} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Passionate about software engineering, I am Shaurya Srivastava, a
            recent Computer Science graduate from IIIT Sonepat. Proficient in
            C++, HTML, CSS, JavaScript, and frameworks like Node.js and
            Express.js, I am eager to contribute to innovative projects.
            Alongside my academic background, I have pursued personal projects
            and coding competitions to enhance my skills and problem-solving
            abilities. As a quick learner, I am always seeking new challenges
            and opportunities to grow.
          </p>

          {/* tab buttons */}
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {""}Skills{""}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {""}Education{""}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {""}Certifications{""}
            </TabButton>
          </div>

          <div className="mt-8">
            {tabData.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
