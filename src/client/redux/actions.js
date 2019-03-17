export const SELECTED_LANGUAGE = "SELECTED_LANGUAGE";

export const updateSelectedLanguage = (lang) => async (dispatch, getState) => {
    dispatch({
        type: SELECTED_LANGUAGE,
        payload: lang
    })
}