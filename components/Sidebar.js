import {
  RssIcon,
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';

import { signOut, useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import useSpotify from '../hooks/use-Spotify';
import { playlistIdState } from '../atoms/playlistAtom';

const Sidebar = () => {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [playlists, setPlayLists] = useState([]);
  const [playlistId, setPlaylistId] = useRecoilState(playlistIdState);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayLists(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  return (
    <div
      className="
      text-gray-500 p-5 
      text-xs lg:text-sm sm:max-w-[12rem] lg:max-w-[15rem] hidden md:inline-flex
      border-r
     border-gray-900
      overflow-y-scroll 
      scrollbar-hide
      h-screen
      "
    >
      <div className="space-y-4 ">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 hover:text-white"
        >
          <HomeIcon className="h-5 w-5" />
          <p>Logout </p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t--[0.1px] border-gray-900" />
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button
          className="flex items-center space-x-2 text-blue-800 hover:text-white
        "
        >
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <hr className="border-t--[0.1px] border-gray-900" />

        {playlists.map((song, index) => (
          <p
            onClick={() => setPlaylistId(song.id)}
            key={song.id}
            className="cursor-pointer hover:text-white"
          >
            {song.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
