import { useRecoilState } from 'recoil';
import useSpotify from '../hooks/use-Spotify';
import millisToMinutesAndSeconds from '../lib/time';
import { currentTrackIdState, isPlayingState } from '../atoms/songAtom';
const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const time = millisToMinutesAndSeconds();

  const [currentTrackId, setCurrentTrackId] = useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  
  const playSong = () => {
    setCurrentTrackId(track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [track.track.uri],
    });
  };

  return (
    <div
      onClick={playSong}
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rounded-lg cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10" src={track.album.images[0].url} alt="" />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{track.name}</p>
          <p className="w-40">{track.artists[0].name}</p>
        </div>
      </div>

      <div className=" flex items-center justify-between ml-aut md:ml-0">
        <p className="w-40 hidden md:inline ">{track.album.name}</p>
        <p>duration {millisToMinutesAndSeconds(track.duration_ms)} </p>
      </div>
    </div>
  );
};

export default Song;
