import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '4LnTQT9pZuyXG96WS9RNzU',
});
export const playlistState = atom({
  key: 'playlistState',
  default: null,
});
