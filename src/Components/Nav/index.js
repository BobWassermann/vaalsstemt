import React, { Component } from 'react'
import styled from 'styled-components'
import arrow from '../../Assets/icon__arrow-down.svg'

const Navigation = styled.nav`
  position: fixed;
  background-color: #F4F2FF;
  color: #4A20F5;
  top: 0;
  left: 0;
  height: 55px;
  width: 200px;
  border-bottom-right-radius: 10px;
  font-size: 16px;
  display: flex;
  align-items: flex-start;
  z-index: 999;
`

const List = styled.div`
  width: 150px;
  height: ${props => props.open ? '300px' : '100%'};
  border-bottom-left-radius: ${props => props.open ? '10px' : '0px'};
  border-bottom-right-radius: ${props => props.open ? '10px' : '0px'};
  transition: 0.3s ease-in;
  text-align: center;
  background: #fff;
  z-index: 2;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const ListItem = styled.div`
  flex: 100% 1;
  cursor: pointer;
  padding: 1em 0;

  &:hover {
    background: #D4CBF5;
  }
`

const Arrow = styled.div`
  width: 50px;
  height: 100%;
  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 15px;
  transition: 0.3s ease-in;
  z-index: 1;
  transform: rotate(${props => props.open ? '-180' : '0'}deg);
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
      active: 'intro',
      navOpen: false
    }
  }

  toggleList() {
    console.log('click')
    this.setState({
      navOpen: !this.state.navOpen
    })
  }

  render() {
    return (
      <Navigation onClick={() => this.toggleList()}>
        <List open={this.state.navOpen}>
          {!this.state.navOpen &&
            <span>{topics.filter(x => x.key === this.state.active)[0].value}</span>
          }
          {this.state.navOpen &&
            topics.map(topic => (
              <ListItem key={topic.key}>{topic.value}</ListItem>
            ))
          }
        </List>
        <Arrow open={this.state.navOpen} />
      </Navigation>
    )
  }
}