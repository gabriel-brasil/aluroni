import React from "react";
import { CgSearch } from "react-icons/cg";

import styles from "./searchengine.module.scss";

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchEngine(props: Props) {
  return (
    <div className={styles.search}>
      <input
        value={props.search}
        onChange={(event) => props.setSearch(event.target.value)}
        placeholder="Buscar"
      />
      <CgSearch size={20} color="#4c4d5e" />
    </div>
  );
}
