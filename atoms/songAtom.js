import { atom } from 'recoil';

export const currentTrackIdState = atom({
  key: ' currentTrackIdState', // unique ID (sith respect to others/selectors))
  default: null, // default value (aka initial value)
});

export const isPlayingState = atom({
  key: ' isPlayingState',
  default: false,
});
