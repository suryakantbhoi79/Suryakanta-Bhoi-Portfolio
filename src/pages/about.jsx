import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
// import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");
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
				<NavBar active="about" />
				<div className="content-wrapper">
					{/* <div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div> */}

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="surya_about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								{/* <div className="about-socials">
									<Socials />
								</div> */}
							</div>
						</div>
						<div className="about-socials-mobile">
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

export default About;
