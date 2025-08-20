import React from 'react';
import { Link } from 'react-router-dom';
import witchCover from "../images/Cover Reading Of A Witch.png";
import ringsCover from "../images/Cover Rings of Power.png"
import starshipCover from "../images/Cover Starship Battle.png";
import machiningCover from "../images/Cover Machining MR.png"
import cleanroomCover from "../images/Cover XR Cleanroom.png"
import cafePOSCover from "../images/Cover Cafe POS.png"
import portfolioCover from "../images/Cover Portfolio Website.png"
import blackOpsCover from "../images/Cover Black Ops.png"

function ProjectCards() {
  const projects = [
    {
      id: 'xr-cleanroom',
      name: "XR Cleanroom Semiconductor Fabrication Simulator",
      description: "Virtual reality application for the Meta Quest headsets designed in collaboration with electrical computer engineering faculty to aid in semiconductor education.",
      image: cleanroomCover
    },
    {
      id: 'mr-machining',
      name: "MR Machine Control for Modern Manufacturing",
      description: "Mixed reality-based controller for realtime 3D printer and CNC management built for the Microsoft HoloLens 2.",
      image: machiningCover
    },
    {
      id: 'black-ops',
      name: "3D Art: Ode To Call of Duty Black Ops 3",
      description: "Short custom render of an abandoned apocalyptic school with a nod to iconic symbols from COD zombies.",
      image: blackOpsCover
    },
     {
      id: 'cafe-pos',
      name: "Café Point of Sale",
      description: "Local desktop cash-based POS system built on the C#/.NET framework in Visual Studio.",
      image: cafePOSCover
    },
     {
      id: 'lotr-rings',
      name: "3D Art: LOTR Rings of Power Reconstruction",
      description: "Final project render for Modeling & Animation II, taking inspiration from Rings of Power.",
      image: ringsCover
    },
    {
      id: 'starship-battle',
      name: "3D Art: Mini Starship Battle",
      description: "Modeling & Animation II animation project with a kitbashing investigation.",
      image: starshipCover
    },
     {
      id: 'witch-reading',
      name: "3D Art: Reading of a Witch",
      description: "Final project render for Modeling & Animation I, taking inspiration from popular fantasy titles and witchy themes.",
      image: witchCover
    },
    {
      id: 'portfolio-website',
      name: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth animations built with React and CSS3.",
      image: portfolioCover
    }
  ];

  return (
    <div className="project-cards-container">
      {projects.map((project) => (
        <Link 
          key={project.id} 
          to={`/project/${project.id}`}
          onClick={()=> window.scrollTo(0,0)}
          className="project-card-link"
        >
          <div className="project-card">
            <div className="project-card-inner">
              <img 
                src={project.image} 
                alt={project.name}
                className="project-image"
              />
              <div className="project-overlay">
                <div className="project-text-container project-name-container">
                  <h3 className="project-name">{project.name}</h3>
                </div>
                <div className="project-text-container project-description-container">
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProjectCards;