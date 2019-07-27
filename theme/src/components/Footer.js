/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { jsx, Styled, Container } from "theme-ui";
import Link from "../components/Link";
import "./Footer.css";

const Footer = ({ socialLinks }) => {
	return (
		<footer className="footer">
			<Container className="footer-inner">
				<div
					className="copyright"
					sx={{
						color: "gray"
					}}
				>
					© 2019, Built with Gatsby
				</div>
				<Styled.ul className="social-links">
					{socialLinks.map((link, index) => {
						return (
							<li key={index.toString()}>
								<Styled.a as={Link} to={link.link}>
									{link.text}
								</Styled.a>
							</li>
						);
					})}
				</Styled.ul>
			</Container>
		</footer>
	);
};
export default Footer;
