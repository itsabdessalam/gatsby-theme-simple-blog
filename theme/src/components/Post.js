import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Pagination from "../components/Pagination";
import "./Post.css";

const Post = ({ data, next, previous }) => {
  const post = data.blogPost;
  const mediaImg = post.media && post.media.childImageSharp;

  return (
    <Layout cssClass="single-post blog-style">
      <SEO title={post.title} description={post.excerpt.substring(0, 250)} />
      <div className="main-content">
        <div className="post-container">
          <div className="post-meta">
            <div className="post-meta-inner">
              <div className="author-meta">
                <div className="author-meta-related">
                  <span className="author-name">{post.author}</span>
                  <span className="post-date">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <h1
            className="post-title"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />

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
