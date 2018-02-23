import { addBasket, loadBasket, sendBasket } from './lib';

const defaultValues = {
  beers: [],
};

export const addBeerToBasket = (dispatch) => async (beer) => {
  const beers = await addBasket(beer);

  dispatch({ type: 'LOAD_BASKET', values: beers });
};

export const updateBasket = (dispatch) => async () => {
  const beers = await loadBasket();

  dispatch({ type: 'LOAD_BASKET', values: beers });
};

export const checkoutBasket = (dispatch) => async () => {
  await sendBasket();

  dispatch({ type: 'LOAD_BASKET', values: [] });
};

export default (state = defaultValues, action) => {
  if (action.type === 'LOAD_BASKET') {
    return { ...state, beers: action.values };
  }

  return state;
};
