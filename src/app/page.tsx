"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import PokemonGrid from "../components/pokemongrid";
import { fetchPokemons, Pokemon } from "../utils/api";

export default function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 20;
  const loader = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    setLoading(true);
    try {
      const newPokemons = await fetchPokemons(limit, offset);
      setPokemons((prev) => [...prev, ...newPokemons]);
      setOffset((prev) => prev + limit);
    } catch (err) {
      console.error("Failed to load pokemons:", err);
    } finally {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    loadMore();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) loadMore();
      },
      { root: null, rootMargin: "20px", threshold: 1.0 }
    );

    if (loader.current) observer.observe(loader.current);
    return () => {
      if (loader.current) observer.unobserve(loader.current);
    };
  }, [loader, loadMore, loading]);

  return (
    <div className="min-h-screen bg-gray-100">
      <PokemonGrid pokemons={pokemons} />
      <div ref={loader} className="text-center py-4">
        {loading && <p>Loading...</p>}
      </div>
    </div>
  );
}
