import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import AceOfClubs from '../assets/clubs_ace.svg';
import AceOfDiamonds from '../assets/diamonds_ace.svg'
import AceOfHearts from '../assets/hearts_ace.svg'
import AceOfSpades from '../assets/spades_ace.svg'

export const RecordGames = () => {
    return (
    <div className="suiteSelectorContainer">
    <ImageList className="suiteSelectorImageList" sx={{ width: 600, height: 300 }} cols={4} rowHeight={164} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    );
}

const itemData = [
  {
    img: AceOfClubs,
    title: 'Clubs',
  },
  {
    img: AceOfSpades,
    title: 'Spades',
  },
  {
    img: AceOfHearts,
    title: 'Hearts',
  },
  {
    img: AceOfDiamonds,
    title: 'Diamonds'
  }
];