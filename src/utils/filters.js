import {FilterType} from '../const.js';


const filter = {
  [FilterType.WATCHLIST]: (cards) => cards.filter((card) => card.userDetails.watchlist),
  [FilterType.HISTORY]: (cards) => cards.filter((card) => card.userDetails.alreadyWatched),
  [FilterType.FAVORITE]: (cards) => cards.filter((card) => card.userDetails.favorite),


};


export {
  filter
};
