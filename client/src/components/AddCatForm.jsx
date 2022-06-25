import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'



const AddCatForm = () => {
  
	const { toggleShowForm, handleTextInput, yearsOld, monthsOld, handleAgeChange, charsRemaining} = useAppContext();



	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Submitted!');
	}
	
	return (
		<FormStyles>
			<form className='addCatForm column' onSubmit={(e) => { handleSubmit(e) }}>
				<button type='button' className='closeFormButton' onClick={() => { toggleShowForm() }}>
					X
				</button>
				
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
					  <p className={charsRemaining < 0 ? "danger" : "success"}>{charsRemaining} characters left...</p>
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
				<button type='submit'>SUBMIT</button>
			</form> 

		</FormStyles>
  )
}

const FormStyles = styled.div`
	.addCatForm {
		max-width: 500px;
		margin: 4rem auto;
		border: 1px solid black;
		border-radius: 50px;
		padding: 3rem;
		position: relative;
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
			font-weight: 600;
		}
		.textInput {
			border: 1px solid black;
			font-size: 18px;
			padding: .5rem;
			border-radius: 15px;
		}
		.helperText {
			font-size: 13px;
			color: grey;
			width: 80%;
			align-self: flex-start;
			padding: 0px;
			justify-content: space-between;
			font-weight: 500;
			.success {
				color: green;
			}
			.danger {
				color: red;
			}
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
				:disabled {
					background-color: grey;
					color: white;
				}
			}
			.buttonDown {
				background-color: red;
				border-radius: 20px 0 0 20px;
				:disabled {
					background-color: grey;
					color: white;
				}
			}
		}
	}

	.closeFormButton {
			width: 5rem;
			height: 5rem;
			padding: 1rem;
			cursor: pointer;
			border-radius: 50%;
			border: none;
			background-color: var(--50);
			color: var(--500);
			position: absolute;
			top: 1rem;
			right: 1rem;
		}

`
export default AddCatForm