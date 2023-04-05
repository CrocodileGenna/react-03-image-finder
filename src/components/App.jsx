import { Component } from 'react';
import { GlobalStyle } from './App.styled';
import { FormaSearch } from './image_finder/FormaSearch';
import { ImagesInfo } from './image_finder/ImagesInfo';
export class App extends Component {
  state = {
    input: '',
  };

  hendleValue = input => {
    this.setState({ input });
  };

  render() {
    const { input } = this.state;
    return (
      <GlobalStyle>
        <FormaSearch submitInput={this.hendleValue} />
        <ImagesInfo resValue={input} />
      </GlobalStyle>
    );
  }
}
