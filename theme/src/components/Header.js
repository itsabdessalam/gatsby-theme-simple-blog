import PropTypes from "prop-types";
import React from "react";
import { Container } from "theme-ui";
import Nav from "./Nav";
const Header = ({ siteTitle, navLinks }) => (
  <header>
    <Container>
      <Nav title={siteTitle} links={navLinks} />
    </Container>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  navLinks: PropTypes.array
};

Header.defaultProps = {
  siteTitle: "",
  navLinks: []
};

export default Header;
