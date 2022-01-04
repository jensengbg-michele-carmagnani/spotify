import { useRecoilValue } from 'recoil';
import { playlistState } from '../atoms/playlistAtom';
import Song from './Song'
const Songs = () => {
  const playlist = useRecoilValue(playlistState);
  console.log('songs in songsComp',playlist?.tracks.items);
  return (
    <div className= "px-8 flex-col space-y-1 pb-28 text-white ">
      {playlist?.tracks.items.map((playlistItem, i) => (
        // @ts-ignore
        <Song key={playlistItem.track.id} track={playlistItem.track} order={i} />
      ))}
    </div>
  );
};

export default Songs;
