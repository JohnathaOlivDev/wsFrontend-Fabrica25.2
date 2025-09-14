"use client";

import { useState, useEffect } from "react";
import { fetchPokemons, Pokemon } from "@/utils/api";
import styles from "./searchbar.module.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchTerm === "") {
      setPokemons([]);
      return;
    }

    setLoading(true);

    const delayDebounceFn = setTimeout(async () => {
      try {
        const allPokemons = await fetchPokemons();
        const filteredPokemons = allPokemons.filter((p) =>
          p.name.includes(searchTerm)
        );
        setPokemons(filteredPokemons);
      } catch (error) {
        console.error("Failed to fetch pokemons:", error);
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      {loading && <p className={styles.loading}>Loading...</p>}

      {searchTerm && pokemons.length > 0 && (
        <div className={styles.resultsGrid}>
          {pokemons.map((pokemon) => (
            <div key={pokemon.id} className={styles.resultCard}>
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className={styles.pokemonImage}
              />
              <h3 className={styles.pokemonName}>{pokemon.name}</h3>
              <p className={styles.pokemonId}>#{pokemon.id}</p>
            </div>
          ))}
        </div>
      )}

      {searchTerm && !loading && pokemons.length === 0 && (
        <p className={styles.noResults}>No Pokémon found.</p>
      )}
    </div>
  );
}
