import React from 'react'
import styled from 'styled-components'

const CatCard = ({catData}) => {
    const { id, catName, description, yearsOld, monthsOld, xdoor, fixed, available, dateAdded, dateLastUpdated } = catData;
    
    return (
        <CardStyles className='column' id={id}>
            <h2>{catName}</h2>
            <p>{description}</p>
            <p>Age: {yearsOld} years, {monthsOld} months</p>
            <p>${catName} {fixed ? 'is fixed' : 'is not fixed'} and is an {xdoor} cat. {catName} {available ? 'is' : 'is not'} currently available for adoption!</p>
            <div className='column timeStamps'>
                <p>Added: {dateAdded}</p>
                <p>Last Updated: {dateLastUpdated}</p>
            </div>

        </CardStyles>
    )
}

const CardStyles = styled.div`
    width: 300px;


`
export default CatCard