import styled from '@emotion/styled'
import React from 'react'

type ContainerProps = {
  children: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const ContainerStyled = styled.div<ContainerProps>`
  margin: auto;
  @media screen and (min-width: 1440px){
    max-width: 1264px;
  }
  
  @media screen and (min-width: 1024px) and (max-width: 1439px){
    padding: 0 16px;
  }

  @media screen and (max-width: 1023px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <ContainerStyled {...props} data-testid="container">{props.children}</ContainerStyled>
  )
}

export default Container
