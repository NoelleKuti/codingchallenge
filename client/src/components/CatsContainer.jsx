import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useAppContext } from '../context/appContext'

const CatsContainer = () => {
    const { fetchCats } = useAppContext();
    
    useEffect(() => {
        fetchCats();
    }, []);
    
    
    
        return (
      <ContainerStyles>
          CatsContainer
      </ContainerStyles>
  )
}

const ContainerStyles = styled.div`
    


`
export default CatsContainer