import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import spotifyApi from '../lib/spotify';

const useSpotify = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct to login page..
      if (session.error === 'RefreshAccessTockenError') {
        signIn();
      }
      // @ts-ignore
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
};

export default useSpotify;
