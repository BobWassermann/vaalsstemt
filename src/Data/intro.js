import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Article = styled.article`
  flex: 100% 1;
  width: 90%;
  text-align: justify;
  margin-top: 50px;
  display: block;
`

const Paragraph = styled.p`
  max-width: 550px;
`

export default class Intro extends Component {
  render() {
    return (
      <Fragment>
        <img
          src={require('../Assets/vaals-stemt_logo.svg')}
          alt="Vaals Stemt"
          width={230}
          height={158}
          mode='fit' />
        <Article>
          <Paragraph>Op 21 maart vinden de gemeenteraadsverkiezingen weer plaats. Inwoners van de gemeente Vaals kunnen stemmen op een zestal partijen. Mijn zus, Floor, en ik hebben de partijprogramma’s voor jullie doorgenomen. Op deze microsite vergelijken we de programma’s van iedere partij, ingedeeld in de belangrijkste overeenkomende onderwerpen.</Paragraph>
          <Paragraph>Klik op citaten die jouw voorkeur hebben. Wij houden vervolgens in de navigatie de tel bij.</Paragraph>
          <Paragraph><span style={{ opacity: 0.3, fontStyle: 'italic' }}>Lichtere citaten in een cursief schrift zijn door de desbetreffende partij op een later moment aan het programma toegevoegd.</span></Paragraph>
          <Paragraph>Foutje of misinterpretatie? Neem contact op met <a href="mailto:correcties@vaalsstemt.nl">correcties@vaalsstemt.nl</a></Paragraph>
          <Paragraph>— Bob en Floor</Paragraph>
        </Article>
      </Fragment>
    )
  }
}