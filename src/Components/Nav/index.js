import React, { Component } from 'react'
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
  align-items: flex-start;
  z-index: 999;
  padding-top: 2%;
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

const topics = [
  {
    "key": "intro",
    "value": "Intro"
  },
  {
    "key": "duurzaamheid",
    "value": "Duurzaamheid"
  },
  {
    "key": "natuur-en-buitengebieden",
    "value": "Natuur en buitengebieden"
  },
  {
    "key": "veiligheid",
    "value": "Veiligheid"
  },
  {
    "key": "voorzieningen-locaties",
    "value": "Voorzieningen en locaties"
  },
  {
    "key": "toegankelijkheid-begaanbaarheid-bereikbaarheid",
    "value": "Toegankelijkheid, begaanbaarheid en bereikbaarheid"
  },
  {
    "key": "cultuur-evenementen-jongeren",
    "value": "Cultuur, evenementen en jongeren"
  },
  {
    "key": "financieel",
    "value": "Financieel"
  },
  {
    "key": "strategische-visie",
    "value": "Strategische visie"
  },
  {
    "key": "ondernemers-winkelaanbod",
    "value": "Ondernemers en winkelaanbod"
  },
  {
    "key": 'maatschappelijk',
    "value": 'Maatschappelijk'
  },
  {
    "key": 'participatie',
    "value": 'Participatie'
  },
  {
    "key": 'samenwerking',
    "value": 'Samenwerking'
  },
  {
    "key": 'educatie',
    "value": 'Educatie'
  }
]

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
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
      </Navigation>
    )
  }
}