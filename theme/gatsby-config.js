module.exports = options => {
  const { mdx = true } = options;

  return {
    siteMetadata: {
      title: "Blog Title Placeholder",
      author: "Name Placeholder",
      description: "Description placeholder",
      social: [
        {
          name: "twitter",
          url: "https://twitter.com/gatsbyjs"
        },
        {
          name: "github",
          url: "https://github.com/gatsbyjs"
        }
      ],
      navLinks: [
        {
          text: "Link 1",
          link: "/"
        },
        {
          text: "Link 2",
          link: "/"
        },
        {
          text: "Link 3",
          link: "/"
        }
      ]
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
            { resolve: "gatsby-remark-copy-linked-files" },
            { resolve: "gatsby-remark-numbered-footnotes" },
            { resolve: "gatsby-remark-smartypants" }
          ],
          remarkPlugins: [require("remark-slug")]
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
