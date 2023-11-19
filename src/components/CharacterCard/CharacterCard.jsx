import { Card, Photo } from './CharacterCard.styled';

export const CharacterCard = ({ item }) => {
  // const years =
  return (
    <Card>
      <h2>{item.name}</h2>
      <Photo src={item.image} alt={item.name} />
      <p>{item.wizard && 'WIZARD'}</p>
      <p>{item.alive && 'ALIVE'}</p>
      <h3>{item.wizard && item.house}</h3>
      <p>{item.wizard && 'Patronus: ' + item.patronus}</p>
      <p>{item.dateOfBirth}</p>
      <p>{item.ancestry}</p>
    </Card>
  );
};
