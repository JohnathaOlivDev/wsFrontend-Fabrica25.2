import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import SearchBar from "./searchbar";

export default async function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/assets/pokeball.svg"
              alt="icon pokeball"
              width={32}
              height={32}
            />
          </Link>
        </div>

        <div className={styles.center}>
          <SearchBar />
        </div>

        <div className={styles.right}>
          <Link href="/favorite" className={styles.favorites}>
            Favorites
          </Link>
        </div>
      </nav>
    </header>
  );
}
