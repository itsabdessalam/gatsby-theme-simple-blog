import React from "react";
import PropTypes from "prop-types";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Link from "../components/Link";
import Pagination from "../components/Pagination";
import SocialShare from "../components/SocialShare";
import { slugify, formatDate } from "../utils/helpers";
import "./Post.css";

const Post = ({ data, siteURL, locale, tagsPath, next, previous }) => {
	const post = data.blogPost;
	const mediaImg = post.media && post.media.childImageSharp;
	const timeToRead = post.parent && post.parent.timeToRead;

	return (
		<Layout cssClass="single-post blog-style">
			<SEO
				lang={locale}
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
									{formatDate(post.date, locale)}
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

					<div className="post-tags">
						{post.tags.map((tag, index) => {
							return (
								<Link
									to={`${tagsPath}/${slugify(tag)}`}
									key={index.toString()}
								>
									{tag}
								</Link>
							);
						})}
					</div>

					<Pagination next={next} previous={previous} />
				</div>
			</div>
		</Layout>
	);
};

Post.propTypes = {
	data: PropTypes.object.isRequired,
	siteURL: PropTypes.string.isRequired,
	locale: PropTypes.string,
	tagsPath: PropTypes.string.isRequired,
	previous: PropTypes.object,
	next: PropTypes.object
};

export default Post;
