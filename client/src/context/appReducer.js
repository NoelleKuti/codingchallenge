import { TOGGLE_SHOW_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE } from "./appActions";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_FORM:
            return {
                ...state,
                showForm: (!state.showForm)
            }
        case CLEAR_FORM:
            return {
                ...state,
                catName: '',
                description: '',
                charsRemaining: 500,
                yearsOld: 0,
                monthsOld: 0,
                xdoor: '',
                fixed: false,
                available: true,
                showError: false,
                errorText: '',
            }
        case HANDLE_TEXT_INPUT:
            const e = action.payload;
            return {
                ...state,
                [e.target.name]: e.target.value,
                charsRemaining: 500 - (state.description.length),
            }
        case HANDLE_AGE_CHANGE:
            const { fieldName, value } = action.payload
            return {
                ...state,
                [fieldName]: value
            }
    }
}

export default reducer;