import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  flex: 29% 1;
  min-width: 200px;
  color: #3B19C3;
  font-size: 16px;
  line-height: 1.2em;
  padding: 25px;
  box-sizing: border-box;
  margin: 2%;
  position: relative;
  padding-bottom: 80px;

  @media screen and (max-width: 450px) {
    flex: 100% 1;
  }
`

const Party = styled.p`
  font-weight: 900;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`

export default class Card extends Component {
  render() {
    const { data, party } = this.props

    return (
      <CardContainer>
          {data}
          <Party>{party}</Party>
      </CardContainer>
    )
  }
}