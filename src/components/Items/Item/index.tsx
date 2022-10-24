import classNames from "classnames";

import menuOptions from "../../../data/menuOptions.json";

import styles from "./item.module.scss";

type menuOption = typeof menuOptions[0];

export default function Items(props: menuOption) {
  const { title, description, serving, price, size, photo, category } = props;

  return (
    <li className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label}`]]: true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portions}>{size}g</div>
          <div className={styles["item__amount-peoples"]}>
            Serve {serving} {serving > 1 ? "pessoas" : "pessoa"}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </li>
  );
}
