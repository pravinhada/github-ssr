import {FETCH_LANGUAGE} from "./actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_LANGUAGE:
            return action.payload;
        default:
            return state;
    }
}