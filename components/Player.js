import { useSession } from 'next-auth/react';
import useSpotify from '../hooks/use-Spotify';
import { useRecoilState } from 'recoil';
import { isPlayingState, currentTrackIdState } from '../atoms/songAtom';
import { useState } from 'react';
const Player = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();

  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
  const [volume, setVolume] = useState();
  return (
    <div>
      {/* left */}
      <div>
        <img className=" " />
      </div>
    </div>
  );
};

export default Player;
