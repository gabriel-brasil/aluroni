import { useState } from "react";
import classNames from "classnames";
import sorterOptions from "../../data/sorterOptions.json";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

import styles from "./sorter.module.scss";
import { CgOptions } from "react-icons/cg";

interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [opened, setOpened] = useState(false);
  const sorterName =
    sorter &&
    sorterOptions.find((sorterItem) => sorterItem.value === sorter)?.label;

  return (
    <button
      className={classNames({
        [styles.sorter]: true,
        [styles["sorter--actived"]]: sorter !== "",
      })}
      onClick={() => setOpened(!opened)}
      onBlur={() => setOpened(false)}
    >
      <span>{sorterName || "Ordenar por"}</span>
      {opened ? (
        <MdKeyboardArrowUp size={25} />
      ) : (
        <MdKeyboardArrowDown size={25} />
      )}
      <div
        className={classNames({
          [styles.sorter__optionsWrapper]: true,
          [styles["sorter__optionsWrapper--actived"]]: opened,
        })}
      >
        {sorterOptions.map((sorterItem) => (
          <div
            className={styles.sorter__option}
            key={sorterItem.label}
            onClick={() => setSorter(sorterItem.value)}
          >
            {sorterItem.label}
          </div>
        ))}
      </div>
    </button>
  );
}
