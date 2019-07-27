import React from "react";
import { Link } from "gatsby";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { slugify, formatDate } from "../utils/helpers";

import "./PostList.css";
const PostList = ({ posts }) => {
	return (
		<Layout cssClass="posts blog-style">
			<SEO title="Posts" description="posts description" />
			<div className="main-content">
				<Styled.h1 className="heading-title">Posts</Styled.h1>
				<div className="posts-wrapper">
					{posts.map(({ node }, index) => {
						return (
							<div className="post" key={index.toString()}>
								<div className="post-content">
									<div className="post-meta">
										<span className="post-date">
											{formatDate(node.date, "en-US")}
										</span>
										<Link
											className="post-link"
											to={`${node.slug}`}
											style={{ textDecoration: "none" }}
										>
											<h3
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
													to={`/tags/${slugify(tag)}`}
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
				</div>
			</div>
		</Layout>
	);
};

export default PostList;
