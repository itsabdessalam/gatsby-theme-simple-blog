import React from "react";
import PostList from "../components/PostList";

const PostsTemplate = ({ pageContext: { posts, themeConfig } }) => {
	return <PostList posts={posts} themeConfig={themeConfig} />;
};

export default PostsTemplate;
