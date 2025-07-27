import {FaBars, FaTimes} from "react-icons/fa";
import {useRef, useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/main.css";
import logo from "../images/Portfolio Initials Logo - White.png";
import {useScroll, useMotionValueEvent} from "framer-motion";
import Resume from  "../images/profdevmedia/Franken Resume.pdf";


function Navbar() {
    const navRef = useRef();
    const location = useLocation();
    const {scrollY} = useScroll();
    const isMainPortfolioPage = location.pathname === "/" || location.pathname === "/Portfolio";
    
    const [scrolled, setScrolled] = useState(!isMainPortfolioPage);

    useEffect(() => {
        if (isMainPortfolioPage) {
            setScrolled(false); // Start purple on main page
        } else {
            setScrolled(true);  // Always dark on other pages
        }
    }, [location.pathname, isMainPortfolioPage]);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // Only the main portfolio page has scroll-based navbar color changes
        if (isMainPortfolioPage) {
            if(latest > 840 && !scrolled) {
                setScrolled(true); // Switch to dark
            } else if(latest < 840) { // Remove the "&& !scrolled" condition
                setScrolled(false); // Switch to purple
            }
        }
        // All other pages: navbar stays dark regardless of scroll
    });
    
    // ... rest of your component

    
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <>
        <header className={scrolled ? "dark-gradient-background" : "gradient-background"}>
            <img src={logo} height="150px"></img>
            <nav ref={navRef}>
                <Link to="/#about" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 1300, behavior: "smooth"});
                    }
                }}>About</Link>
                <Link to="/#skills" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 2500, behavior: "smooth"});
                    }
                }}>Skills</Link>
                <Link to="/#projects" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 3750, behavior: "smooth"});
                    }
                }}>Projects</Link>
                <Link to="/#developments" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 5400, behavior: "smooth"});
                    }
                }}>Developments</Link>
                <Link to="/#contact" onClick={() => {
                    if(location.pathname === "/") {
                        window.scrollTo({top: 8300, behavior: "smooth"});
                    }
                }}>Contact</Link>
                <a href={Resume} target="_blank" rel="noopener noreferrer">Resumé</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick= 
            {showNavbar}>
                <FaBars />
            </button>
        </header>
        </>
        
    );
}

export default Navbar;