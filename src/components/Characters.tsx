import { useQuery } from "react-query";
import { ICharacter } from "../interfaces/ICharacter";
import Character from "./Character";
import "../css/Characters.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Characters() {
  const [page, setPage] = useState(42);

  const fetchCharacters = async ({ queryKey }: any) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  };

  const { data, error, isLoading, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharacters, {keepPreviousData: true}
  );

  console.log(data);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something is wrong</div>;

  return (
    <div className="row justify-content-center w-100">
      <h1>Ricky And Morty</h1>
      {data.results.map((e: ICharacter) => (
        <Character character={e} />
      ))}
      <div className="buttons">
        <button
          className="btn btn-outline-success"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          type="button"
        >
          Previous
        </button>
        <button
          disabled={!data.info.next || isPreviousData}
          className="btn btn-outline-success"
          type="button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Characters;
