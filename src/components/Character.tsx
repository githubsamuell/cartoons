import { ICharacter } from "../interfaces/ICharacter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import '../css/Character.css'

type PrivateProps = {
  character: ICharacter;
};

function Character({ character }: PrivateProps) {
  return (
    <Card className="container" key={character.id} style={{ width: '15rem', height: '30rem' }}>
      <Card.Img variant="top" alt={character.name} src={character.image} />  
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
            <p>Gender: {character.gender}</p>
            <p>Specie: {character.species}</p>
            <p>Status: {character.status}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Character;
