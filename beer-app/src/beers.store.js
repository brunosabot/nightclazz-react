import { loadBeers, sortByPrice } from './lib';

const defaultValues = {
  beers: [],
  sortedBeers: [],
};

export const updateBeers = (dispatch) => async () => {
  const beers = await loadBeers();

  dispatch({ type: 'LOAD_BEER', values: beers, sortedValues: sortByPrice(beers) });
};

export default (state = defaultValues, action) => {
  if (action.type === 'LOAD_BEER') {
    return { ...state, beers: action.values, sortedBeers: action.sortedValues };
  }

  return state;
};
