/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "../components/Link";
import { jsx, Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { slugify, formatDate } from "../utils/helpers";

import "./PostList.css";
const PostList = ({ posts, themeConfig, locale, tagsPath }) => {
	const { loadMorePosts } = themeConfig;
	const [postsPerPage, setPostsPerPage] = useState(
		loadMorePosts ? themeConfig.postsPerPage : posts.length
	);
	const [postsIncrementBy] = useState(themeConfig.postsIncrementBy);
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setCounter(posts.slice(0, postsPerPage).length);
	}, [postsPerPage, postsIncrementBy, counter]);

	const loadMore = () => {
		setCounter(posts.slice(0, postsPerPage + postsIncrementBy).length);
		setPostsPerPage(postsPerPage + postsIncrementBy);
	};

	return (
		<Layout cssClass="posts blog-style">
			<SEO title="Posts" description="posts description" />
			<div className="main-content">
				<Styled.h1 className="heading-title">Posts</Styled.h1>
				<div className="posts-wrapper">
					{posts.slice(0, postsPerPage).map(({ node }, index) => {
						return (
							<div className="post" key={index.toString()}>
								<div className="post-content">
									<div className="post-meta">
										<span
											sx={{
												color: "gray"
											}}
											className="post-date"
										>
											{formatDate(node.date, locale)}
										</span>
										<Link
											className="post-link"
											to={`${node.slug}`}
											style={{ textDecoration: "none" }}
										>
											<Styled.h3
												sx={{ fontSize: 2 }}
												className="post-title"
												dangerouslySetInnerHTML={{
													__html: node.title
												}}
											/>
										</Link>
									</div>
									<div className="post-tags">
										{node.tags.map((tag, index) => {
											return (
												<Link
													to={`${tagsPath}/${slugify(
														tag
													)}`}
													key={index.toString()}
												>
													{tag}
												</Link>
											);
										})}
									</div>
								</div>
							</div>
						);
					})}
					{counter < posts.length && loadMorePosts && (
						<div className="load-more-wrapper">
							<button
								sx={{ variant: "buttons.primary" }}
								tabIndex={0}
								onClick={loadMore}
								onKeyUp={() => {
									return false;
								}}
								className="load-more"
							>
								More posts
							</button>
						</div>
					)}
				</div>
			</div>
		</Layout>
	);
};

PostList.propTypes = {
	posts: PropTypes.array.isRequired,
	themeConfig: PropTypes.object.isRequired,
	locale: PropTypes.string,
	tagsPath: PropTypes.string.isRequired
};
export default PostList;
