import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import "./PostList.css";
const PostList = ({ posts }) => {
  return (
    <Layout cssClass="posts blog-style">
      <SEO title="Posts" description="posts description" />
      <div className="main-content">
        <h1 className="heading-title">Posts</h1>
        <div className="posts-wrapper">
          {posts.map(({ node }) => (
            <div className="post" key={node.slug}>
              <div className="post-content">
                <Link
                  className="post-link"
                  to={`/${node.slug}`}
                  style={{ textDecoration: `none` }}
                >
                  <h3
                    className="post-title"
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />
                  <div
                    className="post-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: `${node.excerpt.substring(0, 250)}`
                    }}
                  />
                </Link>
                <span className="post-author">
                  <div className="post-author-link">
                    <div>
                      <span className="author-name">{node.author}</span>
                      <span className="post-date">
                        {new Date(node.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric"
                        })}
                      </span>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostList;
