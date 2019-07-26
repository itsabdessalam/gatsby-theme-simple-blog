import React from "react";
import PostList from "../components/PostList";

const PostsTemplate = ({ pageContext: { posts } }) => {
	return <PostList posts={posts} />;
};

export default PostsTemplate;
