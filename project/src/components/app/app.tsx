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

function App({cards, year, genre, title, alt, img}: Props): JSX.Element {
  return (
    <MainPage
      cards={cards}
      year={year}
      genre={genre}
      title={title}
      alt={alt}
      img={img}
    />
  );
}

export default App;

