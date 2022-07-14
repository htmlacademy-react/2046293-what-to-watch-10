
import React from 'react';
import CardFilm from '../../components/main-page/card-film';
//import CinemaPlayer from '../../components/main-page/cinema-player';
import Promo from '../../components/main-page/promo';
import Genres from '../../components/main-page/cinema-genres';
import Footer from '../../components/main-page/footer';
import Button from '../../components/main-page/button';
import { Props } from '../../components/app/app';

function MainPage( {img, alt, title, genre, year, cards}: Props): JSX.Element {
  return (
    <React.Fragment>
      <Promo
        img={img}
        alt={alt}
        title={title}
        genre={genre}
        year={year}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres />
          <div className="catalog__films-list">
            {cards.map((card) => (
              <CardFilm card={card} key={card.title} />
            ))}
          </div>
          <Button />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default MainPage;
