import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const FormFieldToggles = () => {
    const { xdoor, fixed, available, handleTextInput } = useAppContext();
    
    return (
      <FormToggleStyles>
            <div className='formField column'>
                <label htmlFor='xdoor'>Indoor or
                  Outdoor:
                </label>
                <div className='btnGroup'>
                    <button
                        type='button'
                        name='xdoor'
                        value='Indoor'
                        className={xdoor === 'Indoor' ? ' firstBtn active' : 'firstBtn'}
                        onClick={(e) => {handleTextInput(e)}}>
                        Indoor
                    </button>
                    <button type='button' name='xdoor' value='Indoor/Outdoor' className={xdoor === 'Indoor/Outdoor' ? 'midBtn active' : 'midBtn'} onClick={(e) => { handleTextInput(e) }}>
                        Both
                    </button>
                    <button
                        type='button' name='xdoor' value='Outdoor'
                        className={xdoor === 'Outdoor' ? 'lastBtn active' : 'lastBtn'} onClick={(e) => { handleTextInput(e) }}>
                        Outdoor
                    </button>
              </div>
            </div>
            <div className='formField column'>
                <label htmlFor='fixed'>
                    Is this cat fixed/neutered?
                </label>
                <div className='btnGroup yesNo'>
                    <button
                        type='button'
                        className={fixed === true ? 'yesBtn active' : 'yesBtn'}
                        name='fixed'
                        value='true'
                        onClick={(e) => { handleTextInput(e) }}>
                            yes
                    </button>
                    <button
                        type='button'
                        className={fixed === false ? 'noBtn active' : 'noBtn'}
                        name='fixed'
                        value='false'
                        onClick={(e) => { handleTextInput(e) }}>
                            no
                    </button>
                </div>
            </div>
            <div className='formField column'>
                <label htmlFor='fixed'>
                    Is this cat available for adoption?
                </label>
                <div className='btnGroup yesNo'>
                    <button
                        type='button'
                        className={available === true ? 'yesBtn active' : 'yesBtn'}
                        name='available'
                        value='true'
                        onClick={(e) => { handleTextInput(e) }}>
                            yes
                    </button>
                    <button
                        type='button'
                        className={available === false ? 'noBtn active' : 'noBtn'}
                        name='available'
                        value='false'
                        onClick={(e) => { handleTextInput(e) }}>
                            no
                    </button>
                </div>
            </div>
    </FormToggleStyles>
  )
}

const FormToggleStyles = styled.div`
    .btnGroup {
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex-wrap: nowrap;
        width: 50%;
        margin: 0px auto;
        button {
            border: none;
            text-align: center;
            width: 10rem;
        }
    }
    .yesNo {
        flex-direction: row;
    }
    .lastBtn {
        border-radius: 0 0 50px 50px;
    }
    .noBtn {
        border-radius: 0 50px 50px 0;
    }
    .yesBtn {
        border-radius: 50px 0 0 50px;
    }
    .midBtn {
        border-radius: 0;
    }
    .firstBtn {
        border-radius: 50px 50px 0 0;
    }

    .active {
        background-color: var(--500);
    }
    
    @media only screen and (min-width: 600px) {
        .btnGroup {
            flex-direction: row;
        }
        .lastBtn {
            border-radius: 0 50px 50px 0;
        }
        .midBtn {
            border-radius: 0;
        }
        .firstBtn {
            border-radius: 50px 0 0 50px;
        }
    }
`
export default FormFieldToggles