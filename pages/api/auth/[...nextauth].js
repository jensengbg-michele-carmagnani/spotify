import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';

import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';

async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken();
    console.log('REFRESHED TOKEN ISSUED', refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: `${Date.now} ${refreshedToken.expires_in * 1000}`, // 1 hour as 3600 returns from spotify API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken,
    };
  } catch (error) {
    console.error(error);
    return {
      ...token,
      error: 'refreshAccessTokenError',
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, account, user }) {
      // initial sing in
      if (account && user) {
        return {
          ...token,
          acccessToken: account.acces_token,
          refresToken: account.rerr_refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // we are handling expiry times Milliseconds hence * 1000
        };
      }
      // return previos token if the acces token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        console.log('ACCESS TOKEN IS VALID');
        return token;
      }

      console.log('ACCESS TOKEN HAS EXPIRED, REFRESHING...');
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
