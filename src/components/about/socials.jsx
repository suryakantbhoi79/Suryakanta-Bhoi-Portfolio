import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
	faLinkedin,
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			{INFO.socials.linkedin && (
				<div className="social">
					<a
						href={INFO.socials.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faLinkedin}
								className="social-icon"
							/>
						</div>
						<div className="social-text">Connect on LinkedIn</div>
					</a>
				</div>
			)}

			{INFO.socials.github && (
				<div className="social">
					<a href={INFO.socials.github} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon
								icon={faGithub}
								className="social-icon"
							/>
						</div>
						<div className="social-text">View GitHub</div>
					</a>
				</div>
			)}

			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>
						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>

			<div className="email">
				<div className="email-wrapper">
					<a href={`tel:${INFO.main.phone}`}>
						<div className="social-icon">
							<FontAwesomeIcon icon={faPhone} />
						</div>
						<div className="social-text">{INFO.main.phone}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
