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
      loadMorePosts: true
    }
  }
};
