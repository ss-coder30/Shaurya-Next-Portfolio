"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import musicPlayerImage from "../../public/images/projects/musicPlayer.png";
import newsWorldImage from "../../public/images/projects/Newsworld.png";
import diceeGameImage from "../../public/images/projects/diceeGame.png";
import literatureJunctionImage from "../../public/images/projects/literatureJunction.png";
import drumkitImage from "../../public/images/projects/drumkit.png";
import ticTacToe from "../../public/images/projects/ticTacToe.png";
import rockPaperScissorsGameImage from "../../public/images/projects/rockPaperScissors.png";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Personalised Music Player System",
    description: "Music Player System",
    image: musicPlayerImage,
    gitUrl: "https://github.com/ss-coder30/Personalised-Music-Player-System",
    previewUrl: "https://music-player-nine-rust.vercel.app/login",
  },
  {
    id: 2,
    title: "News World",
    description: "News World - a news application",
    image: newsWorldImage,
    gitUrl: "https://github.com/ss-coder30/News-World",
    previewUrl: "https://news-world-tan.vercel.app/?q=random&pageNo=1",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe Game",
    description: "Tic-Tac-Toe Game - a game",
    image: ticTacToe,
    gitUrl: "https://github.com/ss-coder30/Tic-Tac-Toe",
    previewUrl: "https://ss-coder30.github.io/Tic-Tac-Toe/",
  },
  {
    id: 4,
    title: "Rock Paper Scissors Game",
    description: "Rock Paper Scissors Game against computer player- a game",
    image: diceeGameImage,
    gitUrl: "https://github.com/ss-coder30/Rock-Paper-Scissors",
    previewUrl: "https://rock-paper-scissors-lac-three-76.vercel.app/",
  },
  {
    id: 5,
    title: "Dicee Game",
    description: "Dicee Game - a game",
    image: rockPaperScissorsGameImage,
    gitUrl: "https://github.com/ss-coder30/dice_game",
    previewUrl: "https://dice-game-ss-coder30.vercel.app/",
  },
  {
    id: 6,
    title: "Literature Junction",
    description: "Literature junction",
    image: literatureJunctionImage,
    gitUrl: "https://github.com/ss-coder30/Literature-Junction",
    previewUrl: "https://literature-junction.vercel.app/",
  },
  {
    id: 7,
    title: "Drum Kit Application",
    description: "Drum Kit Application ",
    image: drumkitImage,
    gitUrl: "https://github.com/ss-coder30/Drum-Kit",
    previewUrl: "https://drum-kit-kappa-two.vercel.app/",
  },
];

const ProjectsSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity:1}
  }

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.3, delay: index*0.4}}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
