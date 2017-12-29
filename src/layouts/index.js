import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.css";
import styles from "./index.module.scss";

const Header = () => (
	<div className={styles.test}>
		<div className={styles.container}>
			<div className={styles.headerContainer}>
				<Link to="/">Jasper Jin</Link>
			</div>
			<div className={styles.navContainer}>
				<Link to={`/`}>Work</Link>
				<Link to={`/about/`}>About</Link>
				<Link to={`/moodboard/`}>Moodboard</Link>
			</div>
		</div>
		<div className={styles.mobileMenu}>
				<Link to={`/`}>Work</Link>
				<Link to={`/about/`}>About</Link>
				<Link to={`/moodboard/`}>Moodboard</Link>
		</div>
	</div>
);

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Jasper Jin"
			meta={[
				{ name: "description", content: "Sample" },
				{ name: "keywords", content: "sample, something" }
			]}
		/>
		<Header />
		<div
			style={{
				margin: "0 auto",
				maxWidth: 960,
				padding: "0px 1.0875rem 1.45rem",
				paddingTop: 0
			}}
		>
			{children()}
		</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
