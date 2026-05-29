import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "projects");
	const canonicalUrl = `${INFO.main.website}${currentSEO.path}`;
	const ogImageUrl = `${INFO.main.website}${INFO.main.ogImage}`;

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
				<NavBar active="projects" />
				<div className="content-wrapper">
					{/* <div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div> */}
					<div className="projects-container">
						<div className="title projects-title">
							Selected AI And ERP Work
						</div>

						<div className="subtitle projects-subtitle">
						My recent work centers on production-ready AI systems: RAG pipelines, enterprise chatbots, agentic workflows, and AI-assisted ERP modules. The projects below reflect the strongest overlap between my CV and the kind of systems I design, implement, and ship in real business environments.
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
