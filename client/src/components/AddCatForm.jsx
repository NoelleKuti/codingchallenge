import React, {useState} from 'react'
import styled from 'styled-components'



const AddCatForm = () => {
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted!');
    }
    
    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
    }
    
    const [yearsOld, setYearsOld] = useState(0)
    const [monthsOld, setMonthsOld] = useState(0)
   
    
    return (
        <FormStyles>
            <form className='addCatForm column' onSubmit={(e) => {handleSubmit(e)}}>
                <div className='column formField'>
                  <label htmlFor='catName'>
                      name:
                  </label>
                  <input className='textInput' type='text' name='catName' placeholder="Add Cat's Name Here" onChange={(e) => { handleChange(e) }} />
                  <div className='row helperText'>
                      <p>*required</p>
                  </div>
              </div>
              <div className='column formField'>
                  <label htmlFor='description'>
                      description:
                  </label>
                  <input className='textInput' type='text' name='catName' placeholder="Add Description Of Cat" onChange={(e) => { handleChange(e) }} />
                  <div className=' row helperText'>
                      <p>*required</p>
                      <p>this many characters left...</p>
                  </div>
              </div> 
              <div className='column formField'>
                  <h3>age (if known):</h3>
                  <label htmlFor='years'>
                      years:
                  </label>
                  <input type='text' className='numberInput' value={yearsOld} readOnly/>
                    <div className='row numInputButtons'>
                        <button type='button' className='buttonDown' onClick={() => { setYearsOld(yearsOld - 1) }}>
                                -
                        </button>
                        <button type='button' className='buttonUp' onClick={() => { setYearsOld(yearsOld + 1) }}>
                            +
                        </button>
                    </div>
                  <label htmlFor='months'>
                      months:
                  </label>
                  <input type='text' className='numberInput' value={monthsOld} readOnly/>
                    <div className='row numInputButtons'>
                        <button type='button' className='buttonDown' onClick={() => { setMonthsOld(monthsOld - 1) }}>
                                -
                        </button>
                        <button type='button' className='buttonUp' onClick={() => { setMonthsOld(monthsOld + 1) }}>
                            +
                        </button>
                    </div>
              </div>
              
            </form> 

        </FormStyles>
  )
}

const FormStyles = styled.div`
    .addCatForm {
        width: 60%;
        margin: 0px auto;
    }

    .formField {
        width: 100%;
        padding: 1rem;
        label {
            width: 100%;
            display: flex;
            align-items: flex-start;
            font-size: 15px;
            padding: 5px;
        }
        .textInput {
            border: 1px solid black;
            font-size: 18px;
            padding: .5rem;
            border-radius: 15px;
        }
        .numberInput {
            border: 1px solid black;
            border-radius: 20px;
            width: 2rem;
            padding: 15px;
            font-size: 20px;
            text-align: center;
        }
        .helperText {
            font-size: 9px;
            color: red;
            width: 80%;
            align-self: flex-start;
            padding: 5px;
            justify-content: space-between;
        }
        .numInputButtons {
            width: 5rem;
            border: 2px solid black;
            button {
                width: 50%;
                background-color: transparent;
                border: none;
            }
            .buttonUp {
                background-color: green;
            }
            .buttonDown {
                background-color: red;
            }
        }
    }



`
export default AddCatForm