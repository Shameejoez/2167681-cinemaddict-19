import {NAMES, TOTAL_RAITING, POSTER, COUNTRY, AGE_RATING, GENRE,
  FILM_NAME, DESCRIPTIONS, BUTTON_STATUS, DATE, DURATION, EMOTION, } from './mocks-data.js';
import {getRandomIntInclusiveNotFloor, getRandomIntInclusiveArrayElement,
  getRandomIntInclusive, getDate, nowDate, getRandomUniqInt} from '../util.js';

//ID для фильмов
const createFilmId = getRandomUniqInt(1,30);
// ID для комментов
const createCommentId = getRandomUniqInt(100,900);

//диапазон случаного количества комментов
const COMMENTS_COUNT_INC = {
  min: 1,
  max: 5,
};


//структура инфо фильма
const createFilmInfo = () => ({
  id: createFilmId() ,
  comments: generateArrayComments(),
  filmInfo: {
    title: getRandomIntInclusiveArrayElement(FILM_NAME),
    alternativeTitle: `Origin: ${FILM_NAME}.`,
    totalRating: getRandomIntInclusiveNotFloor(TOTAL_RAITING.min, TOTAL_RAITING.max),
    poster: getRandomIntInclusiveArrayElement(POSTER),
    ageRating: getRandomIntInclusiveArrayElement(AGE_RATING),
    director: getRandomIntInclusiveArrayElement(NAMES),
    writers: getRandomIntInclusiveArrayElement(NAMES),
    actors: `${getRandomIntInclusiveArrayElement(NAMES)} ,${getRandomIntInclusiveArrayElement(NAMES)} 
	 ,${getRandomIntInclusiveArrayElement(NAMES)}`,
    release: {
      date: getRandomIntInclusiveArrayElement(DATE),
      releaseCountry: getRandomIntInclusiveArrayElement(COUNTRY),
    },
    duration: getRandomIntInclusiveArrayElement(DURATION),
    genre: getRandomIntInclusiveArrayElement(GENRE),
    description: getRandomIntInclusiveArrayElement(DESCRIPTIONS)
  },
  userDetails: {
    watchlist: getRandomIntInclusiveArrayElement(BUTTON_STATUS),
    alreadyWatched: getRandomIntInclusiveArrayElement(BUTTON_STATUS),
    watchingDate: getDate(DATE),
    favorite: getRandomIntInclusiveArrayElement(BUTTON_STATUS),
  }
});

//структура комментария
const createComment = () => ({
  id: createCommentId(),
  author: getRandomIntInclusiveArrayElement(NAMES) ,
  comment:getRandomIntInclusiveArrayElement(DESCRIPTIONS) ,
  date: nowDate(),
  emotion: getRandomIntInclusiveArrayElement(EMOTION)
});


// массив комментов
const generateArrayFilmsInfo = (amount) => {
  const filmsCards = [];

  for (let i = 1; i <= amount; i++) {
    filmsCards.push(createFilmInfo());
  }

  return filmsCards;
};

function generateArrayComments () {
  const commentsCards = [];

  for (let i = 1; i <= getRandomIntInclusive(COMMENTS_COUNT_INC.min, COMMENTS_COUNT_INC.max); i++) {
    commentsCards.push(createComment());
  }

  return commentsCards;
}


export {
  generateArrayFilmsInfo,
  createFilmInfo,

};
