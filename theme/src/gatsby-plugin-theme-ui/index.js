/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
	initialColorMode: "light",
	useCustomProperties: true,
	colors: {
		text: "#3a3f46",
		background: "#ffffff",
		primary: "#4185fd",
		secondary: "#62acff",
		gray: "#dfe2e5",
		modes: {
			dark: {
				text: "#d3d4d4",
				background: "#081523",
				primary: "#4185fd",
				secondary: "#62acff"
			}
		}
	},
	fonts: {
		default:
			// eslint-disable-next-line prettier/prettier
			"-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\""
	},
	fontSizes: [16, 18, 20, 22, 27, 36],
	fontWeights: {
		text: "400",
		heading: "700"
	},
	lineHeights: {
		text: "1.45",
		heading: "1.1"
	},
	sizes: {
		container: 960
	},
	styles: {
		Layout: {
			backgroundColor: "background",
			color: "text",
			fontFamily: "default",
			fontSize: 1,
			lineHeight: "text"
		},
		Main: {
			margin: "0 auto",
			width: "100%",
			maxWidth: "container",
			fontFamily: "default"
		},
		Container: {
			maxWidth: "container",
			fontFamily: "default",
			padding: 10
		},
		ul: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			listStyle: "none"
		},
		a: {
			textDecoration: "none",
			color: "primary",
			"&:hover, &:focus": {
				color: "secondary"
			}
		},
		h1: {
			color: "text",
			fontWeight: 600,
			fontSize: 5
		},
		h2: {
			color: "text",
			fontWeight: 600,
			fontSize: 4
		},
		h3: {
			color: "text",
			fontWeight: 600,
			fontSize: 3
		},
		h4: {
			color: "text",
			fontWeight: 600,
			fontSize: 2
		},
		h5: {
			color: "text",
			fontWeight: 600,
			fontSize: 1
		},
		h6: {
			color: "text",
			fontWeight: 600,
			fontSize: 0
		}
	}
};
