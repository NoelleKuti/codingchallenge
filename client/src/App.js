import AddCatForm from './components/AddCatForm';
import EditCatForm from './components/EditCatForm';
import { useAppContext } from './context/appContext';
import styled from 'styled-components'
import CatsContainer from './components/CatsContainer';

function App() {
    const { showAddForm, showEditForm, toggleShowForm, catToEdit } = useAppContext();  
    return (
        <AppStyles className='App'>
            {showAddForm && <AddCatForm/>}
            {showEditForm && <EditCatForm catToEdit={catToEdit} />}
            {showEditForm || showAddForm
                ? <></>
                : <div className='column container'>
                    <button className='showFormButton' type='button' onClick={() => {toggleShowForm('add')}}>
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
    .container {
        width: 100%;
        margin: 0px auto;
        border: 2px solid white;
    }  
    
`
export default App;
