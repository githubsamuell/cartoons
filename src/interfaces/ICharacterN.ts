export interface ICharacterN {
  name: string;
  id: number;
  page: string;
  about: string[];
  images: string[];
  info: CharacterInfo
}

interface CharacterInfo {
  Afiliação: string;
  Altura: string;
  Aniversário: string;
  Idade: string;
  Ocupação: string;
  Parceiro: string;
  ["Patente Ninja"]: string;
  Peso: string;
  ["Registro Ninja"]: string;
  Sexo: string;
  ["Tipo Sanguíneo"]: string;
}
