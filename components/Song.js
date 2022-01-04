import useSpotify from '../hooks/use-Spotify';
import millisToMinutesAndSeconds from "../lib/time"

const Song = ({ order, track }) => {
  const spotifyApi = useSpotify();
  const time = millisToMinutesAndSeconds()
  console.log('t',  +time)
  return (
    <div className="grid grid-cols-2">
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10" src={track.album.images[0].url} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.artists[0].name}</p>
        </div>
      </div>

        <div className=" flex items-center justify-between ml-aut md:ml-0">
          <p className="hidden md:inline">{track.album.name}</p>
          <p>duration {millisToMinutesAndSeconds(track.duration_ms)} </p>
        </div>
    </div>
  );
};

export default Song;
