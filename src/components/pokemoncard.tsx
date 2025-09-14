import styles from "./pokemoncard.module.css";

interface Props {
  name: string;
  image: string;
  id: number;
}

export default function PokemonCard({ name, image, id }: Props) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <span className={styles.id}>#{id}</span>
    </div>
  );
}
