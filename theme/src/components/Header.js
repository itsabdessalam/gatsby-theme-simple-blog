import PropTypes from "prop-types";
import React from "react";
import { Container } from "theme-ui";
import Nav from "./Nav";

const Header = ({ siteTitle, navLinks, themeConfig }) => {
	return (
		<header>
			<Container>
				<Nav
					themeConfig={themeConfig}
					title={siteTitle}
					links={navLinks}
				/>
			</Container>
		</header>
	);
};

Header.propTypes = {
	siteTitle: PropTypes.string,
	navLinks: PropTypes.array,
	themeConfig: PropTypes.object
};

Header.defaultProps = {
	siteTitle: "",
	navLinks: []
};

export default Header;
