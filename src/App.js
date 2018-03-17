import React, { Component, Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Card from './Components/Card'
import Nav from './Components/Nav'
import Intro from './Data/intro'
import topics from './topics'

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
  z-index: 10;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }
`

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      active: 'intro',
      activeCards: localStorage.getItem('vaalsStemt_activeCards') ? JSON.parse(localStorage.getItem('vaalsStemt_activeCards')) : {},
      activeLayout: localStorage.getItem('vaalsStemt_activeLayout') || 'threecol',
      counter: localStorage.getItem('vaalsStemt_counter') ? JSON.parse(localStorage.getItem('vaalsStemt_counter')) : {
        vo: 0,
        cda: 0,
        lokaal: 0,
        pvda: 0,
        alternatief: 0,
        nujlies: 0
      },
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
      this.setActive(path, topics.filter(x => x.key === path)[0].value)
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

  setActiveLayout(activeLayout) {
    this.setState({
      activeLayout
    }, () => {
      localStorage.setItem('vaalsStemt_activeLayout', activeLayout)
    })
  }

  setPicker(card, party, topic) {
    if (
      this.state.activeCards.hasOwnProperty(topic) &&
      this.state.activeCards[topic].hasOwnProperty(card) &&
      this.state.activeCards[topic][card] === party
    ) {
      let activeCards = this.state.activeCards
      let counter = this.state.counter[party]
      delete activeCards[topic][card]
      this.setState({
        activeCards,
        counter: {
          ...this.state.counter,
          [party]: this.state.counter[party] - 1
        }
      }, () => {
        localStorage.setItem('vaalsStemt_activeCards', JSON.stringify(this.state.activeCards))
        localStorage.setItem('vaalsStemt_counter', JSON.stringify(this.state.counter))
      })
    } else {
      let counter = this.state.counter
      counter[party] = this.state.counter[party] + 1
      if (
        this.state.activeCards.hasOwnProperty(topic) &&
        this.state.activeCards[topic].hasOwnProperty(card)
      ) {
        counter[this.state.activeCards[topic][card]] = counter[this.state.activeCards[topic][card]] - 1
      }

      this.setState({
        activeCards: {
          ...this.state.activeCards,
          [topic]: {
            ...this.state.activeCards[topic],
            [card]: party
          }
        },
        counter: counter
      }, () => {
        localStorage.setItem('vaalsStemt_activeCards', JSON.stringify(this.state.activeCards))
        localStorage.setItem('vaalsStemt_counter', JSON.stringify(this.state.counter))
      })
    }
  }

  render() {
    const { active, activeCards, activeLayout, counter, data } = this.state

    return (
      <Fragment>
        <Nav
          active={active}
          activeLayout={activeLayout}
          counter={counter}
          setActive={(active, title) => this.setActive(active, title)}
          setActiveLayout={layout => this.setActiveLayout(layout)} />

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
                  cardIndex={i}
                  party="V&amp;O"
                  data={module.vo}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

                <Card
                  key={`card-${i}-party-cda`}
                  cardIndex={i}
                  party="CDA"
                  data={module.cda}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

                <Card
                  key={`card-${i}-party-lokaal`}
                  cardIndex={i}
                  party="Lokaal!"
                  data={module.lokaal}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

                <Card
                  key={`card-${i}-party-pvda`}
                  cardIndex={i}
                  party="PvdA"
                  data={module.pvda}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

                <Card
                  key={`card-${i}-party-alternatief`}
                  cardIndex={i}
                  party="Het Alternatief"
                  data={module.alternatief}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

                <Card
                  key={`card-${i}-party-nujlies`}
                  cardIndex={i}
                  party="Nuj Lies Vroemen"
                  data={module.nuijlies}
                  activeCards={this.state.activeCards}
                  activeLayout={this.state.activeLayout}
                  activeTopic={this.state.active}
                  setPicker={(card, party, topic) => this.setPicker(card, party, topic)} />

              </Section>
            ))
          }
        </Wrap>
      </Fragment>
    )
  }
}
