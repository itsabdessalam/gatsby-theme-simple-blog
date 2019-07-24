/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#3a3f46",
    background: "#fff",
    primary: "#639"
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
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
      textDecoration: "none"
    },
    h1: {
      color: "text",
      fontSize: 5,
      lineHeight: "heading"
    }
  }
};
