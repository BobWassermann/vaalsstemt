import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  border-radius: 10px;
  display: flex;
  flex-flow: row wrap;
  flex: 100% 1;
  color: #fff;
  font-size: 16px;
  line-height: 1.2em;
  padding: 25px;
  box-sizing: border-box;
  margin: 2%;
  position: relative;
  padding-bottom: 80px;
`

const Party = styled.p`
  font-weight: 900;
  flex: 20% 1;
`

const Content = styled.div`
  flex: 80% 1;
`

export default class Card extends Component {
  render() {
    const { data, party } = this.props

    return (
      <CardContainer>
        <Party>{party}</Party>
        <Content>
          {data.map((x, i) => {
            switch(x.type) {
              case 'p': {
                return <p key={`module-${i}`}>{x.value}</p>
              }

              case 'list': {
                return (
                  <ul>
                    {x.value.map((y, i) =>
                      <li key={`list-${i}`}>{y}</li>
                    )}
                  </ul>
                )
              }
            }
          })}
        </Content>
      </CardContainer>
    )
  }
}