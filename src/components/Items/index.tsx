import { useState, useEffect } from "react";

import menuOptions from "../../data/menuOptions.json";

import Item from "./Item";

import styles from "./items.module.scss";

interface Props {
  search: string;
  filter: number | null;
  sorter: string;
}

export default function Items({ search, filter, sorter }: Props) {
  const [list, setList] = useState(menuOptions);

  function testSearch(title: string) {
    const regex = new RegExp(search, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) {
      return filter === id;
    }
    return true;
  }

  function orderer(newList: typeof menuOptions) {
    switch (sorter) {
      case "portions":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "amount_peoples":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = menuOptions.filter(
      (item) => testSearch(item.title) && testFilter(item.category.id)
    );
    setList(orderer(newList));
  }, [search, filter, sorter]);

  return (
    <ul className={styles.items}>
      {list.map((option) => (
        <Item key={option.id} {...option} />
      ))}
    </ul>
  );
}
