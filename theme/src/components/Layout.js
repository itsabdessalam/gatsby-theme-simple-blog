import { React } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { css, Global } from "@emotion/core";
import { Layout as StyledLayout, Main, Container, useThemeUI } from "theme-ui";
import { setGlobalStyle } from "../utils/globalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Layout.css";

const Layout = ({ children, cssClass }) => {
	const context = useThemeUI();
	const theme = context.theme;

	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						navLinks {
							text
							link
						}
						socialLinks {
							text
							link
						}
					}
				}
			}
		`
	);

	const siteMetadata = site.siteMetadata;

	return (
		<StyledLayout className={cssClass}>
			<Global
				styles={css`
					${setGlobalStyle(theme)}
				`}
			/>
			<Header
				siteTitle={siteMetadata.title}
				navLinks={siteMetadata.navLinks}
			/>
			<Main>
				<Container>{children}</Container>
			</Main>
			<Footer socialLinks={siteMetadata.socialLinks} />
		</StyledLayout>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	cssClass: PropTypes.string
};

Layout.defaultProps = {
	cssClass: ""
};

export default Layout;
