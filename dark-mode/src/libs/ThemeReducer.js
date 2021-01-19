/** Our global lib function */
import {getUserSavedTheme, saveUserSavedTheme, removeRootClass} from './funcs';

/** initialise our theme state from local storage*/
const initialState = {
  themeName: getUserSavedTheme(),
};

/** Our dispatcher reducer */
function reducer(state, action) {

  if (action.type === 'saveTheme') {
    
    /** Save our theme to storage */
    saveUserSavedTheme(action.payload.themeName);

    /** Remove class from root element */
    removeRootClass();

    /** Return our new state */
    return {
      themeName: action.payload.themeName,
    }
  }
  return null;
}

export default { reducer, initialState };