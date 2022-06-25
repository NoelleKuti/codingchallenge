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
				<div className='formHeaders row'>
					<h2>Add A Cat</h2>
					<button type='button' className='closeFormButton' onClick={() => { toggleShowForm() }}>
						X
					</button>
				</div>
				<div className='column formField'>
				    <label htmlFor='catName'>
						name:
				    </label>
				  	<input className='textInput' type='text' name='catName' placeholder="Add Cat's Name" onChange={(e) => { handleTextInput(e) }} />
				  	<div className='row helperText'>
						<p>*required</p>
				  	</div>
			  	</div>
			  	<div className='column formField'>
				  	<label htmlFor='description'>
					  	description:
				  	</label>
				  	<textarea rows='8' className='textInput' name='description' placeholder="Add Description Of Cat" onChange={(e) => { handleTextInput(e) }} />
					<div className=' row helperText'>
					  <p>*required</p>
					  <p className={charsRemaining < 0 ? "danger" : "success"}>{charsRemaining} characters left...</p>
					</div>
			  	</div> 
			  	<div className='row formField'>
					<h3>age (if known):</h3>
					<div className='ageOptions row'>
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
				<button type='submit' className='submitButton'>SUBMIT</button>
			</form> 

		</FormStyles>
  )
}

const FormStyles = styled.div`
	margin: 0px auto;
	width: 100%;

	.addCatForm {
		width: 80%;
		max-width: 600px;
		margin: 4rem auto;
		border-radius: 50px;
		background-color: white;
	}

	.formHeaders {
		justify-content: space-between;
		width: 90%;
		margin: 0px auto;
		padding: 1rem;
		h2 {
			margin-left: 2rem;
			font-size: 2rem;
		}
	}

	.closeFormButton {
			width: 5rem;
			height: 5rem;
			padding: 1rem;
			margin: 0;
			cursor: pointer;
			border-radius: 50%;
			border: none;
			background-color: var(--50);
			color: var(--500);
			font-size: 1.5rem;
			:hover {
				background-color: var(--100);
			}
	}

	.formField {
		width: 80%;
		padding: 1.5rem;
		background-color: var(--50);
		margin: 10px auto;

		label, h3 {
			width: 100%;
			display: flex;
			align-items: flex-start;
			font-size: 15px;
			padding: 10px;
			font-weight: 600;
		}
		.textInput {
			border: 2px solid var(--500);
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

		.ageOptions {
			justify-content: space-around;
			width: 90%;
			margin: 0px auto;
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

	.submitButton {
		margin: 2rem auto 2rem auto;
	}
`

export default AddCatForm