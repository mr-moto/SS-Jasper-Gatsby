import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { connect } from "react-redux"
import { setTest } from '../redux/modules/test'
const {GoThreeBars, GoX} = require('react-icons/lib/go');

import "./index.css";
import styles from "./index.module.scss";

class TemplateWrapper extends Component {
	state = {
		navOpen: false,
		isHam: true,
	};

	componentDidMount(){
		const navHeight = document.getElementById('cont').clientHeight; 
		this.props.dispatch(setTest(navHeight))
		// pass this in to redux so it can be used to add padding to content body.
	}

	render() {
		
		const { children, test } = this.props;
		return (
			<div>
				<Helmet
					title="Jasper Jin"
					meta={[
						{ name: "description", content: "Sample" },
						{ name: "keywords", content: "sample, something" }
					]}
				/>
				<div className={styles.test} id="cont">
					<div className={styles.container}>
						<div className={styles.headerContainer}>
							<Link to="/">Jasper Jin</Link>
						</div>
						<div className={styles.navContainer}>
							<Link to={`/`}>Work</Link>
							<Link to={`/about/`}>About</Link>
							<Link to={`/moodboard/`}>Moodboard</Link>
						</div>
						<div className={styles.iconContainer}>
						{this.state.isHam ? (
							<div onClick={() => this.setState({ isHam: false, navOpen: true })}>
								<GoThreeBars className={styles.icon}/>
							</div>
						) : (
							<div onClick={() => this.setState({ isHam: true, navOpen: false })}>
								<GoX className={styles.icon}/>
							</div>
						)}
						</div>
					</div>
					{this.state.navOpen ? (
						<div className={styles.mobileMenu}>
							<Link to={`/`}>Work</Link>
							<Link to={`/about/`}>About</Link>
							<Link to={`/moodboard/`}>Moodboard</Link>
						</div>
					) : null}
				</div>
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
	}
}

// const mapStateToProps = state => {
// 	return {
// 		test: state.test
// 	}
// }

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default connect()(TemplateWrapper);
