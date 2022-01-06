import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';
import spotifyApi from '../lib/spotify'
// const spotifyApi = new SpotifyWebApi({
//   clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
//   clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
// });
function useSpotify() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      // If refresh access token attempt fails, direct to login page..
      if (session.error === 'RefreshAccessTokenError') {
        signIn();
      }
      // @ts-ignore
      spotifyApi.setAccessToken(session.user.accessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify;
