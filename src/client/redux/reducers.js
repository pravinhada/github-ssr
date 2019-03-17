import {SELECTED_LANGUAGE} from "./actions";
import {combineReducers} from "redux";

const selectedLanguage = (state = [], action) => {
    switch (action.type) {
        case SELECTED_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
};

const languages = (state = [], action) => {
    return state;
};

export default combineReducers(
    {
        selectedLanguage: selectedLanguage,
        languages: languages
    }
);

