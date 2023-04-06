import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FORM, BUTTON, INPUT } from './styled/FormaSearch.styled';

export class FormaSearch extends Component {
  state = {
    search: '',
  };

  hendleValue = event => {
    const { value } = event.currentTarget;
    this.setState({ search: value.toLocaleLowerCase() });
  };

  hendleSubmit = event => {
    event.preventDefault();

    if (this.state.search.trim() === '') {
      return toast.info('Введіть пошуковий запит', {
        position: 'bottom-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    this.props.submitInput(this.state.search);
    this.setState({ value: '' });
  };

  render() {
    return (
      <FORM onSubmit={this.hendleSubmit} autoComplete="off">
        <BUTTON>Search</BUTTON>
        <INPUT type="text" name="search" onChange={this.hendleValue} />
        <ToastContainer />
      </FORM>
    );
  }
}
