export const fetchCharactersRM = async ({ queryKey }: any) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
  );
  return response.json();
};

export const fetchCharactersN = async () => {
    const response = await fetch(
      `https://naruto-api.herokuapp.com/api/v1/characters`
    );
    
    return response.json();
  };
