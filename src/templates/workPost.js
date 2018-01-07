import React from "react";

import styles from './workPost.module.scss';

export default ({ data }) => {
	const post = data.markdownRemark;
	return (
		<div>
			<div className={styles.container} dangerouslySetInnerHTML={{ __html: post.html }} />
		</div>
	);
};

export const query = graphql`
	query BlogPostQuery($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				thumbnail
				title
			}
		}
	}
`;
