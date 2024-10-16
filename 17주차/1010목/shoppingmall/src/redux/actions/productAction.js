const getProduct = () => {
  return async () => {
    const url = `https://my-json-server.typicode.com/Onuelen/musinsa/products?q=${searchQuery}`;
    const response = await fetch(url);
    dispatchEvent;
    const data = await response.json();
    console.log(data);
  };
};

export const productAction = { getProduct };
