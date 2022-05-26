import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import { ICharacterN } from '../../interfaces/ICharacterN';
import '../../css/RickyAndMorty/Character.css'

type PrivateProps = {
  character: ICharacterN;
};

function Character({ character }: PrivateProps) {
  return (
    <Card className="container" key={character.id} style={{ width: '15rem', height: '30rem' }}>
      <Card.Img variant="top" alt={character.name} src={character.images[0]} />  
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Text>
            <p>Altura: {character.info.Altura}</p>
            <p>Peso: {character.info.Peso}</p>
            <p>Patente: {character.info['Patente Ninja']}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Character;
