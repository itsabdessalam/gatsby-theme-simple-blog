module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-simple-blog",
      options: {}
    }
  ],
  siteMetadata: {
    url: "https://abdessalam.dev",
    title: "Simple blog",
    author: "Abdessalam",
    description: "Simple blog theme starter",
    locale: "en-US",
    socialLinks: [
      {
        text: "Twitter",
        link: "https://twitter.com/gatsbyjs"
      },
      {
        text: "GitHub",
        link: "https://github.com/gatsbyjs"
      }
    ],
    navLinks: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "About",
        link: "/about"
      },
      {
        text: "Contact",
        link: "/contact"
      }
    ],
    themeConfig: {
      themeSwitcher: true,
      showNavLinks: true,
      readingTime: true,
      loadMorePosts: false,
      postsPerPage: 10,
      postsIncrementBy: 5
    }
  }
};
