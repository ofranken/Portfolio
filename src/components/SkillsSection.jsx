import React from "react";
import { Link } from 'react-router-dom';
import VRIcon from '../images/icons/skill icons/virtual-reality.svg?react';
import Orbs from "../images/backgrounds/skills-orbs.png";

function SkillsSection() {

    return <section className="skills-section">
    <img src={Orbs} className="orbs"/>
    <h2 className="section-title skills-title">Skills...</h2>
    <p id="skill-instruction">Click on any skill icon to see the most representative project.</p>

    <div className="container-icons">
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/oops`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-java-plain"></i></Link> <p>Java</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/xr-cleanroom`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-csharp-plain"></i></Link> <p>C#</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/oops`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-c-plain"></i></Link><p>C</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-javascript-plain"></i></Link> <p>JavaScript</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-html5-plain"></i></Link> <p>HTML</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-css3-plain"></i></Link> <p>CSS</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-jquery-plain"></i></Link> <p>jQuery</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-nodejs-plain"></i></Link> <p>Node.js</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/portfolio-website`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-react-original"></i></Link> <p>React.js</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/black-ops`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-blender-original"></i></Link> <p>Blender</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/xr-cleanroom`} onClick={()=> window.scrollTo(0,0)}><i className="devicon-unity-plain"></i></Link> <p>Unity Game Engine</p></div>
        <div className="skill-icon-div"><Link className="skill-link" to={`/project/xr-cleanroom`} onClick={()=> window.scrollTo(0,0)}><VRIcon className="i-vr" height="105px" width="105px"/></Link> <p className="p-vr">Virtual Reality</p></div>


    </div>
    </section>

}

export default SkillsSection;