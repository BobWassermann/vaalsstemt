import React, { Component } from 'react'
import topics from '../../topics'
import styled from 'styled-components'

const Navigation = styled.nav`
  position: fixed;
  color: #4A20F5;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  z-index: 1;
  padding-top: 2%;
  overflow-y: scroll;
`

const List = styled.div`
  width: 100%;
  transition: 0.3s ease-in;
  text-align: left;
  z-index: 2;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
`

const ListItem = styled.div`
  flex: 100% 1;
  cursor: pointer;
  margin: 1px 5px;
  padding: 10px;
  border-radius: 5px;
  background: ${props => props.active ? '#D4CBF5' : ''};
  transition: 0.2s ease-in;

  &:hover {
    background: rgba(212, 203, 245, 0.7);
  }
`

const Title = styled.h3`
  flex: 100% 1;
  width: 100%;
  color: #3B19C3;
  margin: 40px 0 1px 0;
  border-radius: 5px;
  padding: 10px;

  &:first-child {
    margin-top: 1px;
  }
`

const Layouts = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 1px 5px;
`

const Layout = styled.div`
  border-radius: 180px;
  width: 40px;
  height: 40px;
  background-color: ${props => props.active ? '#3B19C3' : '#F4F2FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  transition: 0.3s;
  cursor: pointer;
`

const SocialIcon = styled.a`
  margin-left: 10px;
  margin-right: 20px;
  display: flex;
  align-items: center;

  &:last-child {
    margin-right: 0px;
  }
`

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        <Title>Layouts</Title>
        <Layouts>
          <Layout active={this.props.activeLayout === 'threecol'} onClick={() => this.props.setActiveLayout('threecol')}>
            <svg width='10' height='12' viewBox='0 0 10 12' xmlns='http://www.w3.org/2000/svg'>
              <g id='Webdesign' fill='none' fillRule='evenodd' strokeLinecap='round'>
                <g id='Group-5' transform='translate(-10 -9)' stroke={this.props.activeLayout === 'threecol' ? '#F4F2FF' : '#3B19C3'}>
                  <g id='three-col' transform='translate(10 10)'>
                    <path d='M1,0 L1,10' id='Line' />
                    <path d='M5,0 L5,10' id='Line-Copy' />
                    <path d='M9,0 L9,10' id='Line-Copy-2' />
                  </g>
                </g>
              </g>
            </svg>
          </Layout>
          <Layout active={this.props.activeLayout === 'twocol'} onClick={() => this.props.setActiveLayout('twocol')}>
            <svg width='8' height='12' viewBox='0 0 8 12' xmlns='http://www.w3.org/2000/svg'>
              <g id='Webdesign' fill='none' fillRule='evenodd' strokeLinecap='round'>
                <g id='Group-4' transform='translate(-11 -9)' stroke={this.props.activeLayout === 'twocol' ? '#F4F2FF' : '#3B19C3'}>
                  <g id='two-col' transform='translate(11 10)'>
                    <path d='M1,0 L1,10' id='Line' />
                    <path d='M7,0 L7,10' id='Line-Copy-2' />
                  </g>
                </g>
              </g>
            </svg>
          </Layout>
          <Layout active={this.props.activeLayout === 'underneath'} onClick={() => this.props.setActiveLayout('underneath')}>
            <svg width='12' height='10' viewBox='0 0 12 10' xmlns='http://www.w3.org/2000/svg'>
              <g id='Webdesign' fill='none' fillRule='evenodd' strokeLinecap='round'>
                <g id='Group-3' transform='translate(-9 -10)' stroke={this.props.activeLayout === 'underneath' ? '#F4F2FF' : '#3B19C3'}>
                  <g id='underneath' transform='rotate(90 5 15)'>
                    <path d='M1,0 L1,10' id='Line' />
                    <path d='M5,0 L5,10' id='Line-Copy' />
                    <path d='M9,0 L9,10' id='Line-Copy-2' />
                  </g>
                </g>
              </g>
            </svg>
          </Layout>
        </Layouts>

        <Title>Voorkeur</Title>
        <p>V&amp;O: 10</p>

        <Title>Onderwerpen</Title>
        <List>
          {topics.map(topic => (
              <ListItem
                key={topic.key}
                active={this.props.active === topic.key}
                onClick={() => this.props.setActive(topic.key, topic.value)}>
                {topic.value}
              </ListItem>
          ))}
        </List>

        <Title>Delen</Title>
        <SocialIcon href="">
          <img
            src={require('../../Assets/social-icons/facebook.svg')}
            height={20}
            alt="Facebook icon" />
        </SocialIcon>

        <SocialIcon href="">
          <img
            src={require('../../Assets/social-icons/twitter.svg')}
            height={20}
            alt="Twitter icon" />
        </SocialIcon>

        <SocialIcon href="">
          <img
            src={require('../../Assets/social-icons/whatsapp.svg')}
            height={20}
            alt="Whatsapp icon" />
        </SocialIcon>

        <SocialIcon href="">
          <img
            src={require('../../Assets/social-icons/email.svg')}
            height={18}
            alt="Email icon" />
        </SocialIcon>
      </Navigation>
    )
  }
}