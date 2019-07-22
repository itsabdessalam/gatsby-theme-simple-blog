import { React } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Layout as StyledLayout, Main, Container } from "theme-ui";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";
const Layout = ({ children, cssClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            navLinks {
              text
              link
            }
          }
        }
      }
    `}
    render={data => (
      <StyledLayout>
        <Header
          siteTitle={data.site.siteMetadata.title}
          navLinks={data.site.siteMetadata.navLinks}
        />
        <Main>
          <Container>{children}</Container>
        </Main>
        <Footer />
      </StyledLayout>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  cssClass: PropTypes.string
};

Layout.defaultProps = {
  cssClass: ""
};

export default Layout;
