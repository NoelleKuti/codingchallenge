import { TOGGLE_SHOW_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_CATS } from "./appActions";

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
            if (e.target.name === 'description') {
                return {
                    ...state,
                    charsRemaining: 500 - e.target.value.length,
                    [e.target.name]: e.target.value,
                }
            } else if (e.target.name === 'fixed' || e.target.name === 'available') {
                const newBoolean = (e.target.value === 'true');
                return {
                    ...state,
                    [e.target.name]: newBoolean,
                }
            } else {
                    return {
                        ...state,
                        [e.target.name]: e.target.value
                    }
                }
            
        case HANDLE_AGE_CHANGE:
            const { fieldName, value } = action.payload
            return {
                ...state,
                [fieldName]: value
            }
        case VIEW_CATS:
            const data = action.payload.data;
            return {
                ...state,
                catsData: data
            }
    }
}

export default reducer;