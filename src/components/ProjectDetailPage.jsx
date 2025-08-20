import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import '../styles/ProjectDetailPage.css';
import websiteCover from "../images/projectmedia/website-project-cover.png"

function ProjectDetailPage() {
  const { projectId } = useParams();
  const [isHovered, setIsHovered] = useState(false);

  // Project data for all your projects
  const projectData = {
    'oops': {
      title: 'Oops!',
      description: 'Looks like there might not be a specific project to show for this skill. It was likely obtained through a specific course.',
      date: null,
      status: null,
      videoUrl: null,
      imageUrl: null,
      caption: '',
      content: {
        sections: [
          {
            heading: '',
            text: ''
          }
        ]
      }
    },
    'xr-cleanroom': {
      title: 'XR Cleanroom Semiconductor Fabrication Simulator',
      description: 'Virtual reality application for the Meta Quest headsets designed in collaboration with electrical computer engineering faculty to aid in semiconductor education.',
      date: 'July 2025',
      status: 'Ongoing',
      videoUrl: 'https://www.youtube.com/embed/AS8h9n8L7sw',
      imageUrl: null,
      caption: 'See full demo of the photolithography module.',
      content: {
        sections: [
          {
            heading: 'Project Overview',
            text: 'This is an ongoing virtual reality project built for the Meta Quest headsets using the Unity Game Engine and UltimateXR for accurate hand interactions. The intent is to impose a 3-part system that introduces the user to various parts of the semiconductor fabrication process in an accurate cleanroom environment. This includes step-by-step instruction on how to operate the digital twin version of expensive fabrication equipment that can only be used in a specialized environment. When complete it will feature tutorial, practice, and test modes as well as a PPE (personal protective equipment) section.'
          },
          {
            heading: 'What is a cleanroom?',
            text: 'A cleanroom is a controlled environment used in electronics manufacturing designed to maintain extremely low levels of airborne particles, contaminants, and pollutants such as dust, microbes, and chemical vapors. This environment is maintained to prevent defects throughout a delicate fabrication process.'
          },
          {
            heading: 'How is this VR simulation structured?',
            text: 'Although it is still a work in progress, it is likely that the final version will function more or less like a hallway with different doors to the different modules, where the user can specify how they want to complete that section. Are they new to the equipment and procedures? They should complete the tutorial mode. Are they somewhat experienced but not extremely confident? They should complete the practice mode. Are they ready to show off what they have learned? They are ready for testing mode. Regardless of which mode they choose, PPE will be a requirement every time they enter the simulation.'
          },
          {
            heading: 'What are the different sections and what are their development statuses?',
            bulletPoints: [
              'Photolithography Module: Polishing, Nearing Completion',
              'Reactive Ion Etching (RIE) Module: Work In Progress',
              'Sputtering Module: Not Started',
              'PPE Module: Not Started',
            ],
            text: 'Note: We are focused on completing the tutorial modes first since the other versions will simply disable certain features'
          },
          {
            heading: 'Key Features',
            text: 'Modern education requires modern solutions.',
            bulletPoints: [
              'Step-by-step tutorial videos',
              'Highlighted objects for easy first-time navigation',
              'Score-based system enhanced with visual and audio feedback',
              'AI companion, NOVA, for adaptive learning support',
              'Accurate and optimized model assets create an immersive user experience',
              'Intuitive information center ready to assist with any setting changes or needs for module completion'
            ]
          },
          {
            text: 'Want to know more? Feel free to reach out!'
          }
        ]
      }
    },
    'mr-machining': {
      title: 'MR Machine Control for Modern Manufacturing',
      description: 'Mixed reality-based controller for realtime 3D printer and CNC management built for the Microsoft HoloLens 2.',
      date: 'July 2025',
      status: 'Ongoing',
      videoUrl: 'https://www.youtube.com/embed/WCQZFEblQJQ',
      imageUrl: null,
      caption: 'HoloLens 2 interface showing real-time CNC and 3D priner machine statuses during synonymous operation.',
      content: {
        sections: [
          {
            heading: 'Project Overview',
            text: 'This is a mixed reality platform built for the Microsoft HoloLens 2, to control multiple 3D printers and CNC machines. The HoloLens was the perfect choice for this project as manufacturing has many important safety requirements that we must abide by. The best part about this headset is that you can still clearly see your environment, unlike other popular VR tools like the Meta Quest headsets. Any application you run on the HoloLens simply acts as an overlay to the space around you.'
          },
          {
            heading: 'Use-Case',
            text: 'We designed this tool to be helpful to new and highly experienced machinists alike. Equipped with step-by-step tutorials, video instructions, and live data monitoring pages, we conducted user testing that suggests that users with no prior experience are able to use this mixed reality platform to operate 3D printers and CNC machines.',
          },
          {
            text: 'This level of accessibility could be vital in an educational environment, but there are also benefits for experienced machinists. With this platform you are able to quickly navigate a universal UI format instead of machine-specific control panels, as well as manage multiple machines simultaneously. It makes use of a unified server and a machine-specific plugin architecture to maintain long-term scalability.'
          },
          {
            heading: 'Personal Contribution: GCode Simulation',
            text: 'The simulation algorithm was custom designed to indiscriminately generate a 3D model based on the GCode file alone, regardless of machine type or the standalone software used to generate it. Using my knowledge of the Unity Game Engine, I developed custom C# coroutines that run in tandem with the rest of the application. The user provides the GCode file which is processed as a text file opened through StreamReader. Line-by-line it extracts important commands (such as homing, unit type, and relative vs. absolute positioning), and parses movement coordinates to Vector3s. Primitive objects are then generated in worldspace and stretched between these coordinates either gradually for real time simulation, or rapidly to show the finished product.'            
          },
          {
            text: 'This simulation algorithm is a standalone package that can be added to any Unity project. It is also available on my GitHub upon request.'
          },
          {
            heading: 'Benefits & Recognition',
            text: 'This application was built with affordable hardware (Raspberry Pis) and open sourced firmware (Klipper, Moonraker, and CNCjs). There is a lot of appeal for this new form of control we have been investigating. Our team has written a paper that won Best Paper at the 2025 FAIM conference. We also competed in the 2025 ASME MSEC Student Manufacturing Design Competition, where we took home 2nd place.'
          },
          {
            heading: 'What\'s next?',
            text: 'This project will eventually expand to more complex control panel types . Our team will continue to explore AI’s potential role in this application, and investigate a more detailed digital twin system to further highlight parts of the control panel during operation. This would involve high accuracy machine detection in real worldspace.'
          },
          {
            text: 'Want to know more? Feel free to reach out!'
          }
        ]
      }
    },
    'black-ops': {
      title: '3D Art: Ode To Call of Duty Black Ops 3',
      description: 'Short custom render of an abandoned apocalyptic school with a nod to iconic symbols from COD zombies.',
      date: 'August 2025',
      status: 'Complete',
      videoUrl: 'https://www.youtube.com/embed/FBeehn-IWvc',
      imageUrl: null,
      caption: 'Cataclysmic shot featuring Dr. Monty\'s gobblegum machine, the Mystery Box, Speed Cola, and the emblematic Ray Gun.',
      content: {
        sections: [
          {
            heading: 'So... why Black Ops 3?',
            text: 'Growing up, I played a lot of video games, and Call of Duty Black Ops 2 & 3 was a set of titles my whole family could enjoy together on the couch as a classic splitscreen co-op. Don\'t get me wrong, Black Ops 4 is an even greater improvement, but the former titles hold a different kind of nostalgia. Tranzit was great, but I always especially admired the loading screen art style and all of the unique models and easter eggs found in Black Ops 3: specifically for the Shadows of Evil and Der Eisendrache maps. So I decided I wanted do a short recreation of some of the most iconic symbols of Black Ops 3. This includes Dr. Monty\'s Gobblegum Machine, the Mystery Box, Speed Cola and the Ray Gun. Note that it was never meant be a one-for-one copy. I made sure to add my own little flair. And who knows... maybe there will be a later installment!'
          },
          {
            heading: 'What new techniques and tools did I use?',
             bulletPoints: [
              'Geometry nodes for the gobblegum machine plasma.',
              'Animated emissive textures.',
              'Custom blend of procedural textures.',
              'Continuation of custom alpha and decaling techniques.'
            ]
          }
        ]
      }
    },
    'cafe-pos': {
      title: 'Café Point of Sale System',
      description: 'Local desktop cash-based POS system built on the C#/.NET framework in Visual Studio.',
      date: 'October 2024',
      status: 'Complete',
      videoUrl: 'https://www.youtube.com/embed/HoYU-CVkUc4',
      imageUrl: null,
      caption: 'Clean and intuitive POS interface designed with the user in mind for efficient order processing.',
      content: {
        sections: [
          {
            heading: 'Design Concept',
            text: 'Small café owners often struggle with expensive, cloud-dependent POS systems that require ongoing subscription fees and reliable internet connectivity. This desktop-based solution provides a cost-effective, reliable alternative that operates entirely offline while maintaining professional functionality. Designed for a modern 3rd wave coffee shop using the C#/.NET framework, the application provides the same level of customizability as popular coffee chains like Scooters and Starbucks. This includes sizing, topping, and custom comment functionalities.'
          },
          {
            heading: 'Highlighted Features',
            text: 'Although it only has the ability to account for cash, I did base its design on my personal experience managing within the food service industry. During stressful high-volume periods, mistakes can be easily made when employees aren’t provided with the right tools in an accessible way. Knowing this, I included a built-in calculator that automatically calculates useful values (cash owed, how much the customer owes, how much money has been entered) to help simplify the math when misclicks and confusion arises. The user can also clearly see price breakdowns of complicated customized drinks by simply clicking on them.'
          },
          {
            text: 'Equipped with intuitive controls, this project is an improved emulation of the POS systems food service workers rely on daily.'
          }
        ]
      }
    },
    'lotr-rings': {
      title: '3D Art: LOTR Rings of Power Reconstruction',
      description: 'Final project render for Modeling & Animation II, taking inspiration from Rings of Power.',
      date: 'May 2025',
      status: 'Complete',
      videoUrl: 'https://www.youtube.com/embed/UrjnjzJ8JWU',
      imageUrl: null,
      caption: 'Cinematic render showcasing the forging of the Rings of Power with detailed lighting and particle effects',
      content: {
        sections: [
          {
            heading: 'Artistic Vision',
            text: 'This project is a continuation of my modeling and animation journey using Blender. Nearly all of the models were custom modeled, but a few of the furniture and vegetation models came from PolyHaven.'
          },
          {
            text: 'It follows an anthology format based on the ring forging scene from LOTR Rings of Power. Certain symbolic elements were recreated from the show such as the leaf covered in corruption, Sauron’s symbol written in flames, the melting of mithril ore, and the purifying power of Galadriel’s ring, Nenya. '
          },
          {
            heading: 'What new techniques and tools did I use?',
             bulletPoints: [
              'Custom alpha maps for unique ornamentation (seen on the side of the forge, wooden beams, anvil and rings).',
              'Reallusion’s Character Creator 4 to create, adjust, and rig realistic character models.',
              'Reallusion’s iClone to animate the characters with an editor based on MoCap data.',
              'Multiple liquid, cloth, and fire simulations cached in the same project.',
              'Blend shapes for the bellow animation.',
              'Smoother camera motion.'
            ]
          },
          {
            text: 'My favorite part of this final animation is from 2:25-2:50 which features cinematic shots of the three elven rings.'
          }
        ]
      }
    },
    'starship-battle': {
      title: '3D Art: Mini Starship Battle',
      description: 'Modeling & Animation II animation project with a kitbashing investigation.',
      date: 'March 2025',
      status: 'Complete',
      videoUrl: 'https://www.youtube.com/embed/OUtHLLdbFn0',
      imageUrl: null,
      caption: 'Dynamic space battle sequence featuring custom-designed starships in an asteroid field',
      content: {
        sections: [
          {
            heading: 'Assignment Reflection',
            text: 'This short 30 second animation was a smaller project submission from Modeling and Animation II. The ship designs took inspiration from No Man’s Sky and the animation chain of events were loosely based on the meteor field battle between Jango Fett and Obi-Wan in Star Wars: Attack of the Clones.'
          },
          {
            text: 'The focus of the assignment was on kitbashing, which is the act of combining a bunch of different models together to create something new. The term originated in the physical modeling community for collectors in model cars, airplanes, and ships, but extends to 3D art as well. I decided to use one of the original more revered shipyard sets which can be found on BlendSwap: https://blendswap.com/blend/3409.'
          },
          {
            text: 'The asteroid field was procedurally generated, which means the positioning required some fine tuning. Curve-based constraints were used for the starship paths.'
          }
        ]
      }
    },
    'witch-reading': {
      title: '3D Art: Reading of a Witch',
      description: 'Final project render for Modeling & Animation I, taking inspiration from popular fantasy titles and witchy themes.',
      date: 'December 2024',
      status: 'Complete',
      videoUrl: 'https://www.youtube.com/embed/WCeFNeHOJ6E',
      imageUrl: null,
      caption: 'Atmospheric scene featuring a witch making a potion while completing a tarot reading.',
      content: {
        sections: [
          {
            heading: 'Assignment Reflection',
            text: 'This project was my first experience producing a full render. All models present in the video I created myself using Blender, except for the witch which came pre-rigged from Mixamo. Many of her movements were custom keyframed, and this was my first experience animating a player rig.'
          },
          {
            text: 'Although it is not perfectly polished, my preparation for this project gave me a lot of practice with modeling. I created some of my first sculpted models for this project including the deer skull, and eoraptor dinosaur skull. The eoraptor skull is one of my favorite models I have made to date, but you don’t see it much in the render. Overall, I am most proud of the overall ambiance of the animation, and the fine-tuning I achieved right around the 1:14 mark.'
          }
        ]
      }
    },
    'portfolio-website': {
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with smooth animations built with React and CSS3.',
      date: 'July 2025',
      status: 'Complete',
      videoUrl: null,
      imageUrl: websiteCover,
      caption: 'Clean, modern portfolio interface showcasing responsive design and smooth animations',
      content: {
        sections: [
          {
            heading: 'Summary',
            text: 'This website was created with standard web tools including HTML, CSS, and embedded JavaScript. It is also powered by the React framework, which allows for the effective reuse of various card, button, and page components.'
          },
          {
            heading: 'Why did you choose React?',
            text: 'My developer journey technically began back in elementary and middle school when I was block coding for FIRST Robotics, which naturally led me to learn Java as my first real programming language in high school.'
          },
          {
            text: 'Shortly after learning Java, I moved on to C#/.NET which led me to creating my first substantial coding project: my Cafe POS system. I often hear that I’ve learned my languages “backwards” as a result. That being said, object oriented programming has been engrained in me from day one. When I was first investigating web frameworks the split between HTML/CSS/JS was puzzling, but React came very naturally to me because of its OOP nature.'
          },
          {
            heading: "What was your design inspiration?",
            text: "This was my first substantial web project. Leading up to actually making it a reality, I spent a lot of time looking at numerous other porfolio websites, and company websites that had previously stood out to me for their clean look. I noticed that many students like to show off through their website design, but I found that from a UX perspective sometimes the (admittedly very) \"cool stuff\" they were creating, would be a little bit overwhelming and detract from the information you are usually expected to convey on a personal website."
          },
          {
            text: "That being said, I still wanted to explore and have fun with my CSS elements. So you'll find some animated elements I added (hopefully) with moderation such as the color changing navbar, the glowing borders on the project cards, the white back-and-forth swiping animations for the professional development cards, and the similar effect that acts as a border around project demo videos when you hover over them. I'd like to note that all of the purple-ish lineart on the main page, and my initials logo were also hand-drawn with my Huion! I had a lot of fun designing this website and picking the right color palette for my personality, and I sincerely hope that you're enjoying it too."
          }
        ]
      }
    }
  };

  const project = projectData[projectId];

  if (!project) {
  return <Navigate to="/" replace />;
}

return (
  <div className="project-detail-page">
    <div className="project-detail-container">
      {/* Header Section */}
      <header className="project-header">
        <h1 className="project-page-title">
          {project.title}
        </h1>
        <p className="project-page-description">
          {project.description}
        </p>
        <hr className="project-divider" />
        {/* Only show metadata if date or status exists */}
        {(project.date || project.status) && (
          <div className="project-metadata">
            {project.date && (
              <p className="project-date">
                <span className="font-medium">Last Updated:</span> {project.date}
              </p>
            )}
            {project.status && (
              <p className="project-status">
                <span className="font-medium">Status:</span> 
                <span className={`status-badge ${
                  project.status === 'Complete' 
                    ? 'status-complete' 
                    : 'status-ongoing'
                }`}>
                  {project.status}
                </span>
              </p>
            )}
          </div>
        )}
      </header>

      {/* Media Section - Only show if videoUrl or imageUrl exists */}
      {(project.videoUrl || project.imageUrl) && (
        <div className="project-media">
          <div 
            className="media-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {project.videoUrl ? (
              <div className="relative">
                <iframe
                  src={project.videoUrl}
                  title="Project Video"
                  className="project-page-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* Animated borders on hover */}
                {isHovered && (
                  <div className="video-hover-effects">
                    <div className="top-glow"></div>
                    <div className="bottom-glow"></div>
                  </div>
                )}
              </div>
            ) : (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="project-page-image"
              />
            )}
          </div>
          <p className="project-caption">
            {project.caption}
          </p>
        </div>
      )}

      {/* Article Content */}
      <article className="project-article">
        {project.content.sections.map((section, index) => (
          <section key={index} className="article-section">
            <h2 className="section-heading">
              {section.heading}
            </h2>
            <p className="section-text">
              {section.text}
            </p>
            {section.bulletPoints && (
              <ul className="section-bullets">
                {section.bulletPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="bullet-point">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      {/* Navigation back */}
      <div className="project-navigation">
        <button 
          onClick={() => window.location.href = '/Portfolio/#projects'}
          className="back-button"
        >
          ← Back to Projects
        </button>
      </div>
    </div>
  </div>
);
}

export default ProjectDetailPage;