export async function getMovies() {
  try {
    const response = await fetch('/data/movies.json');
    if (!response.ok) {
      throw new Error(`Ошибка загрузки JSON: ${response.statusText}`);
    }
    const jsonData = await response.json();
    jsonData.items.length = 16;
    return jsonData.items
  } catch (error) {
    console.error('Ошибка при запросе JSON:', error);
    return []
  }
}

export async function getMovieById() {
  try {
    const response = await fetch('/data/movie-details.json');
    if (!response.ok) {
      throw new Error(`Ошибка загрузки JSON: ${response.statusText}`);
    }
    const jsonData = await response.json();

    return jsonData
  } catch (error) {
    console.error('Ошибка при запросе JSON:', error);
    return {}
  }
}
