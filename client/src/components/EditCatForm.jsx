import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import FormHeaders from './FormHeaders.jsx'
import FormFieldText from './FormFieldText'
import FormFieldAge from './FormFieldAge'
import FormFieldToggles from './FormFieldToggles'

const EditCatForm = () => {

    const { catToEdit, editCat, form } = useAppContext();
    const { _id, catName, description, monthsOld, yearsOld, xdoor, fixed, available } = catToEdit;


	const handleSubmit = (e) => {
        e.preventDefault();
       
        const formData = {
            ...form
        }

        editCat(_id, formData);
	}
	
	return (
		<FormStyles>
			<form className='addCatForm column' onSubmit={(e) => { handleSubmit(e) }}>
                <FormHeaders formType='edit' />
                <FormFieldText catName={catName} description={description} />
                <FormFieldAge yearsOld={yearsOld} monthsOld={monthsOld} />
                <FormFieldToggles xdoor={xdoor} fixed={fixed} available={available} />
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
            margin-bottom: 2rem;
		}
        .subLabel {
            margin-bottom: 0;
        }
	}

	.submitButton {
		margin: 2rem auto 2rem auto;
	}
`

export default EditCatForm