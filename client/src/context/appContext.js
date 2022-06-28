import React, { createContext, useContext, useReducer } from 'react'
import reducer from './appReducer';
import { TOGGLE_ADD_FORM, TOGGLE_EDIT_FORM, CLEAR_FORM, HANDLE_TEXT_INPUT, HANDLE_AGE_CHANGE, VIEW_CATS, CHOOSE_CAT_TO_EDIT } from './appActions';
import axios from 'axios'

const initialState = {
    showAddForm: false,
    showEditForm: false,
    form: {
        catName: '',
        description: '',
        charsRemaining: 500,
        yearsOld: 0,
        monthsOld: 0,
        xdoor: 'Indoor/Outdoor',
        fixed: false,
        available: true,
    },
    showError: false,
    errorText: '',
    catsData: [],
    catToEdit: {}
}

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleShowForm = (formType) => {
        if (formType === 'add') {
            dispatch({ type: TOGGLE_ADD_FORM });
        } else if (formType === 'edit') {
            dispatch({ type: TOGGLE_EDIT_FORM})
        }
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
        axios.get('http://localhost:5000/api/v1/cats', { crossdomain: true })
            .then((response) => {
                dispatch({
                    type: VIEW_CATS,
                    payload: response.data,
                })
            })
    }

    const addCat = (formData) => {
        axios.post('http://localhost:5000/api/v1/cats', {...formData})
            .then((response) => {
                console.log(response.data);
            })
            .then(() => {
                dispatch({type: TOGGLE_ADD_FORM})
            })
    }

    const deleteCat = (objectId) => {
        axios.delete('http://localhost:5000/api/v1/cats/' + objectId)
            .then(() => {
                fetchCats();
            })
    }

    const chooseCatToEdit = (objectId, data) => {
        toggleShowForm('edit');
        dispatch({ type: CHOOSE_CAT_TO_EDIT, payload: data })
    }

    const editCat = (objectId, data) => {
        console.log(objectId);
        axios.patch('http://localhost:5000/api/v1/cats/' + objectId, data)
            .then((response) => {
                dispatch({type: TOGGLE_EDIT_FORM})
                console.log('this one!', response.data);
                fetchCats();
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
                fetchCats,
                deleteCat,
                addCat,
                editCat,
                chooseCatToEdit,
            }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext);
}

export { AppProvider, initialState, useAppContext }
