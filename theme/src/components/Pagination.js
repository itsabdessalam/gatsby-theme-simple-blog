import React from "react";
import { Link } from "gatsby";
import "./Pagination.css";

const Pagination = ({ previous, next }) => (
  <div className="pagination">
    {previous && (
      <div className="previous">
        <Link className="link" to={`/${previous.node.slug}`}>
          <span className="pagination-title">Previous</span>
        </Link>
      </div>
    )}
    {next && (
      <div className="next">
        <Link className="link" to={`/${next.node.slug}`}>
          <span className="pagination-title">Next</span>
        </Link>
      </div>
    )}
  </div>
);

export default Pagination;
