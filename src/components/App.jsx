import { Component } from 'react';
import { GlobalStyle } from 'GlobalStyle';
import { MainTitle, Wrapper } from './App.styled';
import { CharactersList } from './CharactersList/CharactersList';
import { searchAllCharacters } from 'services/api-service';

export class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    searchAllCharacters().then(data => {
      this.setState({ characters: data });
    });
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <MainTitle>I solemnly swear that I am up to no good</MainTitle>
        <CharactersList items={this.state.characters} />
      </Wrapper>
    );
  }
}
