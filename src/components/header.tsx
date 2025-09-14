import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link href="/" className={styles.logo}>
          <Image
            src={"/assets/pokeball.svg"}
            alt="icon pokeball"
            width={32}
            height={32}
          />
        </Link>
        <Link href={"./favorite"}>Favorites</Link>
      </nav>
    </header>
  );
}
