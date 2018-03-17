import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  background-color: ${props => props.active ? '#3B19C3' : '#fff'};
  flex: ${props => props.colWidth ? `${props.colWidth} 1` : '31% 1' };
  max-width: ${props => props.colWidth || '31%'};
  color: ${props => props.active ? '#fff' : '#3B19C3'};
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
    const { activeCards, activeLayout, activeTopic, cardIndex, data, party, setPicker } = this.props
    let active = false
    let p = ''

    if (party === 'V&O') {
      p = 'vo'
    } else if (party === 'CDA') {
      p = 'cda'
    } else if (party === 'Lokaal!') {
      p = 'lokaal'
    } else if (party === 'PvdA') {
      p = 'pvda'
    } else if (party === 'Het Alternatief') {
      p = 'alternatief'
    } else if (party === 'Nuj Lies Vroemen') {
      p = 'nujlies'
    }

    if (activeCards.hasOwnProperty(activeTopic)) {
      if (activeCards[activeTopic].hasOwnProperty(cardIndex)) {
        if (activeCards[activeTopic][cardIndex] === p) {
          active = true
        }
      }
    }

    let colWidth = '31%'
    if (activeLayout === 'twocol') {
      colWidth = '48%'
    } else if (activeLayout === 'underneath') {
      colWidth = '100%'
    }

    return (
      <CardContainer
        active={active}
        colWidth={colWidth}
        onClick={() => setPicker(cardIndex, p, activeTopic)}>
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