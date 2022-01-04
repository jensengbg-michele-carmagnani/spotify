import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

export const playlistState = atom({
  key: 'playlistState',
  default: null,
});

export const playlistIdState = atom({
  key: 'playlistIdState',
  default: '0KOjj8UntVgFeMs4mvciY7',
});
