/** 
 * You could also store the color for the sun in the storage and then serve it.
 * But it will be creating extra data, in the storgae, also as a variable in memory and being passed 
 * as props to children, adding additional over head.
 * 
 * If the color had some other special usecase in the component, not related to css theme, then you could argue to store and serve it from local storgae
 * 
 * I have just modified the color value for button in the dark-mode.scss
 * 
 * */

export const getUserSavedTheme = () => {
    const userSavedTheme = localStorage.getItem('themeName') === null ? 'default' : localStorage.getItem('themeName');
    return userSavedTheme;
}

/** 
 * Save our user selected theme to local storgae 
 * */
export const saveUserSavedTheme = (themeName) => {
    localStorage.setItem('themeName', themeName);
    return;
}

export const removeRootClass = () => {
    const rootElement = document.getElementById('root');
    rootElement.className = '';
}