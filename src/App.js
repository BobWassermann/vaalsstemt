import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'
import Data from './Data.json'
import Card from './Components/Card'
import Nav from './Components/Nav'

const color_primary = '#3B19C3'

injectGlobal`
  @import url("https://use.typekit.net/gap5siv.css");

  body {
    background-color: ${color_primary};
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
  width: 90%;
  display: block;
  margin: 130px auto 0;
`

const Article = styled.article`
  width: 90%;
  max-width: 550px;
  text-align: justify;
  margin-top: 50px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 64px;
  line-height: 1.3em;
  flex: 100% 1;

  @media screen and (max-width: 500px) {
    font-size: 32px;
  }
`

const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-top: 80px;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Wrap>
          <img
            src={require('./Assets/vaals-stemt_logo.svg')}
            alt="Vaals Stemt"
            width={230}
            height={158}
            mode='fit' />
          <Article>
            <p>Op 21 maart vinden de gemeenteraadsverkiezingen weer plaats. Inwoners van de gemeente Vaals kunnen stemmen op een zestal partijen. Mijn zus, Floor, en ik hebben de partijprogramma’s voor jullie doorgenomen. Op deze microsite vergelijken we de programma’s van iedere partij, ingedeeld in de belangrijkste overeenkomende onderwerpen.</p>
            <p>Foutje of misinterpretatie? Neem contact op met <a href="mailto:oeps@vaalsstemt.nl">oeps@vaalsstemt.nl</a></p>
            <p>— Bob en Floor</p>
          </Article>
          {
            Data.map((d, i) => {
              console.log(d)
              return (
                <Section key={`section-${i}`}>
                  <Title>{d.title}</Title>
                  <Card party="V&amp;O" data={d.vo} />
                  <Card party="CDA" data={d.cda} />
                  <Card party="Lokaal!" data={d.lokaal} />
                  <Card party="PvdA" data={d.pvda} />
                  <Card party="Het Alternatief" data={d.alternatief} />
                  <Card party="Nuj Lies Vroemen" data={d.nuijlies} />
                </Section>
              )
            })
          }
        </Wrap>
      </div>
    )
  }
}
