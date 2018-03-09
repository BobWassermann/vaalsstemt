import React, { Component } from 'react'
import styled, { injectGlobal } from 'styled-components'

const color_primary = '#3B19C3'

injectGlobal`
  @import url("https://use.typekit.net/gap5siv.css");

  body {
    background-color: ${color_primary};
    color: #fff;
    font-family: 'basic-sans', sans-serif;
    font-size: 20px;
    line-height: 1.3em;
  }

  a {
    color: #fff;
  }
`

const Wrap = styled.div`
  width: 90%;
  display: block;
  margin: 5% auto;
`

const Article = styled.article`
  width: 90%;
  max-width: 550px;
  text-align: justify;
  margin-top: 50px;
`

class App extends Component {
  render() {
    return (
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
      </Wrap>
    );
  }
}

export default App;
