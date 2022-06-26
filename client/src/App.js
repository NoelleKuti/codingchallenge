import AddCatForm from './components/AddCatForm';
import { useAppContext } from './context/appContext';
import styled from 'styled-components'
import CatsContainer from './components/CatsContainer';

function App() {
    const { showForm, toggleShowForm } = useAppContext();  
    return (
        <AppStyles className='App'>
            {showForm
                ? <AddCatForm />
                : <div className='column'>
                    <button className='showFormButton' type='button' onClick={() => {toggleShowForm()}}>
                        add a cat
                    </button>
                    <CatsContainer />
                  </div>
            }
        </AppStyles>
    );
}

const AppStyles = styled.div`
    background-color: #e9ebee;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    display: flex;

    .showFormButton {
        width: 50%;
        font-size: 2rem;
        align-self: flex-start;
        margin-top: 3rem;
    }    
    
`
export default App;
