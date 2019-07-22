import React from "react";

import PostList from "../components/PostList";

const PostsTemplate = ({ pageContext: { posts } }) => (
  <PostList posts={posts} />
);

export default PostsTemplate;
