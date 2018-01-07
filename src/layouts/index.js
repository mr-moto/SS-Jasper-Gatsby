import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { connect } from "react-redux";
const { GoThreeBars, GoX } = require("react-icons/lib/go");

import "./index.css";
import styles from "./index.module.scss";

class TemplateWrapper extends Component {
	state = {
		navOpen: false,
		isHam: true
	};

	resizeHandler() {
		const navHeight = this.refs.nav.clientHeight;
		this.setState({ navHeight });
	}
	clickHandler() {
		this.setState({ navOpen: false, isHam: true });
	}

	componentDidMount() {
		setTimeout(() => {
			window.requestAnimationFrame(() => this.resizeHandler());
		});
		window.addEventListener("resize", () => this.resizeHandler());
	}
	componentWillUnmount() {
		window.removeEventListener("resize", () => this.resizeHandler());
	}

	render() {
		const { children } = this.props;
		return (
			<div>
				<Helmet
					title="Jasper Jin"
					meta={[
						{ name: "description", content: "Sample" },
						{ name: "keywords", content: "sample, something" }
					]}
				/>
				<div>
					<div className={styles.container} ref="nav">
						<div className={styles.headerContainer}>
							<Link to="/" onClick={() => this.clickHandler()}>
								Jasper Jin
							</Link>
						</div>
						<div className={styles.navContainer}>
							{/* TODO use the gatsby stuff to populate menu later */}
							<Link to={`/`}>Work</Link>
							<Link to={`/about/`}>About</Link>
							<Link to={`/moodboard/`}>Moodboard</Link>
						</div>
						<div className={styles.iconContainer}>
							{this.state.isHam ? (
								<div onClick={() => this.setState({ isHam: false, navOpen: true })}>
									<GoThreeBars className={styles.icon} />
								</div>
							) : (
								<div onClick={() => this.setState({ isHam: true, navOpen: false })}>
									<GoX className={styles.icon} />
								</div>
							)}
						</div>
					</div>
					{this.state.navOpen ? (
						<div className={styles.mobileMenu}>
							{/* TODO use the gatsby stuff to populate menu later */}
							<Link to={`/`} onClick={() => this.clickHandler()}>
								Work
							</Link>
							<Link to={`/about/`} onClick={() => this.clickHandler()}>
								About
							</Link>
							<Link to={`/moodboard/`} onClick={() => this.clickHandler()}>
								Moodboard
							</Link>
						</div>
					) : null}
				</div>
				<div style={{ padding: "0 5vw", paddingTop: this.state.navHeight }}>
					{children()}
				</div>
			</div>
		);
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default connect()(TemplateWrapper);
