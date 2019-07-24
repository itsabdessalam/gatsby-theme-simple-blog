import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { slugify } from "../utils";
import "./PostList.css";
const PostList = ({ posts }) => {
  console.log({ posts });
  return (
    <Layout cssClass="posts blog-style">
      <SEO title="Posts" description="posts description" />
      <div className="main-content">
        <h1 className="heading-title">Posts</h1>
        <div className="posts-wrapper">
          {posts.map(({ node }) => (
            <div className="post" key={node.slug}>
              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">
                    {new Date(node.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric"
                    })}
                  </span>
                  <Link
                    className="post-link"
                    to={`${node.slug}`}
                    style={{ textDecoration: `none` }}
                  >
                    <h3
                      className="post-title"
                      dangerouslySetInnerHTML={{ __html: node.title }}
                    />
                  </Link>
                </div>
                <div className="post-tags">
                  {node.tags.map((tag, id) => (
                    <Link to={`/tags/${slugify(tag)}`} key={id}>
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default PostList;
