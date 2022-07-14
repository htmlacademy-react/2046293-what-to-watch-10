import MainPage from '../../pages/main-page/main-page';
import { CardFilms } from '../../types/card-film';


export type Props = {
  img: string;
  alt: string;
  title: string;
  genre: string;
  year: number;
  cards: CardFilms;
};

function App({img, alt, title, genre, year, cards}: Props): JSX.Element {
  return (
    <MainPage
      img={img}
      alt={alt}
      title={title}
      genre={genre}
      year={year}
      cards={cards}
    />
  );
}

export default App;

