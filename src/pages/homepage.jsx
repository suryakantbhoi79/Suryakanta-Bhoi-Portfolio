import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faFileLines, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
	
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	const [currentTitle, setCurrentTitle] = useState("");
  	const [titleIndex, setTitleIndex] = useState(0);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		const typeWriterEffect = () => {
			const titleText = INFO.homepage.title;
			if (titleIndex < titleText.length) {
			  setCurrentTitle((prev) => prev + titleText.charAt(titleIndex));
			  setTitleIndex((prev) => prev + 1);
			}else {
				// Typing is complete, reset the index and title for the next iteration
				setTitleIndex(0);
				setCurrentTitle("");
			  }
		  };
	  
		const titleTypingInterval = setInterval(typeWriterEffect, 150);

		window.addEventListener("scroll", handleScroll);
	
		return () => {
		window.removeEventListener("scroll", handleScroll);
		clearInterval(titleTypingInterval);
		  };
		}, [logoSize, oldLogoSize, titleIndex]);

	const currentSEO = SEO.find((item) => item.page === "home");
	const canonicalUrl = `${INFO.main.website}${currentSEO.path}`;
	const ogImageUrl = `${INFO.main.website}${INFO.main.ogImage}`;

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<React.Fragment>
			<Helmet>
				<title>{currentSEO.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
				<link rel="canonical" href={canonicalUrl} />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={currentSEO.title} />
				<meta property="og:description" content={currentSEO.description} />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:image" content={ogImageUrl} />
				<meta property="og:site_name" content={INFO.main.name} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={currentSEO.title} />
				<meta name="twitter:description" content={currentSEO.description} />
				<meta name="twitter:image" content={ogImageUrl} />
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
							<div className="title homepage-title">
								{currentTitle}
								</div>

								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="111111111.png"
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div className="homepage-socials">
							<a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon" />
							</a>
							<a
								href={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon
									icon={faMailBulk}
									className="homepage-social-icon"
								/>
							</a>
							<a href={INFO.main.resume} target="_blank" rel="noreferrer">
								<FontAwesomeIcon
									icon={faFileLines}
									className="homepage-social-icon"
								/>
							</a>
						</div>

						<div className="homepage-meta">
							<div className="homepage-meta-item">{INFO.main.location}</div>
							<div className="homepage-meta-item">{INFO.main.phone}</div>
						</div>

						<div className="homepage-section">
							<div className="homepage-section-title">Professional Highlights</div>
							<div className="homepage-highlight-list">
								{INFO.highlights.map((highlight, index) => (
									<div className="homepage-highlight-item" key={index}>
										{highlight}
									</div>
								))}
							</div>
						</div>

						<div className="homepage-section">
							<div className="homepage-section-title">Core Skills</div>
							<div className="homepage-skill-list">
								{INFO.skills.map((skill, index) => (
									<div className="homepage-skill-pill" key={index}>
										{skill}
									</div>
								))}
							</div>
						</div>

						<div className="homepage-section">
							<div className="homepage-section-title">Experience</div>
							<div className="homepage-experience-list">
								{INFO.experience.map((item, index) => (
									<div className="homepage-experience-card" key={index}>
										<div className="homepage-experience-role">{item.role}</div>
										<div className="homepage-experience-company">
											{item.company}
										</div>
										<div className="homepage-experience-duration">
											{item.duration}
										</div>
										<div className="homepage-experience-summary">
											{item.summary}
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="homepage-section">
							<div className="homepage-section-title">Selected Projects</div>
							<div className="homepage-projects">
								<AllProjects />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Homepage;
