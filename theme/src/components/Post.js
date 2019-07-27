import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Pagination from "../components/Pagination";
import SocialShare from "../components/SocialShare";
import { formatDate } from "../utils/helpers";
import "./Post.css";

const Post = ({ data, siteURL, next, previous }) => {
	const post = data.blogPost;
	const mediaImg = post.media && post.media.childImageSharp;
	const timeToRead = post.parent && post.parent.timeToRead;

	return (
		<Layout cssClass="single-post blog-style">
			<SEO
				title={post.title}
				description={post.excerpt.substring(0, 250)}
			/>
			<div className="main-content">
				<SocialShare
					siteURL={siteURL}
					postSlug={post.slug}
					postTitle={post.title}
				/>
				<div className="post-container">
					<Styled.h1
						className="post-title"
						dangerouslySetInnerHTML={{ __html: post.title }}
					/>
					<div className="post-meta">
						<div className="post-meta-inner">
							<div className="author-meta">
								<div className="author-meta-related">
									<span className="author-name">
										{post.author}
									</span>
								</div>
							</div>
							<div>
								<span className="post-date">
									{formatDate(post.date, "en-US")}
								</span>
								<span className="separator">•</span>
								<span className="reading-time">{`${timeToRead} min`}</span>
							</div>
						</div>
					</div>
					{post.media && (
						<div className="post-thumbnail">
							<Img fluid={mediaImg.fluid} />
						</div>
					)}
					<div className="post-content">
						<MDXRenderer>{post.body}</MDXRenderer>
					</div>
					<Pagination next={next} previous={previous} />
				</div>
			</div>
		</Layout>
	);
};
export default Post;
