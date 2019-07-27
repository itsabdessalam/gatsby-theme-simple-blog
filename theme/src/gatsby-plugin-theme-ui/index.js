import { hexToRgba } from "../utils/helpers";

const colors = {
	heading: "#3a3f46",
	text: "#3a3f46",
	background: "#ffffff",
	primary: "#4185fd",
	secondary: "#62acff",
	lightGray: "#dfe2e5",
	gray: "#636d78",
	modes: {
		dark: {
			heading: "#ffffff",
			text: "#d3d4d4",
			background: "#081523",
			primary: "#4185fd",
			secondary: "#62acff",
			lightGray: "#dfe2e5",
			gray: "#636d78"
		}
	}
};

export default {
	initialColorMode: "light",
	useCustomProperties: true,
	colors,
	buttons: {
		primary: {
			color: "#ffffff",
			bg: "primary",
			fontSize: 0,
			borderRadius: "3px",
			border: "none",
			padding: "14px 24px 12px",
			margin: "10px auto",
			display: "block",
			cursor: "pointer"
		},
		secondary: {
			color: "primary",
			bg: hexToRgba(colors.primary, 0.2),
			fontSize: 0,
			borderRadius: "3px",
			border: "none",
			padding: "14px 24px 12px",
			margin: "10px auto",
			display: "block",
			cursor: "pointer"
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
		heading: "600"
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
			color: "heading",
			fontWeight: "heading",
			fontSize: 5
		},
		h2: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 4
		},
		h3: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 3
		},
		h4: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 2
		},
		h5: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 1
		},
		h6: {
			color: "heading",
			fontWeight: "heading",
			fontSize: 0
		}
	}
};
