import styled from 'styled-components'
import React from 'react'
import { useAppContext } from '../context/appContext'

const FormFieldAge = () => {
    const { form, handleAgeChange } = useAppContext();
    const { yearsOld, monthsOld } = form;

    return (
      <AgeFieldStyles>
          <div className='row formField'>
            <h3>age (if known):</h3>
            <div className='ageOptions row'>
                <div className='column'>
                    <label className='subLabel' htmlFor='years'>
                        years:
                    </label>
                    <div className='numInputBox'>
                            <button
                                type='button'
                                className='buttonDown'
                                onClick={() => {
                                    handleAgeChange({ fieldName: 'yearsOld', value: yearsOld - 1 })
                                }}
                                disabled={yearsOld === 0}>
                            -
                        </button>
                        <input type='text' className='numberInput' value={yearsOld} readOnly />
                            <button
                                type='button'
                                className='buttonUp'
                                onClick={() => {
                                    handleAgeChange({ fieldName: 'yearsOld', value: yearsOld + 1 })
                                }}
                                disabled={yearsOld === 20}>
                            +
                        </button>
                    </div>
                </div>
                <div className='column'>
                    <label htmlFor='months' className='subLabel'>
                        months:
                    </label>
                    <div className='numInputBox'>
                            <button
                                type='button'
                                className='buttonDown'
                                onClick={() => {
                                    handleAgeChange({ fieldName: 'monthsOld', value: monthsOld - 1 })
                                }}
                                disabled={monthsOld === 0}>
                            -
                        </button>
                        <input type='text' className='numberInput' value={monthsOld} readOnly />  
                            <button
                                type='button'
                                className='buttonUp'
                                onClick={() => {
                                    handleAgeChange({ fieldName: 'monthsOld', value: monthsOld + 1 })
                                }}
                                disabled={monthsOld === 11}>
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </AgeFieldStyles>
  )
}

const AgeFieldStyles = styled.div`
    .numberInput {
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
				background-color: var(--200);
                color: black;
				border-radius: 0 20px 20px 0;
				:disabled {
					background-color: transparent;
					color: black;
                    border: 2px solid var(--500);
				}
			}
			.buttonDown {
				background-color: var(--500);
				border-radius: 20px 0 0 20px;
				:disabled {
					background-color: transparent;
					color: black;
                    border: 2px solid var(--500);
				}
			}
		}
`
export default FormFieldAge