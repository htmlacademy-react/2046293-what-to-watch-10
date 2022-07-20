import {Link} from 'react-router-dom';
import {AppRoute} from '../../components/app/const';

export default function ErrorPage(): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">

          <ul className="user-block">
            <li className="user-block__item">
            </li>
          </ul>
        </header>
      </div>
      <section>
        <h2 className="film-card__title">404. Page not found</h2>
        <Link to={AppRoute.Main}>Вернуться на главную</Link>
      </section>
    </section>
  );
}
