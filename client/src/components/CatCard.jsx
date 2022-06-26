import React from 'react'
import styled from 'styled-components'

const CatCard = ({catData}) => {
    const { catName, description, yearsOld, monthsOld, xdoor, fixed, available, createdAt, updatedAt } = catData;
    
    return (
        <CardStyles className='column'>
            <h2>{catName}</h2>
            <p>{description}</p>
            <p>Age:
                {(yearsOld === 0 && monthsOld === 0)
                    ? 'unknown'
                    : ` ${yearsOld} years, ${monthsOld} months.`}
            </p>
            <p>{catName} <span>{fixed ? 'is fixed' : 'is not fixed'}</span> and is an <span>{xdoor}</span> cat.</p>
            <p>{catName} <span>{available ? 'is' : 'is not'}</span> currently available for adoption.</p>
            <div className='column timeStamps'>
                <p>Added: {new Date(createdAt).
                    toLocaleString("en-US", {
                    localeMatcher: "best fit",
                    timeZoneName: "short"
                })}</p>
                <p>Last Updated: {new Date(updatedAt).
                    toLocaleString("en-US", {
                    localeMatcher: "best fit",
                    timeZoneName: "short"
                })}</p>
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
    span {
        font-weight: 700;
        text-decoration: underline;
    }

`
export default CatCard