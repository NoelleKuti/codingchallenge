import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'
import CatCard from './CatCard'

const CatsContainer = () => {
    const { fetchCats, catsData } = useAppContext();

    useEffect(() => {
        fetchCats();
    }, []);
    
    
    
        return (
      <ContainerStyles>
            {catsData.map((cat) => {
                return <CatCard key={'k'+cat._id} objectId={cat._id.toString()} catData={cat}/>
            })}
      </ContainerStyles>
  )
}

const ContainerStyles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem;
`
export default CatsContainer