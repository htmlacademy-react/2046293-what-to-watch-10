import MainPage from '../../pages/main-page/main-page';
import SignIn from '../../pages/sign-in/sign-in';
import MyList from '../../pages/my-list/my-list';
import Film from '../../pages/film/film';
import AddReview from '../../pages/add-review/add-review';
import CinemaPlayer from '../../pages/cinema-player/cinema-player';
import ErrorPage from '../../pages/error-page/error-page';
import { CardFilms } from '../../types/card-film';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from './const';
import PrivateRoute from '../private-route/private-route';

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
    <BrowserRouter>
      <Routes>

        <Route
          path = {AppRoute.Main}
          element = {<MainPage img={img} alt={alt} title={title} genre={genre} year={year} cards={cards} />}
        />

        <Route path = {AppRoute.SignIn} element= {<SignIn/>} />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList />
            </PrivateRoute>
          }
        />

        <Route path = {AppRoute.Film} element= {<Film/>} />

        <Route path = {AppRoute.AddReview} element= {<AddReview/>} />

        <Route path = {AppRoute.Player} element= {<CinemaPlayer/>} />

        <Route path = "*" element= {<ErrorPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

