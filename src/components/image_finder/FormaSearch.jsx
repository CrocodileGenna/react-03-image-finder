import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        autoClose: 5000,
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
      <form onSubmit={this.hendleSubmit} autoComplete="off">
        <button>Search</button>
        <input type="text" name="search" onChange={this.hendleValue} />
        <ToastContainer />
      </form>
    );
  }
}
