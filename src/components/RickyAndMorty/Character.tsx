import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { ICharacterRM } from '../../interfaces/ICharacterRM';
import '../../css/RickyAndMorty/Character.css'

type PrivateProps = {
  character: ICharacterRM;
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
