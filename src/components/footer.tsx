import Image from "next/image";
import styles from "./footer.module.css";

export default async function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={"/assets/pokeball.svg"}
        alt="Pokeball footer"
        width={32}
        height={32}
      />
      <p>Fabrica de Software.Alguns direitos reservados.</p>
    </footer>
  );
}
