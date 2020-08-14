export default async function fetchWine() {
  const wineFetch = await fetch(
    "https://cors-anywhere.herokuapp.com/https://api.globalwinescore.com/globalwinescores/latest/",
    {
      headers: {
        Accept: "application/json",
        Authorization: "Token ebf0554796ea7868cb3b67e69986d90e25667416",
      },
    }
  );
  const response = await wineFetch.json();
  const uniqueWines = response.results.filter(
    (wine, index) =>
      response.results.findIndex((other) => other.lwin === wine.lwin) === index
  );
  return uniqueWines;
}
