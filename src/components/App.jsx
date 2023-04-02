import { Component } from 'react';
import { GlobalStyle } from './App.styled';
export class App extends Component {
  state = {
    input: '',
    array: [],
  };

  // componentDidMount() {
  //   this.setState({ input: this.state.input });
  // }

  hendleValue = e => {
    const { value } = e.currentTarget;
    this.setState({ input: value });
  };

  hendleSubmit = e => {
    e.preventDefault();
    console.log(this.state.input);
    fetch(
      // `https://pixabay.com/api/?key=30100311-f3864219c2c65e8e904a2d1d0&q=yellow+flowers&image_type=photo`
      `https://pixabay.com/api/q=${this.state.input}&key=30100311-f3864219c2c65e8e904a2d1d0&image_type=photo`
    )
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <GlobalStyle>
        <form onSubmit={this.hendleSubmit} autoComplete="off">
          <button>Search</button>
          <input type="text" name="search" onChange={this.hendleValue} />
        </form>
      </GlobalStyle>
    );
  }
}
