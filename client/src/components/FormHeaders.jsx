import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const FormHeaders = () => {
    const { toggleShowForm } = useAppContext();
    return (
        <HeaderStyles>
        <div className='formHeaders row'>
            <h2>Add A Cat</h2>
            <button type='button' className='closeFormButton' onClick={() => { toggleShowForm() }}>
                X
            </button>
        </div>
        </HeaderStyles>
    )
}

const HeaderStyles = styled.div`
    .formHeaders {
		display: flex;
        flex-direction: row;
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
`
export default FormHeaders