import { atom } from 'recoil'

export const FavListState = atom({
    key: 'FavListState', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });