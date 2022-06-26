import React from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext';

const CatCard = (data) => {
    const { objectId, catData } = data;
    const { catName, description, yearsOld, monthsOld, xdoor, fixed, available, createdAt, updatedAt } = catData;
 
    const { deleteCat } = useAppContext();
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
            <div className='cardHeader row'>
                <h2>{catName}</h2>
                <button type='button' className='deleteButton' onClick={() =>  window.confirm(`You are about to delete ${catName}. Are you sure?`) && deleteCat(objectId) }>
                    X
                </button>
            </div>
            <p>{description}</p>
            <p>Age:
                {(yearsOld === 0 && monthsOld === 0)
                    ? 'unknown'
                    : ` ${yearsOld} years, ${monthsOld} months.`}
            </p>
            <p>{catName} <span>{fixed ? 'is fixed' : 'is not fixed'}</span> and is an <span>{xdoor}</span> cat.</p>
            <p>{catName} <span>{available ? 'is' : 'is not'}</span> currently available for adoption.</p>
            <div className='column timeStamps'>
                <p>Added: {timeStamps.updated}</p>
                <p>Last Updated: {timeStamps.updated}</p>
            </div>
        </CardStyles>
    )
}

const CardStyles = styled.div`
    width: 300px;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 20px;
    background-color: var(--50);
    margin: 1rem 1rem 1rem 1rem;
    position: relative;
    justify-content: space-between;
    .cardHeader {
        width: 90%;
        margin: 0px auto;   
    }
    span {
        font-weight: 700;
        text-decoration: underline;
    }
    .timeStamps {
        font-size: 15px;
        justify-self: flex-end;
    }
    .deleteButton {
        height: 4rem;
        width: 4rem;
        padding: 1rem;
        margin-right: 0;
        border: none;
        border-radius: 50%;
        background-color:var(--200);
        :hover {
            background-color:var(--300);
        }
    }

`
export default CatCard