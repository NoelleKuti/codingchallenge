import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_CATS, CHOOSE_CAT_TO_EDIT } from "./appActions";
import { initialState } from "./appContext";

const reducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_ADD_FORM:
            return {
                ...state,
                showAddForm: (!state.showAddForm)
            }
        case TOGGLE_EDIT_FORM:
            if (state.showEditForm === true) {
                return { ...initialState, showEditForm: (!state.showEditForm)}
            } else {
                return {
                    ...state,
                    showEditForm: (!state.showEditForm)
                }
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
                    form: {
                        ...state.form,
                        charsRemaining: 500 - e.target.value.length,
                        [e.target.name]: e.target.value,
                    }
                }
            } else if (e.target.name === 'fixed' || e.target.name === 'available') {
                const newBoolean = (e.target.value === 'true');
                return {
                    ...state,
                    form: {
                        ...state.form,
                        [e.target.name]: newBoolean,
                    } 
                }
            } else {
                    return {
                        ...state,
                        form: {
                            ...state.form,
                            [e.target.name]: e.target.value
                        }
                    }
                }
            
        case HANDLE_AGE_CHANGE:
            const { fieldName, value } = action.payload
            return {
                ...state,
                form: {
                    ...state.form,
                    [fieldName]: value
                }
            }
        case VIEW_CATS:
            const data = action.payload.data;
            return {
                ...state,
                catsData: data
            }
        case CHOOSE_CAT_TO_EDIT:
            const {catName, description, yearsOld, monthsOld, fixed, available, xdoor} = action.payload
            
            return {
                ...state,
                form: {
                    catName: catName,
                    description: description,
                    yearsOld: yearsOld,
                    monthsOld: monthsOld,
                    fixed: fixed,
                    available: available,
                    xdoor: xdoor,
                    charsRemaining: (500 - description.length)
                },
                catToEdit: action.payload
            }
    }
}

export default reducer;