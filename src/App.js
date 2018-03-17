import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Card from './Components/Card'
import Nav from './Components/Nav'
import Intro from './Data/intro'

const color_primary = '#3B19C3'
const color_light = '#F4F2FF'

injectGlobal`
  @import url("https://use.typekit.net/gap5siv.css");

  body {
    background-color: ${color_light};
    color: ${color_primary};
    font-family: 'basic-sans', sans-serif;
    font-size: 20px;
    line-height: 1.3em;
    width: 100%;
    overflow-x: hidden;
  }

  a {
    color: ${color_primary};
  }
`

const Wrap = styled.div`
  width: calc(96% - 250px);
  margin: 2% auto 0 calc(250px + 2%);
  box-sizing: border-box;
  display: block;
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
  justify-content: space-between;
  margin-bottom: 80px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid ${color_primary};
  border-radius: 10px;

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
      (
        path === 'intro' ||
        path === 'duurzaamheid' ||
        path === 'natuur-en-buitengebieden' ||
        path === 'veiligheid' ||
        path === 'voorzieningen-locaties' ||
        path === 'toegankelijkheid-begaanbaarheid-bereikbaarheid' ||
        path === 'cultuur-evenementen-jongeren' ||
        path === 'financieel' ||
        path === 'strategische-visie' ||
        path === 'ondernemers-winkelaanbod' ||
        path === 'maatschappelijk' ||
        path === 'participatie' ||
        path === 'samenwerking' ||
        path === 'educatie'
      )
    ) {
      this.setActive(path)
    }
  }

  setActive(active, t) {
    this.setState({
      active
    }, () => {
      if (active !== 'intro') {
        const data = require(`./Data/${active}.json`)
        this.setState({
          data
        }, () => {
          window.history.pushState({}, null, active)
          window.scrollTo(0, 0)
          document.title = `${t} — ${document.title}`
        })
      } else {
        window.history.pushState({}, null, '/')
        window.scrollTo(0, 0)
        document.title = 'Vaals Stemt'
      }
    })
  }

  render() {
    const { active, data } = this.state

    return (
      <Fragment>
        <Nav active={active} setActive={(active, title) => this.setActive(active, title)} />

        <Wrap>
          { active === 'intro' &&
            <Section>
              <Intro />
            </Section>
          }

          { active !== 'intro' &&
            data.map((module, i) => (
              <Section key={`section-${i}`}>
                <Title>{module.title}</Title>
                <Card
                  key={`card-${i}-party-vo`}
                  party="V&amp;O"
                  data={module.vo} />

                <Card
                  key={`card-${i}-party-cda`}
                  party="CDA"
                  data={module.cda} />

                <Card
                  key={`card-${i}-party-lokaal`}
                  party="Lokaal!"
                  data={module.lokaal} />

                <Card
                  key={`card-${i}-party-pvda`}
                  party="PvdA"
                  data={module.pvda} />

                <Card
                  key={`card-${i}-party-alternatief`}
                  party="Het Alternatief"
                  data={module.alternatief} />

                <Card
                  key={`card-${i}-party-nujlies`}
                  party="Nuj Lies Vroemen"
                  data={module.nuijlies} />

              </Section>
            ))
          }
        </Wrap>
      </Fragment>
    )
  }
}
