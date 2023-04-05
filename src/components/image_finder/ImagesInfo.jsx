import { Component } from 'react';
import { FetchFunction } from './FetchFunction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  CONTAINER_UL,
  CARD_LI,
  IMG,
  INFO_DIV,
} from './styled/ImagesInfo.styled';

export class ImagesInfo extends Component {
  state = {
    hits: null,
    page: 1,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { page } = this.state;
    const prevVal = prevProps.resValue;
    const currentVal = this.props.resValue;
    const prevPage = prevState.page;

    if (prevVal !== currentVal) {
      FetchFunction(currentVal, page)
        .then(res => res.json())
        .then(res => {
          const { hits } = res;

          if (hits.length === 0) {
            return toast.error(
              `За запитом "${currentVal}" зображень не знайдено. `,
              {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              }
            );
          } else {
            this.setState({ hits: hits });
            return toast.success(
              `За пошуком "${currentVal}" знайдено ${res.totalHits} зображень`,
              {
                position: 'bottom-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
              }
            );
          }
        })
        .catch(error => console.error(error));
    }

    if (prevPage !== page) {
      FetchFunction(currentVal, page)
        .then(res => res.json())
        .then(res => {
          const { hits } = res;
          this.setState({ hits: this.state.hits.concat(hits) });
          return;
        })
        .catch(error => console.error(error));
    }
  };

  render() {
    const { hits } = this.state;
    return (
      hits && (
        <>
          <CONTAINER_UL>
            {hits.map(({ id, previewURL, likes, user, downloads, tags }) => {
              return (
                <CARD_LI key={id}>
                  <IMG src={previewURL} alt={user} width="250px" />
                  <INFO_DIV>
                    <p>
                      likes: <span>{likes}</span>
                    </p>
                    <p>
                      downloads: <span>{downloads}</span>
                    </p>

                    <p>
                      tags: <span>{tags}</span>
                    </p>
                  </INFO_DIV>
                </CARD_LI>
              );
            })}
          </CONTAINER_UL>
          {hits.length !== 0 && (
            <button
              onClick={() => this.setState({ page: this.state.page + 1 })}
            >
              more
            </button>
          )}

          <ToastContainer />
        </>
      )
    );
  }
}
