import React, { Component } from "react";

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    const windowGlobal = typeof window !== "undefined";
    this.state = {
      windowGlobal,
      darkTheme:
        windowGlobal === true
          ? typeof localStorage.getItem("dark-theme") !== "undefined"
            ? JSON.parse(localStorage.getItem("dark-theme"))
            : false
          : false
    };
  }

  componentDidMount = () => {
    const { darkTheme } = this.state;
    const bodySelector = document.querySelector("body");
    bodySelector.dataset.theme = darkTheme ? "dark" : "light";
  };

  switchTheme = () => {
    const { windowGlobal, darkTheme } = this.state;

    const bodySelector = document.querySelector("body");
    if (windowGlobal === true) {
      localStorage.setItem("dark-theme", !darkTheme);
    }
    this.setState({
      darkTheme: !darkTheme
    });

    if (bodySelector.getAttribute("data-theme") && darkTheme === true) {
      bodySelector.dataset.theme = "light";
    } else {
      bodySelector.dataset.theme = "dark";
    }
  };

  render() {
    const { darkTheme } = this.state;
    return (
      <div className="theme-switcher">
        <label className="checkbox">
          <span className="label">Theme switcher</span>
          <input
            onClick={this.switchTheme}
            type="checkbox"
            name="toggle"
            value="toggle"
            aria-describedby="toggle"
          />
          <span id="toggle" className="checkbox-container">
            <svg width="1em" height="1em" viewBox="0 0 21 21">
              <path d="M16 10.5c0 3.037-2.465 5.5-5.5 5.5C7.46 16 5 13.537 5 10.5S7.46 5 10.5 5c3.035 0 5.5 2.463 5.5 5.5zm-5.5-8.016c-.867 0-1.684.208-2.465.516H8l2.5-3L13 3h-.039c-.78-.309-1.596-.516-2.461-.516zm0 16.032c.865 0 1.682-.208 2.461-.516H13l-2.5 3L8 18h.035c.781.309 1.598.516 2.465.516zm8.016-8.016c0-.864-.212-1.684-.516-2.464V8l3 2.5-3 2.5v-.036c.305-.78.516-1.6.516-2.464zm-16.032 0c0 .864.206 1.684.516 2.464V13l-3-2.5L3 8v.036c-.31.78-.516 1.6-.516 2.464zm13.858 5.842c.696-.69 1.211-1.484 1.628-2.312L18 14v4h-4l.028-.028c.828-.42 1.624-.934 2.314-1.63zM4.657 4.658c-.696.69-1.21 1.484-1.629 2.312L3 7V3h4l-.033.028c-.83.42-1.618.934-2.31 1.63zm0 11.685c.692.696 1.482 1.21 2.31 1.63L7 18H3v-4l.028.03c.42.829.934 1.622 1.63 2.313zM16.343 4.657c-.69-.696-1.486-1.21-2.314-1.63L14 3h4v4l-.03-.03c-.417-.829-.932-1.622-1.628-2.313z" />
            </svg>
            <span
              className={`checkbox-toggler ${
                darkTheme === true ? "active" : ""
              }`}
            />
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 18 17"
              className="active"
            >
              <path d="M13.36 11.694c-4.44 0-8.038-3.5-8.038-7.813 0-1.42.42-2.734 1.102-3.881C2.72 1.037 0 4.316 0 8.247c0 4.76 3.97 8.62 8.869 8.62 4.043 0 7.42-2.647 8.486-6.243-1.182.661-2.533 1.07-3.995 1.07z" />
            </svg>
          </span>
        </label>
      </div>
    );
  }
}

export default ThemeSwitcher;
