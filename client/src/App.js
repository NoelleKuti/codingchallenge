import './App.css';
import AddCatForm from './components/AddCatForm';
import { useAppContext } from './context/appContext';

function App() {
    const { showForm, toggleShowForm } = useAppContext();  
    return (
        <div className='App'>
            {showForm
                ? <AddCatForm />
                : <button type='button' onClick={() => {toggleShowForm()}}>
                    SHOW FORM
                </button>
            }
        </div>
    );
}

export default App;
