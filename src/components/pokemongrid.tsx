import styles from "./pokemongrid.module.css";
import PokemonCard from "./pokemoncard";
import { Pokemon } from "../utils/api";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonGrid({ pokemons }: Props) {
  return (
    <div className={styles.grid}>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
}
