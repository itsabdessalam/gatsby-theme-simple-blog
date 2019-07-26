import React from "react";
import { graphql } from "gatsby";
import PostList from "../components/PostList";

const PostsTemplate = ({ data }) => {
	return <PostList posts={data.allBlogPost.edges} />;
};

export default PostsTemplate;

export const pageQuery = graphql`
	query($tag: String!) {
		allBlogPost(
			sort: { fields: [date], order: DESC }
			filter: { tags: { in: [$tag] } }
		) {
			edges {
				node {
					id
					excerpt
					author
					slug
					title
					tags
					date(formatString: "MMMM DD, YYYY")
				}
			}
		}
	}
`;
