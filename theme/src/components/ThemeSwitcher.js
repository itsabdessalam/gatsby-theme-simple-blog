import React from "react";
import { useColorMode } from "theme-ui";
import "./ThemeSwitcher.css";

const ThemeSwitcher = () => {
	const [colorMode, setColorMode] = useColorMode();
	const isActive = colorMode === "dark" ? "active" : "";

	return (
		<button
			aria-label="switch theme button"
			className={`${"button-switcher " + isActive}`}
			onClick={() => {
				setColorMode(colorMode === "light" ? "dark" : "light");
			}}
		></button>
	);
};

export default ThemeSwitcher;
