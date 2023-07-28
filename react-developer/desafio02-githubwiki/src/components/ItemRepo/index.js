import React from "react";
import { ItemContainer } from "./styles";

export const ItemRepo = ({ repo, handleRemove } ) => {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} target="_blank">
        Ver repositório
      </a>
      <br />
      <a
        href="#"
        className="remover"
        onClick={() => {
          handleRemove(repo.id);
        }}
      >
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
};
