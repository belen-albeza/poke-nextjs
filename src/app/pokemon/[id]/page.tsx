import { FC } from "react";
import Image from "next/image";

import styles from "./page.module.css";

type PokemonDetails = {
  name: string;
  image: string;
  types: string[];
};

const getData: () => Promise<PokemonDetails> = async () => {
  return {
    name: "Pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["electric"],
  };
};

const PokemonPage: FC = async () => {
  const { name, image, types } = await getData();

  return (
    <article className={styles.page}>
      <h1 className={styles.title}>{name}</h1>
      <p>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.sprite}
          src={image}
          alt={`Image of ${name}`}
          width={96}
          height={96}
        />
      </p>
      <ul className={styles.types}>
        {types.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </article>
  );
};

export default PokemonPage;
