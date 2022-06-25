import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'



const AddCatForm = () => {
  
	const { toggleShowForm, handleTextInput, yearsOld, monthsOld, handleAgeChange } = useAppContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted!');
	}
	
	return (
		<FormStyles>
			<form className='addCatForm column' onSubmit={(e) => {handleSubmit(e)}}>
				<div className='column formField'>
				    <label htmlFor='catName'>
						name:
				    </label>
				  	<input className='textInput' type='text' name='catName' placeholder="Add Cat's Name Here" onChange={(e) => { handleTextInput(e) }} />
				  	<div className='row helperText'>
						<p>*required</p>
				  	</div>
			  	</div>
			  	<div className='column formField'>
				  	<label htmlFor='description'>
					  	description:
				  	</label>
				  	<input className='textInput' type='text' name='description' placeholder="Add Description Of Cat" onChange={(e) => { handleTextInput(e) }} />
					<div className=' row helperText'>
					  <p>*required</p>
					  <p>this many characters left...</p>
					</div>
			  	</div> 
			  	<div className='row formField'>
					<h3>age (if known):</h3>
					<div className='row'>
						<div className='column'>
							<label htmlFor='years'>
								years:
							</label>
							<div className='numInputBox'>
								<button type='button' className='buttonDown' onClick={() => { handleAgeChange({ fieldName: 'yearsOld', value: yearsOld - 1}) }} disabled={yearsOld === 0}>
									-
								</button>
								<input type='text' className='numberInput' value={yearsOld} readOnly />
								<button type='button' className='buttonUp' onClick={() => { handleAgeChange({ fieldName: 'yearsOld', value: yearsOld + 1}) }} disabled={yearsOld === 20}>
									+
								</button>
							</div>
						</div>
						<div className='column'>
							<label htmlFor='months'>
								months:
							</label>
							<div className='numInputBox'>
								<button type='button' className='buttonDown' onClick={() => { handleAgeChange({ fieldName: 'monthsOld', value: monthsOld - 1}) }} disabled={monthsOld === 0}>
									-
								</button>
								<input type='text' className='numberInput' value={monthsOld} readOnly />  
								<button type='button' className='buttonUp' onClick={() => { handleAgeChange({ fieldName: 'monthsOld', value: monthsOld + 1}) }} disabled={monthsOld === 11}>
									+
								</button>
							</div>
						</div>
					</div>
			  	</div>
			  	<button type='button' onClick={() => {toggleShowForm()}}>CLOSE FORM</button>
			</form> 

		</FormStyles>
  )
}

const FormStyles = styled.div`
	.addCatForm {
		max-width: 500px;
		margin: 0px auto;
		border: 1px solid black;
	}

	.formField {
		width: 80%;
		padding: 1rem;
		label, h3 {
			width: 100%;
			display: flex;
			align-items: flex-start;
			font-size: 15px;
			padding: 5px;
			font-weight: 500;
		}
		.textInput {
			border: 1px solid black;
			font-size: 18px;
			padding: .5rem;
			border-radius: 15px;
		}
		.helperText {
			font-size: 9px;
			color: red;
			width: 80%;
			align-self: flex-start;
			padding: 5px;
			justify-content: space-between;
		}
		.numberInput {
			border: 1px solid black;
			width: 1.5rem;
			padding: 15px;
			font-size: 20px;
			text-align: center;
		}
		.numInputBox {
			border: 2px solid blue;
			display: flex;
			flex-direction: row;

			button {
				background-color: transparent;
				border: none;
				padding: 1rem;
				width: 3rem;
				cursor: pointer;
				font-size: 1rem;
			}
			.buttonUp {
				background-color: green;
				border-radius: 0 20px 20px 0;
			}
			.buttonDown {
				background-color: red;
				border-radius: 20px 0 0 20px;
			}
		}
	}



`
export default AddCatForm