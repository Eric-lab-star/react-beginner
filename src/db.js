export const movieDB = async () => {
  const {
    data: { movies },
  } = await (
    await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )
  ).json();
  return movies;
};
