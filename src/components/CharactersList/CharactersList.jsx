import { CharacterCard } from 'components/CharacterCard/CharacterCard';
import { List } from './CharactersList.styled';

export const CharactersList = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <CharacterCard item={item} key={item.id} />
      ))}
    </List>
  );
};
