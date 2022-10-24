import { useState } from "react";
import { ReactComponent as Logo } from "assets/images/logo.svg";

import Items from "components/Items";
import Filter from "components/Filter";
import Sorter from "components/Sorter";
import SearchEngine from "components/SearchEngine";

import styles from "./menu.module.scss";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState("");

  return (
    <main>
      <nav className={styles.nav}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Casa da Massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Cardápio</h3>
        <SearchEngine search={search} setSearch={setSearch} />
        <div className={styles.menu__filters}>
          <Filter filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
        <Items search={search} filter={filter} sorter={sorter} />
      </section>
    </main>
  );
}
