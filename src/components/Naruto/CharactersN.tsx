import { useQuery } from "react-query";
import Character from "./Character";
import '../../css/RickyAndMorty/Characters.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { fetchCharactersN } from "../../helpers/fetchs";
import { ICharacterN } from "../../interfaces/ICharacterN";


function CharactersN() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading, isPreviousData } = useQuery(
    ["characters", page],
    fetchCharactersN, {keepPreviousData: true}
  );

  console.log(data);
  

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Something is wrong</div>;

  return (
    <div className="row justify-content-center w-100">
      <h1>Ricky And Morty</h1>
      {data.map((e: ICharacterN) => (
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
          disabled={!data || isPreviousData}
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

export default CharactersN;
