export const creditCard = /^[0-9]{3}-[0-9]{3}$/

export const uppercase = (text) => text.toUpperCase();

export const currency = (price) => `${price} €`;

export const priceSorter = (a, b) => a.price - b.price;

export const sortByPrice = (items) => items.sort(priceSorter);

export const loadBeers = async () => {
  const resBeers = await fetch('http://localhost:1337/api/v1/beers');
  const beers = await resBeers.json();

  return {
    beers,
    beersSortedByPrice: sortByPrice(beers)
  };
};

export const loadBasket = async () => {
  const resBasket = await fetch('http://localhost:1337/api/v1/basket');
  const basket = await resBasket.json();

  return { basket };
};

export const addBasket = async (beer) => {
  const options = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(beer)
  };
  const resBasket = await fetch('http://localhost:1337/api/v1/basket', options);
  const basket = await resBasket.json();

  return { basket };
};

export const sendBasket = async (beer) => {
  const options = { method: 'POST' };
  await fetch('http://localhost:1337/api/v1/basket/confirm', options);

  return true;
};
