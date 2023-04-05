export function FetchFunction(value, page) {
  const KEY = `30100311-f3864219c2c65e8e904a2d1d0`;
  return fetch(
    `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&page=${page}`
  );
}
