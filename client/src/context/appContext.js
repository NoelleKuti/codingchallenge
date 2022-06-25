import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_SHOW_FORM, CLEAR_FORM } from './appActions';

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

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleShowForm = () => {
        dispatch({ type: TOGGLE_SHOW_FORM });
    }
    
    const clearForm = () => {
        dispatch({ type:CLEAR_FORM})
    }

    const handleAgeChange = (unit) => {
        if (unit === 'years' && 0 >= unit >= 20) {
            dispatch({
                type: CHANGE_YEARS_OLD,
                payload: newValue
            })
        }
    }
    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForm,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
