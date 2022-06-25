import { TOGGLE_SHOW_FORM, CLEAR_FORM } from "./appActions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_FORM:
            return {
                ...state,
                showForm: (!state.showForm)
            }
        case CLEAR_FORM:
            const initialState = {
                showForm: false,
                catName: '',
                description: '',
                yearsOld: 0,
                monthsOld: 0,
                xdoor: '',
                fixed: false,
                available: true,
                showError: false,
                errorText: '',
            }     
    }
}

export default reducer;