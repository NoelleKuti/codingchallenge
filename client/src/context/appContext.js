import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_SHOW_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE } from './appActions';

const initialState = {
    showForm: false,
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

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleShowForm = () => {
        dispatch({ type: TOGGLE_SHOW_FORM });
    }
    
    const clearForm = () => {
        dispatch({ type: CLEAR_FORM})
    }
    const handleTextInput = (e) => {
        dispatch({
            type: HANDLE_TEXT_INPUT,
            payload: e
        })
    }
    const handleAgeChange = (data) => {
        dispatch({
            type: HANDLE_AGE_CHANGE,
            payload: data
        })
    }
    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForm,
                handleTextInput,
                handleAgeChange
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
