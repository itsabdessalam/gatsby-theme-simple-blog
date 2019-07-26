import React from "react";
import { Styled, Container } from "theme-ui";
import "./Footer.css";

const Footer = ({ socialLinks }) => {
	return (
		<footer className="footer">
			<Container className="footer-inner">
				<div className="copyright">© 2019, Built with Gatsby</div>
				<Styled.ul className="social-links">
					{socialLinks.map((link, index) => {
						return (
							<li key={index.toString()}>
								<Styled.a href={link.link}>
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
