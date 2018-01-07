import React, { Component } from "react";
import { WorkThumb } from "../components/work";

export default ({ data }) => {
	return (
		<div>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<WorkThumb
					key={node.id}
					thumbnail={node.frontmatter.thumbnail}
					title={node.frontmatter.title}
					type={node.frontmatter.type}
				/>
			))}
		</div>
	);
};

export const query = graphql`
	query workQuery {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
			edges {
				node {
					id
					frontmatter {
						thumbnail
						title
						type
					}
				}
			}
		}
	}
`;
