import React, {
    useState,
    useEffect,
    useRef,
    useLayoutEffect,
    useMemo,
} from "react";

/**
 * Saves the old theme for future use
 * @param {string} theme - Name of curent theme
 * @return {string} previousTheme
 */
function usePrevious(theme: string) {
    const ref = useRef<string>();
    useEffect(() => {
        ref.current = theme;
    });
    return ref.current;
}

/**
 * Gets user preferences from local storage
 * @param {string} key - localStorage key
 * @return {array} getter and setter for user preferred theme
 */
function useStorageTheme(key: string) {
    const [theme, setTheme] = useState<string>(
        // use stored theme; fallback to user preference
        localStorage.getItem(key) || "light"
    );

    // update stored theme
    useEffect(() => {
        localStorage.setItem(key, theme);
    }, [theme, key]);

    return [theme, setTheme] as const;
}

interface IThemeContext {
    theme: string;
    toggleTheme: () => void;
}

// create context
export const ThemeContext = React.createContext<IThemeContext>({
    theme: "light",
    toggleTheme: () => {},
});

// create context provider
export const ThemeProvider: React.FunctionComponent = ({ children }) => {
    const [theme, setTheme] = useStorageTheme("theme");

    // update root element class on theme change
    const oldTheme = usePrevious(theme);
    useLayoutEffect(() => {
        document.documentElement.classList.remove(`theme-${oldTheme}`);
        document.documentElement.classList.add(`theme-${theme}`);
    }, [theme, oldTheme]);

    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    const value = useMemo(
        () => ({
            theme,
            toggleTheme,
        }),
        [theme]
    );

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};
