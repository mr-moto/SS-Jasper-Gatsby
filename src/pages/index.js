import React, { Component } from "react";
import { WorkPost } from "../components/work";

export default ({ data }) => {
	return (
		<div>
			{data.allMarkdownRemark.edges.map(({ node }) => (
				<WorkPost key={node.id} thumbnail={node.frontmatter.thumbnail} />
			))}
		</div>
	);q
};

export const query = graphql`
	query workQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						thumbnail
					}
				}
			}
		}
	}
`;
