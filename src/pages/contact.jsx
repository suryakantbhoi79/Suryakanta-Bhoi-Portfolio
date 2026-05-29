import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					{/* <div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div> */}

					<div className="contact-container">
						<div className="title contact-title">
							Let's Build Practical AI Systems
						</div>

						<div className="subtitle contact-subtitle">
							If you are hiring for AI engineering, building LLM-powered products, or exploring ERP workflows enhanced by Generative AI, reach out at <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a> or call <a href={`tel:${INFO.main.phone}`}>{INFO.main.phone}</a>. You can also connect with me on <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>. I am based in {INFO.main.location} and open to conversations around Python, FastAPI, RAG systems, agentic workflows, and production AI delivery.
						</div>

					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
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

export default Contact;
