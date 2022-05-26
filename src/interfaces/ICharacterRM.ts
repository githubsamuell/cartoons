export interface ICharacterRM {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
  origin: OriginCharacter;
  location: LocationCharacter;
}

interface OriginCharacter {
  name: string;
  url: string;
}

interface LocationCharacter {
  name: string;
  url: string;
}
