import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "./Post.css";

const PostTemplate = (data, next, previous) => {
  const post = data.data.blogPost;
  const mediaImg = post.media.childImageSharp;

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
          <div className="post-thumbnail">
            <Img fluid={mediaImg.fluid} />
          </div>
          <div className="post-content">
            <MDXRenderer>{post.body}</MDXRenderer>
          </div>
          {/* <div className="pagination">
            {prev && (
              <div className="previous">
                <Link className="link" to={`/${previous.slug}`}>
                  <span className="pagination-title">Previous</span>
                  <span className="article-title">{prev.title}</span>
                </Link>
              </div>
            )}
            {next && (
              <div className="next">
                <Link className="link" to={`/${next.slug}`}>
                  <span className="pagination-title">Next</span>
                  <span className="article-title">{next.title}</span>
                </Link>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </Layout>
  );
};
export default PostTemplate;
