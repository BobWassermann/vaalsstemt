import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  flex: 30% 1;
  max-width: 30%;
  color: #3B19C3;
  font-size: 16px;
  line-height: 1.4em;
  padding: 25px;
  box-sizing: border-box;
  margin: 2% 0;
  position: relative;
  padding-bottom: 80px;
  border: 1px solid #3B19C3;
  align-content: flex-start;
  cursor: pointer;
`

const Party = styled.p`
  font-weight: 900;
  flex: 100% 1;
`

const Content = styled.div`
  flex: 100% 1;
`

export default class Card extends Component {
  render() {
    const { data, party } = this.props

    return (
      <CardContainer>
        <Party>{party}</Party>
        <Content>
          {data.length === 0 &&
            <p>Niet bekend gemaakt in partijprogramma.</p>
          }

          {data.length > 0 && data.map((x, i) => {
            switch(x.type) {
              case 'p': {
                return <p key={`module-${i}`}>{x.value}</p>
              }

              case 'list': {
                return (
                  <ul key={`module-${i}`}>
                    {x.value.map((y, j) =>
                      <li key={`module-list-item-${j}`}>{y}</li>
                    )}
                  </ul>
                )
              }

              default: {
                return (
                  <p key={`module-${i}`}>
                    Module niet gevonden.
                  </p>
                )
              }
            }
          })}
        </Content>
      </CardContainer>
    )
  }
}