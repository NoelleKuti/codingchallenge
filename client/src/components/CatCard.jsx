import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext';
import { MdDeleteOutline, MdOutlineModeEdit } from 'react-icons/md'


const CatCard = (data) => {
    const { objectId, catData } = data;
    const { catName, description, yearsOld, monthsOld, xdoor, fixed, available, createdAt, updatedAt } = catData;
 
    const { deleteCat, chooseCatToEdit } = useAppContext();
    const timeStamps = {
        created: new Date(createdAt).
            toLocaleString("en-US", {
                localeMatcher: "best fit",
                timeZoneName: "short"
            }),
        updated: new Date(updatedAt).
            toLocaleString("en-US", {
                localeMatcher: "best fit",
                timeZoneName: "short"
            })
    }

    return (
        <CardStyles className='column'>
            <div className='card'>
                <div className='cardHeader row'>
                    <h2>{catName}</h2>
                    <div className='buttonContainer row'>
                        <MdOutlineModeEdit
                        as='button'
                        className='button'
                            onClick={() => {
                                chooseCatToEdit(objectId, catData);
                            }} />
                           
                        <MdDeleteOutline
                        as='button' className='button' onClick={() => window.confirm(`You are about to delete ${catName}. Are you sure?`) && deleteCat(objectId)}/>
                    </div>
                </div>
                <div className='cardText'>
                    <p>{description}</p>
                    <p>Age:
                        {(yearsOld === 0 && monthsOld === 0)
                            ? ' unknown'
                            : ` ${yearsOld} years, ${monthsOld} months.`}
                    </p>
                    <p>{catName} <span>{fixed ? 'is fixed' : 'is not fixed'}</span> and is an <span>{xdoor}</span> cat.</p>
                    <p>{catName} <span>{available ? 'is' : 'is not'}</span> currently available for adoption.</p>
                </div>
                <div className='column timeStamps'>
                    <p>Added: {timeStamps.created}</p>
                    <p>Last Updated: {timeStamps.updated}</p>
                </div>
            </div>
        </CardStyles>
    )
}

const CardStyles = styled.div`
    .card {
        width: 400px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: var(--50);
        margin: 1rem 1rem 1rem 1rem;
        
        justify-content: space-between;
    }
    .cardHeader {
        width: 90%;
        margin: 0px auto; 
        padding: 1rem; 
        justify-content: space-between;
        h2 {
            margin-left: 10px;
            font-size: 25px;
        }
        .buttonContainer {
            width: 50%;
            align-items: flex-end;
            justify-content: flex-end;
            button {
                margin: 0 10px 10px 0;
            }
        }
    }
    .cardText {
        padding: 1rem;
    }
    span {
        font-weight: 700;
        text-decoration: underline;
    }
    .timeStamps {
        font-size: 10px;
        padding: 1rem;
        justify-self: flex-end;
        border-top: 1px solid var(--500);
        background-color: var(--100);
        border-radius: 0 0 20px 20px;
    }
    .button {
        width: 2rem;
        height: 2rem;
        padding: 1rem;
        border: none;
        margin: 5px 5px 5px 5px;
        border-radius: 50%;
        background-color:var(--300);
        color: white;
        align-content: center;
        cursor: pointer;
        :hover {
            background-color:var(--400);
        }
    }


`
export default CatCard