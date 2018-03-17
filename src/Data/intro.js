import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Article = styled.article`
  flex: 100% 1;
  width: 90%;
  max-width: 550px;
  text-align: justify;
  margin-top: 50px;
  display: block;
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
          <p>Op 21 maart vinden de gemeenteraadsverkiezingen weer plaats. Inwoners van de gemeente Vaals kunnen stemmen op een zestal partijen. Mijn zus, Floor, en ik hebben de partijprogramma’s voor jullie doorgenomen. Op deze microsite vergelijken we de programma’s van iedere partij, ingedeeld in de belangrijkste overeenkomende onderwerpen.</p>
          <p>Foutje of misinterpretatie? Neem contact op met <a href="mailto:oeps@vaalsstemt.nl">oeps@vaalsstemt.nl</a></p>
          <p>— Bob en Floor</p>
        </Article>
      </Fragment>
    )
  }
}