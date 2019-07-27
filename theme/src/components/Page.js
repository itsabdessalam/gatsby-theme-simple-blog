import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Styled } from "theme-ui";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "./Page.css";

const Page = ({ data, siteURL }) => {
	const page = data.blogPost;

	return (
		<Layout cssClass="single-page blog-style">
			<SEO
				title={page.title}
				description={page.excerpt.substring(0, 250)}
			/>
			<div className="main-content">
				<div className="post-container">
					<Styled.h1
						className="post-title"
						dangerouslySetInnerHTML={{ __html: page.title }}
					/>
					<div className="post-content">
						<MDXRenderer>{page.body}</MDXRenderer>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Page;
