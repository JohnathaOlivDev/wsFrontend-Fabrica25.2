import axios from "axios";

export interface Pokemon {
  name: string;
  url: string;
  id: number;
  image: string;
}

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export async function fetchPokemons(
  limit = 20,
  offset = 0
): Promise<Pokemon[]> {
  const res = await api.get(`pokemon?limit=${limit}&offset=${offset}`);
  return res.data.results.map((p: { name: string; url: string }) => {
    const id = p.url.split("/").filter(Boolean).pop();
    return {
      name: p.name,
      url: p.url,
      id: Number(id),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    };
  });
}
