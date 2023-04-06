import { CARD_A, IMG, INFO_DIV } from './OneCard.styled';

export function OneCard(fullImg, alt, likes, downloads, tags) {
  return (
    <>
      <CARD_A onClick={e => console.log(e)}>
        <IMG src={fullImg} alt={alt} />
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
      </CARD_A>
    </>
  );
}
