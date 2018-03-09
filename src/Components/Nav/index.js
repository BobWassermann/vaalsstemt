import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from '../../Assets/icon__arrow-down.svg'

const Navigation = styled.nav`
  position: fixed;
  background: #fff;
  color: #4A20F5;
  top: 0;
  left: 0;
  height: 55px;
  width: 200px;
  border-bottom-right-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: center;
  overflow: hidden;
`

const List = styled.div`
  width: 150px;
  text-align: center;
`

const Arrow = styled.div`
  width: 50px;
  height: 100%;
  background-color: #F4F2FF;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px;
`

const topics = [
  {
    'key': 'intro',
    'value': 'Intro'
  },
  {
    'key': 'tihange',
    'value': 'Tihange'
  },
  {
    'key': 'groene-initiatieven',
    'value': 'Groene initiatieven'
  },
  {
    'key': 'duurzaam-ondernemerschap',
    'value': 'Duurzaam ondernemerschap'
  }
]

export default class Nav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'intro'
    }
  }

  render() {
    return (
      <Navigation>
        <List>
          {topics.map(topic => {
            if (topic.key === this.state.active) {
              return <span key={topic.key}>{topic.value}</span>
            }
          })}
        </List>
        <Arrow />
      </Navigation>
    )
  }
}