import { createStore, combineReducers  } from 'redux';
import initialState from './initialState';
import listsReducer from './listsReducer';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

export const addColumn = payload => ({ type: 'app/columns/ADD_COLUMN', payload });

export const addCard = payload => ({ type: 'app/cards/ADD_CARD', payload});

export const addList = payload => ({ type: 'app/lists/ADD_LIST', payload})

export const getSearchString = payload => ({type: 'app/cards/UPDATE_SEARCHSTRING', payload});

export const getToggleCardFavorite = payload => ({type: 'app/cards/TOGGLE_CARD_FAVORITE', payload})

export const removeCard = payload => ({type: 'app/cards/REMOVE_CARD', payload})


const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;