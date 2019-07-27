/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";
import { jsx, Styled } from "theme-ui";
import utils from "../utils/helpers";
import "./SocialShare.css";

const SocialShare = ({ siteURL, postTitle, postSlug }) => {
	const parsedPostSlug = utils.sanitize(postSlug);
	const parsedPostTitle = utils.sanitize(postTitle);
	const openWindow = settings => {
		return e => {
			window.open(
				e.href,
				settings.title,
				`width=${settings.sizes.w},height=${settings.sizes.h}`
			);
			return true;
		};
	};
	return (
		<div className="social-share">
			<ul className="social-share-links">
				<li className="twitter-share">
					<Styled.a
						sx={{
							color: "#dfe2e5",
							"&:hover, &:focus": {
								color: "primary"
							}
						}}
						href={`http://twitter.com/share?text=${parsedPostTitle}&url=${`${siteURL}${parsedPostSlug}`}`}
						onClick={openWindow({
							title: "twitter-share",
							sizes: { w: 550, h: 235 }
						})}
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="56.693px"
							height="56.693px"
							enableBackground="new 0 0 56.693 56.693"
							version="1.1"
							viewBox="0 0 56.693 56.693"
							xmlSpace="preserve"
							role="img"
						>
							<path
								fill="currentColor"
								d="M52.837,15.065c-1.811,0.805-3.76,1.348-5.805,1.591c2.088-1.25,3.689-3.23,4.444-5.592c-1.953,1.159-4.115,2-6.418,2.454  c-1.843-1.964-4.47-3.192-7.377-3.192c-5.581,0-10.106,4.525-10.106,10.107c0,0.791,0.089,1.562,0.262,2.303  c-8.4-0.422-15.848-4.445-20.833-10.56c-0.87,1.492-1.368,3.228-1.368,5.082c0,3.506,1.784,6.6,4.496,8.412  c-1.656-0.053-3.215-0.508-4.578-1.265c-0.001,0.042-0.001,0.085-0.001,0.128c0,4.896,3.484,8.98,8.108,9.91  c-0.848,0.23-1.741,0.354-2.663,0.354c-0.652,0-1.285-0.063-1.902-0.182c1.287,4.015,5.019,6.938,9.441,7.019  c-3.459,2.711-7.816,4.327-12.552,4.327c-0.815,0-1.62-0.048-2.411-0.142c4.474,2.869,9.786,4.541,15.493,4.541  c18.591,0,28.756-15.4,28.756-28.756c0-0.438-0.009-0.875-0.028-1.309C49.769,18.873,51.483,17.092,52.837,15.065z"
							/>
						</svg>
					</Styled.a>
				</li>
				<li className="facebook-share">
					<Styled.a
						sx={{
							color: "#dfe2e5",
							"&:hover, &:focus": {
								color: "primary"
							}
						}}
						href={`https://www.facebook.com/sharer/sharer.php?u=${`${siteURL}${parsedPostSlug}`}`}
						onClick={openWindow({
							title: "facebook-share",
							sizes: { w: 580, h: 296 }
						})}
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							width="32px"
							height="32px"
							enableBackground="new 0 0 32 32"
							version="1.0"
							viewBox="0 0 32 32"
							xmlSpace="preserve"
							role="img"
						>
							<g>
								<path
									fill="currentColor"
									d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
								/>
								<path
									id="f"
									fill="#FFFFFF"
									d="M22,32V20h4l1-5h-5v-2c0-2,1.002-3,3-3h2V5c-1,0-2.24,0-4,0c-3.675,0-6,2.881-6,7v3h-4v5h4v12H22z"
								/>
							</g>
						</svg>
					</Styled.a>
				</li>
				<li className="linkedin-share">
					<Styled.a
						sx={{
							color: "#dfe2e5",
							"&:hover, &:focus": {
								color: "primary"
							}
						}}
						href={`https://www.linkedin.com/shareArticle?url=${`${siteURL}/${parsedPostSlug}`}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							id="Layer_1"
							width="32px"
							height="32px"
							enableBackground="new 0 0 32 32"
							version="1.0"
							viewBox="0 0 32 32"
							xmlSpace="preserve"
							role="img"
						>
							<g>
								<path
									fill="currentColor"
									d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
								/>
								<g>
									<rect
										width="4"
										height="14"
										x="7"
										y="11"
										fill="#FFFFFF"
									/>
									<path
										fill="#FFFFFF"
										d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z"
									/>
									<circle
										cx="9"
										cy="8"
										r="2"
										fill="#FFFFFF"
									/>
								</g>
							</g>
						</svg>
					</Styled.a>
				</li>
			</ul>
		</div>
	);
};
export default SocialShare;

SocialShare.propTypes = {
	siteURL: PropTypes.string.isRequired,
	postTitle: PropTypes.string.isRequired,
	postSlug: PropTypes.string.isRequired
};
