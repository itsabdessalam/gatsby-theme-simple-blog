const readingTime = require("gatsby-remark-reading-time");

module.exports = options => {
	const { mdx = true } = options;

	return {
		siteMetadata: {
			url: "https://abdessalam.dev",
			title: "Blog Title Placeholder",
			author: "Name Placeholder",
			description: "Description placeholder",
			locale: "en-US",
			socialLinks: [
				{
					text: "Twitter",
					link: "https://twitter.com/gatsbyjs",
					external: false
				},
				{
					text: "GitHub",
					link: "https://github.com/gatsbyjs",
					external: false
				}
			],
			navLinks: [
				{
					text: "Link 1",
					link: "/",
					external: false
				},
				{
					text: "Link 2",
					link: "/",
					external: false
				},
				{
					text: "Link 3",
					link: "/",
					external: false
				}
			],
			themeConfig: {
				themeSwitcher: true,
				showNavLinks: true,
				readingTime: true,
				loadMorePosts: true,
				highlightCodeLine: true,
				colors: {
					accentColor: "#ebedf0",
					textColor: "#ebedf0",
					borderColor: "#ebedf0",
					backgroundColor: "#ebedf0"
				}
			}
		},
		plugins: [
			mdx && {
				resolve: "gatsby-plugin-mdx",
				options: {
					extensions: [".mdx", ".md"],
					gatsbyRemarkPlugins: [
						{
							resolve: "gatsby-remark-images",
							options: {}
						},
						{
							resolve: "gatsby-remark-prismjs",
							options: {
								inlineCodeMarker: "÷"
							}
						},
						{ resolve: "gatsby-remark-copy-linked-files" },
						{ resolve: "gatsby-remark-numbered-footnotes" },
						{ resolve: "gatsby-remark-smartypants" },
						{
							resolve: "gatsby-remark-reading-time"
						}
					],
					remarkPlugins: [require("remark-slug"), readingTime]
				}
			},
			{
				resolve: "gatsby-source-filesystem",
				options: {
					path: options.contentPath || "content/posts",
					name: options.contentPath || "content/posts"
				}
			},
			{
				resolve: "gatsby-source-filesystem",
				options: {
					path: options.assetPath || "content/assets",
					name: options.assetPath || "content/assets"
				}
			},
			"gatsby-transformer-sharp",
			"gatsby-plugin-sharp",
			"gatsby-plugin-react-helmet",
			"gatsby-plugin-emotion",
			"gatsby-plugin-theme-ui"
		].filter(Boolean)
	};
};
