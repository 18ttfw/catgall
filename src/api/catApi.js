const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

export const fetchCats = async () => {
  const res = await fetch(API_URL);
  return res.json();
};
