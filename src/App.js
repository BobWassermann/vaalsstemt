import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Data from './Data.json'
import Card from './Components/Card'
import Nav from './Components/Nav'
import Intro from './Data/intro'

const color_primary = '#3B19C3'
const color_light = '#F4F2FF'

injectGlobal`
  @import url("https://use.typekit.net/gap5siv.css");

  body {
    background-color: ${color_light};
    color: #fff;
    font-family: 'basic-sans', sans-serif;
    font-size: 20px;
    line-height: 1.3em;
    width: 100%;
    overflow-x: hidden;
  }

  a {
    color: #fff;
  }
`

const Wrap = styled.div`
  width: calc(90% - 250px);
  margin: 2% auto 0 calc(250px + 5%);
  box-sizing: border-box;
  display: block;
  padding: 5%;
  background-color: ${color_primary};
  border-radius: 10px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.3em;
  flex: 100% 1;
  margin: 0 0 5%;

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 80px;

  &:last-child {
    margin-bottom: 0;
  }
`

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'intro',
      data: []
    }
  }

  componentDidMount() {
    const path = window.location.pathname.replace('/', '')
    if (
      path &&
      path === 'intro' ||
      path === 'duurzaamheid' ||
      path === 'natuur_buitengebieden' ||
      path === 'veiligheid' ||
      path === 'voorzieningen' ||
      path === 'toegankelijkheid' ||
      path === 'cultuur' ||
      path === 'financieel' ||
      path === 'strategische_visie' ||
      path === 'ondernemers_winkelaanbod' ||
      path === 'maatschappelijk' ||
      path === 'participatie' ||
      path === 'samenwerking' ||
      path === 'educatie'
    ) {
      this.setActive(path)
    }
  }

  setActive(active) {
    this.setState({
      active
    }, () => {
      if (active !== 'intro') {
        const data = require(`./Data/${active}.json`)
        this.setState({
          data
        }, () => window.history.pushState({}, null, active))
      } else {
        window.history.pushState({}, null, '/')
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Nav active={this.state.active} setActive={active => this.setActive(active)} />
        <Wrap>
          { this.state.active === 'intro' && <Intro /> }
          { this.state.active !== 'intro' &&
            this.state.data.map((module, i) => (
              <Section key={`section-${i}`}>
                <Title>{module.title}</Title>
                <Card party="V&amp;O" data={module.vo} />
                <Card party="CDA" data={module.cda} />
                <Card party="Lokaal!" data={module.lokaal} />
                <Card party="PvdA" data={module.pvda} />
                <Card party="Het Alternatief" data={module.alternatief} />
                <Card party="Nuj Lies Vroemen" data={module.nuijlies} />
              </Section>
            ))
          }
        </Wrap>
      </Fragment>
    )
  }
}
