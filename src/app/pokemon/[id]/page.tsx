import { FC } from "react";

import styles from "./page.module.css";

type PokemonDetails = {
  name: string;
  image: string;
  types: string[];
};

type ApiResponse = {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
};

const getData: (id: string) => Promise<PokemonDetails> = async (id: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch API data for pokemon with ID: ${id}`);
  }

  const data = (await response.json()) as ApiResponse;

  return {
    name: data.name,
    image: data.sprites.front_default,
    types: data.types.map((x) => x.type.name),
  };
};

type PageProps = {
  params: {
    id: string;
  };
};

const PokemonPage: FC<PageProps> = async ({ params }: PageProps) => {
  const { id } = params;
  const { name, image, types } = await getData(id);

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
