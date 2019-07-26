import React from "react";
import { graphql } from "gatsby";
import Post from "../components/post";

const PostTemplate = ({ data, pageContext: { siteURL, previous, next } }) => {
	return (
		<Post data={data} siteURL={siteURL} previous={previous} next={next} />
	);
};

export default PostTemplate;

export const pageQuery = graphql`
	query($id: String!) {
		blogPost(id: { eq: $id }) {
			id
			title
			parent {
				... on Mdx {
					timeToRead
				}
			}
			date(formatString: "MMMM DD, YYYY")
			author
			slug
			excerpt
			body
			media {
				childImageSharp {
					fluid(maxWidth: 1000) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	}
`;
