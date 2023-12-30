
export const saveDarkModeToLocalStorage = (isDarkModeOn: boolean) => {
    localStorage.setItem("isDarkModeOn", JSON.stringify(isDarkModeOn));
};

export const loadDarkModeFromLocalStorage = (): boolean => {
    const storedDarkMode = localStorage.getItem("isDarkModeOn");
    return storedDarkMode ? JSON.parse(storedDarkMode) : false;
};
