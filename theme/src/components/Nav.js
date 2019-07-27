/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import Link from "../components/Link";
import ThemeSwitcher from "../components/ThemeSwitcher";
import "./Nav.css";

const Nav = ({ title, links }) => {
	return (
		<nav className="navbar">
			<div className="logo">
				<Link to={"/"}>
					<div className="logo-inner">
						<Styled.h1>{title}</Styled.h1>
					</div>
				</Link>
			</div>
			{links && (
				<Styled.ul className="nav-links">
					{links.map((link, index) => {
						return (
							<li key={index.toString()}>
								<Styled.a
									sx={{ variant: "links.gray" }}
									as={Link}
									to={link.link}
								>
									{link.text}
								</Styled.a>
							</li>
						);
					})}
					<ThemeSwitcher></ThemeSwitcher>
				</Styled.ul>
			)}
		</nav>
	);
};

Nav.propTypes = {
	links: PropTypes.array,
	title: PropTypes.string
};

Nav.defaultProps = { links: [], title: "Blog title" };

export default Nav;
