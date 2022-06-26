import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_SHOW_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_CATS } from './appActions';
import axios from 'axios'

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
    catsData: [],
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
    const fetchCats = () => {
        axios.get('http://localhost:5000/api/v1/cats', {mode: 'cors', 'Cache-Control': 'no-cache'})
            .then((response) => {
                dispatch({
                    type: VIEW_CATS,
                    payload: response,
                })
            })
    }
    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleShowForm,
                clearForm,
                handleTextInput,
                handleAgeChange,
                fetchCats
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
