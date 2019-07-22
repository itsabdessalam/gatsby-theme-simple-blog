import React from "react";
import PropTypes from "prop-types";
import { Styled } from "theme-ui";
import { Link } from "gatsby";
import "./Nav.css";

const Nav = ({ title, links }) => (
  <nav className="navbar">
    <div className="logo">
      <Link to={"/"}>
        <div className="logo-inner">
          <h1>{title}</h1>
        </div>
      </Link>
    </div>
    <Styled.ul className="nav-links">
      {links.map((link, id) => (
        <li key={id}>
          <Link to={link.link}>{link.text}</Link>
        </li>
      ))}
    </Styled.ul>
  </nav>
);

Nav.propTypes = {
  links: PropTypes.array,
  title: PropTypes.string
};

Nav.defaultProps = { links: [], title: "Blog title" };

export default Nav;
