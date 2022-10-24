import filterOptions from "../../data/filterOptions.json";
import classNames from "classnames";

import styles from "./filter.module.scss";

interface Option {
  id: number;
  label: string;
}

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter(props: Props) {
  function selectFilter(option: Option) {
    return props.filter === option.id
      ? props.setFilter(null)
      : props.setFilter(option.id);
  }

  return (
    <div className={styles.filtersWrapper}>
      {filterOptions.map((filterItem) => (
        <button
          className={classNames({
            [styles.filtersWrapper__filter]: true,
            [styles["filtersWrapper__filter--actived"]]:
              props.filter === filterItem.id,
          })}
          key={filterItem.id}
          onClick={() => selectFilter(filterItem)}
        >
          {filterItem.label}
        </button>
      ))}
    </div>
  );
}
