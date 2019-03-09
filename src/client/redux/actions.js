export const FETCH_LANGUAGE = "fetch_language";

export const fetchLanguages = () => async (dispatch, getState) => {
    dispatch({
        type: FETCH_LANGUAGE,
        payload: getState.languages
    })
}