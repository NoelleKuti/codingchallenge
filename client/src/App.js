import './App.css';
import AddCatForm from './components/AddCatForm';
import { useAppContext } from './context/appContext';
import styled from 'styled-components'

function App() {
    const { showForm, toggleShowForm } = useAppContext();  
    return (
        <AppStyles className='App'>
            {showForm
                ? <AddCatForm />
                : <button className='showFormButton' type='button' onClick={() => {toggleShowForm()}}>
                    add a cat
                </button>
            }
        </AppStyles>
    );
}

const AppStyles = styled.div`
    .showFormButton {
        width: 50%;
        margin: 0px auto;
        padding: 1rem;
        background-color: var(--400);
        font-size: 2rem;
        color: white;
        border-radius: 20px;
        cursor: pointer;
        :hover {
            background-color: var(--500);
        }

    }    
    
`
export default App;
